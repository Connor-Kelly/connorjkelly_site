---
title: JS runtimes
description:
  JS runtimes are sometimes controversial programs where we run our servers.
---

It's my opinion that javascript has one primary problem: It's too useful to be
such a horrible language. \
Anyone who's ever had to write a lot of Javascript at some point has come across
some insane, obtuse behavior; then Googled it, and found some equally insane rationale
for why that behavior is actually good and right and how its entirely a skill issue
for **_you_**.\
It's insane person behavior.

But, at the end of the day, the browser runs on JS. React is the most popular
framework. Typescript is a compiler that compiles loosely typed, bloated
dependency trees into a pretty little bundle of minified, interpreted language
bits that run in a browser which has been optimized ad infinitum. These
technologies are not popular because they're they're perfect, but rather because
they're the best we've got.\
Because, despite the amount of times backend devs and systems engineers and cloud
architects and all other developers will complain about how the web is such a bloated
mess or how it's terrible; the truth of the matter is that Javascript is C for the
modern era. It might bloated, slow, painful, but it runs everywhere, and it's surprisingly
fast, because trillions of dollars worth of tech relies upon it.

#### Why npm / node sucks

I'm not going to act like I'm smarter than the people who wrote NodeJS. I'm
not.\
But, I will complain here about what a dog it is. For the language with the best
tooling across the board, node and npm kind of suck. They're a little slow and starting
to show their age.

#### Why Bun is cool

But is the new kid on the block. Not the first kid on the block to challenge npm
/ node, and definitely won't be the last.\
The headline is this. "Bun is a fast, all in one tool built to replace the many different
tools that we've come to expect in the JS ecosystem." It aims for 100% NodeJs compatibility,
and to act as a unified superset of Node, NPM, Vitest, and Vite.

The reason they can do all of this? They're rewriting it all in Zig. They're
making it all new, even if they're aiming for compatibility with the Node apis.

#### Why Bun is a bad idea and I don't care. (For now)

Bun represents a fracturing of the ecosystem. At the end of the day, when people
are told to install Javascript at a bootcamp or in college or on some tutorial
on youtube, they're gonna be told to install Node as a baseline. That means that
every place where you would write `bun` anything, its going to be transferred
over from something else.\
As with any code, there will be small undefined behavior or little quirks to some
interface. No matter how good it is, there's some tech debt in the fracturing of
the ecosystem.

The important question is this: "Is the tech debt worth the improvements to the
ecosystem?"

For me, the answer is yes.

Because, my projects are small, and my time is limited. Most of the projects I
work on are toys compared to what I deal with at work. So, if its faster and
replaces tools in my stack, I like it.

And, at the end of the day, I like Bun, so I don't particularly care.
