# Pwning pwn.college

## Introduction

For context, <https://pwn.college/> is a platform that primarily focuses on teaching binary exploitation created by Yan Shoshitaishvili and Connor Nelson. The platform is designed to be a self-paced learning environment where users can learn about binary exploitation and practice their skills. I had been very active on the platform for a few months and was top 1 on the leaderboard when I discovered the XSS bug around october 2023.

## Motivation

The platform had just released a feature that allowed users to upload their own challenges in the form of a public dojo, which would then be available for other users to solve. I was excited to try out this new feature and had uploaded a dojo of my own. But then I randomly decided to check the site for XSS and found that I could easily inject arbitrary javascript code into the dojo page in multiple locations with simple script tags.

I mentioned this issue to Connor Nelson who didn't answer but robert wasinger did. This was later confirmed by Connor Nelson, one of the creators of the platform, [here](https://github.com/ConnorNelson/kanak-dojo/commit/5733a3628b67ade75088183ceb8dd2f5df6c786f).

This bug was later fixed inside the dojo with this [commit](https://github.com/pwncollege/dojo/commit/6ae9471c2037318df09382dea2693d812dbf668d).

## Impact

I did not exploit this vulnerability in any way, but it could have been used to steal cookies, perform phishing attacks, or deface the website. The platform is used by many people to learn binary exploitation, and an attacker could have used this vulnerability to steal sensitive information from users.

Afterwards, I received a discord role(bug bounty hunter) on the pwn.college discord server(which I left after a while) and that was it.
