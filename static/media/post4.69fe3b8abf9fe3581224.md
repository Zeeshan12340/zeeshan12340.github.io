# libcue CVE 2023 43641 Nday Analysis

This is my first Nday writeup of a CVE, I picked libcue because the bug at its core is very simple and the repercussions in their entirety allowed one-click remote code execution on a victim's machine.

To give a brief overview of [libcue](https://github.com/lipnitsk/libcue), it's a library used for parsing [CUE sheets](https://en.wikipedia.org/wiki/Cue_sheet_(computing)) which are metadata files containing information about CD/DVD tracks.

## First steps

In order to keep it realistic, without reading the contents of the CVE disclosure, my first thought was to try and fuzz the library and hopefully, rediscover the bug from scratch. So, what follows is my initial (failed) fuzzing approach.

### Fuzzing

Firstly, I downloaded the vulnerable 2.2.1 version from the [releases](https://github.com/lipnitsk/libcue/releases) page. I'll be using [AFLplusplus](https://github.com/AFLplusplus/AFLplusplus/) to fuzz the library, I would recommend reading the documentation pages for it if you want to follow along. I follow the build instructions in the libcue repo and install it to my container.

[![asciicast](https://asciinema.org/a/arTZt1ZEu54QwnOC.svg)](https://asciinema.org/a/arTZt1ZEu54QwnOC)

Note: If you're following along, build with `-DBUILD_SHARED_LIBS=ON` and you may have to copy libcue.so.2 to `/lib/x86_64-linux-gnu/`

Now, we need a couple of things in order to fuzz a library, a "driver" program that calls out the library functions and seed input/corpus.

So, I took the standard_cue.c program in the test folder and modified it to take input from a file whose name is given in the first argument. Note that, we could write our own program but the test program uses a lot of the library functionality and makes our life easier. The [program](https://gist.github.com/Zeeshan12340/2a42afbb9ef3eecccd7d5bceb63af16f) that I'm using does not print any information out as that is mostly irrelevant for my purposes. Compiling the program with afl-clang-fast:

```bash
$ afl-clang-fast -fsanitize=address -lcue -o fuzz fuzz.c
afl-cc++4.36a by Michal Zalewski, Laszlo Szekeres, Marc Heuse - mode: LLVM-PCGUARD
SanitizerCoveragePCGUARD++4.36a
[+] Instrumented 41 locations with no collisions (non-hardened mode) of which are 0 handled and 0 unhandled special instructions.
```

As for the input, we can grab a few example CUE sheet files and minimize them with `afl-cmin`. I grabbed the two examples from [samplerateconverter.com](https://samplerateconverter.com/audio-converter/cue#cue-file-examples), saved them in an input folder and ran `afl-cmin` as follows which left me with one minimized clean input/seed corpus.

```bash
$ afl-cmin -i input/ -o input_unique -- ./fuzz -someopt @@
afl-cmin++4.36a by AFL++ team
    Scanning... 2 files found (7.97/sec) [elapsed 0s]
[+] Found 2 input files
[+] Deduplicating inputs...
    Processed 2/2 files (8.00/sec) [elapsed 0s]...
[+] Remain 2 files after dedup
[+] Sorted files by size
<...trim...>
Written 1 files, covered 2/2 tuples (0.00/sec) [elapsed 0s]
[+] Wrote 1 files.
```

I further trimmed the resulting file so that it's easier for the fuzzer, the final input file that I used was this:

```C
TITLE "First Album"
FILE "Jazzman.flac" FLAC
TRACK 01 AUDIO
INDEX 01 00:00:00
```

Seeing the above, I probably could've skipped the `afl-cmin` part and just wrote the four lines by reading CUE sheets documentation but here we are. (Hindsight is 20/20 at least)

I start fuzzing with the following:

```bash
$ afl-fuzz -i input_unique/ -o output -- ./fuzz -someopt @@
afl-fuzz++4.36a based on afl by Michal Zalewski and a large online community
[+] AFL++ is maintained by Marc "van Hauser" Heuse, Dominik Maier, Andrea Fioraldi and Heiko "hexcoder" Eißfeldt
[+] AFL++ is open source, get it at https://github.com/AFLplusplus/AFLplusplus
[+] NOTE: AFL++ >= v3 has changed defaults and behaviours - see README.md
[+] No -M/-S set, autoconfiguring for "-S default"
[*] Getting to work...
```

and.. we wait...

![Fuzzing](https://i.ibb.co/Mkb7zNtS/Screenshot-from-2026-01-28-17-37-12.png)

After a few hours of fuzzing, no crashes were found. I tried a few more things like improving the seed input, etc but nothing worked.

Only useful thing to come out of this approach was being able to confirm with the sample POC crashing input that my fuzzing program would theoretically have caught the bug if AFLplusplus had sufficiently mutated the input to trigger it.

Crashing POC input:

```bash
FILE pwned.mp3 MP3
TRACK 000 AUDIO
INDEX 4294567296 0
```

![Crash libcue](https://i.ibb.co/hR0ZXKyn/Screenshot-From-2026-02-02-21-33-03.png)

### CodeQL

After (promptly) giving up on the fuzzing approach, I decided to try a different tactic using CodeQL. I cheated to make my life easier and saw the vulnerability class was an integer overflow. I wrote a query to find potential issues in the code related to signed integer comparisons.

To give a brief overview of my setup, I installed the CodeQL vscode extension and the CodeQL CLI. Afterwards, I created a new CodeQL database for the libcue project with the following command(Note: that a clean bin directory where the `cmake` command is already ran is required):

```bash
$ codeql database create c-lib-db --language=c --command="make"
Initializing database at /libcue-2.2.1/bin/c-lib-db.
Running build command: [make]
<..trim..>
Finished zipping source archive (203.57 KiB).
Successfully created database at /libcue-2.2.1/bin/c-lib-db.
```

I then wrote a CodeQL query to find signed integer comparisons that could potentially lead to vulnerabilities. The query looks for comparisons where a signed integer variable is compared against another value, which could lead to unexpected behavior if the signed integer overflows. CodeQL query for [signed overflow](https://gist.github.com/Zeeshan12340/2a42afbb9ef3eecccd7d5bceb63af16f).
It essentially just checks for unsigned comparison against a signed integer variable and checks if that variable is being used as an array offset. Demonstrated in the below youtube video:

[![CodeQL libcue](https://i.ytimg.com/vi/vTqN-rKuFgA/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AGcCYAC0AWKAgwIABABGC0gZShPMA8=&rs=AOn4CLB8yFFsaNPdAJsKmeHsglrXk3znCw)](https://youtu.be/vTqN-rKuFgA)

So, this is kindof a good way to reproduce the issue and verify if the vulnerability exists in the codebase, provided you're already familiar with the class of the bug... anyway, I'm still taking this as a win and we digress.

## Second steps ( giving up entirely)

To give some info about the bug and copying from official disclosure, the function `track_set_index` does not check that `i >= 0`:

```C
void track_set_index(Track *track, int i, long ind)
{
    if (i > MAXINDEX) {
        fprintf(stderr, "too many indexes\n");
                return;
        }

    track->index[i] = ind;
}
```

If i is negative, then this code can write to an address outside the bounds of the array. The value of i is parsed using `atoi` in `cue_scanner.l`:

```C
[[:digit:]]+    { yylval.ival = atoi(yytext); return NUMBER; }
```

`atoi` does not check for integer overflow, so it is easy to get it produce a negative number.

In essence, the bug allows you to do an arbitrary write to the `track->index` array or the memory region where that array is located.

Now, the plan was to write an exploit for this vulnerability that allows pc to be controlled or such was the plan at least...

As with most things, when done in practice, it turned out to be much more difficult. There was no direct way to reach anything useful.

![memory mapping](https://i.ibb.co/HDmPTFsW/cue.png)

So, I looked at the [original POC that pops calculator](https://github.com/github/securitylab/blob/main/SecurityExploits/libcue/track_set_index_CVE-2023-43641/lunar.cue) and it looked like they did a lot of heap massaging even though the "tracks" and other structs were not on program heap but inside separate allocations made by the library itself and other wild stuff to get the exploit working which I simply do not have the time and skill to do.

At this point, I decided to give up on writing an exploit for this vulnerability. However, the journey was still educational and I learned a lot about fuzzing, CodeQL, and the inner workings of libcue.

---------------
Well that's all for this tiny blog post, If you have any questions or suggestions, feel free to reach out to me on Discord `@Zeeshan1234`.
