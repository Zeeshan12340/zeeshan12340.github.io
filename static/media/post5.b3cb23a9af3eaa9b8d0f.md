# Pwning pwn.college (again)

## Introduction

A while back I wrote about a [stored XSS I found in pwn.college's public dojo feature](/posts/2). If you haven't read that one, the short version is: <https://pwn.college/> is a platform for learning binary exploitation (and much more) built by Yan Shoshitaishvili, Connor Nelson and [a bunch of great people](https://pwn.college/sensei), I've spent a lot of time on it, and I occasionally like to poke at the site itself instead of the challenges.

Ah ****, here we go again. Same platform, different bug, and this time it was a broken access control issue rather than anything flashy.

## Motivation

The nice thing about pwn.college is that the whole platform is [open source](https://github.com/pwncollege/dojo). So instead of black-box poking at endpoints and guessing, you can just clone the repo and read exactly what the server does.
My plan was simple:

1. Find all the public API routes that take user-controlled input (especially anything that takes a `user_id`).
2. Figure out how the "hidden user" privacy feature is actually enforced in code.
3. Check that every relevant endpoint enforces it.

pwn.college lets you hide your profile so you don't show up publicly. So the interesting question was: *is that privacy check applied consistently everywhere, or did one endpoint forget about it?*

## How hidden users work

The page that renders someone else's profile lives in `pages/users.py`, and it does:

```python
@users.route("/hacker/<int:user_id>")
def view_other(user_id):
    user = Users.query.filter_by(id=user_id).first()
    if user is None or user.hidden:
        abort(404)
    return view_hacker(user)
```

If the user doesn't exist *or* they've marked themselves as hidden, you get a `404`. From the outside, a hidden user is indistinguishable from a user that was never there.

I grepped around for `hidden` and this pattern (`user.hidden` → `abort(404)` / return 404) showed up on basically every route that dealt with a specific user... except one.

## The bug

The activity API endpoint, which powers the little contribution/solve graph on a profile, is defined in `api/v1/activity.py`. It looked up the user by id and happily returned their entire solve history:

```python
@activity_namespace.route("/<int:user_id>")
class UserActivity(Resource):
    def get(self, user_id):
        user = Users.query.get(user_id)
        # ...builds and returns the user's full solve activity...
        return {"success": True, "activity": get_user_activity(user)}
```

But something's missing. There's no `user.hidden` check. Every other user-facing route gated hidden profiles behind a 404, but this one just fetched the user straight out of the database with `Users.query.get(user_id)` and handed back their data. No authentication required either.

And because pwn.college user IDs are sequential integers, this isn't just a simple "leak one profile", you can trivially walk the whole ID space and dump the solve history and timestamps of every hidden user on the platform.

## Verifying it

I tested this on the live site against my own account (user id `4912`), with my profile set to hidden. I would show up as hidden:

```bash
# Hidden profile -> the site 404s, as expected
$ curl -I https://pwn.college/hacker/4912
HTTP/2 404
```

But the activity API would return the data:

```bash
$ curl -s https://pwn.college/pwncollege_api/v1/activity/4912
{"success": true, "activity": [ <...trim...> ]}
```

`200 OK` with the full activity payload. So, you could bypass the check by hitting the API route directly resulting in broken access.
 not to be seen.

## The fix

The fix is just the missing check, ported over from the page route. `get_current_user` and adding the relevant check:

```python
from ...utils import get_current_user

class UserActivity(Resource):
    def get(self, user_id):
        user = Users.query.get(user_id)
        current_user = get_current_user()
        if not user or (user.hidden and getattr(current_user, "id", None) != user.id):
            return {"success": False, "error": "User not found"}, 404
        # ...
```

Now a hidden user 404s here too, unless *you* are that user.

## Impact

Moderate severity (CVSS 5.3). No code execution, no account takeover but it's still a privacy issue. Anyone, unauthenticated, could enumerate hidden accounts and pull their solve history and activity timestamps.

## Timeline & disclosure

I reported this privately through GitHub's [security advisory](https://github.com/pwncollege/dojo/security/advisories/GHSA-p423-qc2f-9j7g) flow. The timeline:

- **May 20, 2026** — found and reported the bug.
- **July 15, 2026** — accepted by Zardus (Yan Shoshitaishvili).
- **July 28, 2026** — fixed and advisory published the same day. A CVE was requested by Zardus on that date.

So it was about a two-month wait for the initial response.

As of writing, the CVE still hasn't been assigned by GitHub.

------------

That's it for round two. If you have questions or just want to chat about stuff, reach out on Discord `@Zeeshan1234`. Ciao!
