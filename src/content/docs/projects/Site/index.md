---
title: Index
description: The main project file for the ConnorJKelly website
sidebar: 
    order: 1
---

### The Site

I feel like every web dev needs a personal website.
Its weird not to have one, but, to be honest, I write websites all day in my job, and theres only so 
much front end dev a man can do.

So I had a few requirements:

- [ ] Require minimal maintenance
- [ ] Look pretty
- [ ] Be simple to add content to
- [ ] Be hostable anywhere
- [ ] Maybe learn something?

As with all good developers, I'm lazy by nature. Effectively this means that when I work on a project,
I dont want to deal with documenting it, I just want to do the project, and consider the readme to be
the best initial documentation. If I want to add more later, fine, but making it to that initial mvp 
for each project is essential. \
What does this mean? It means I never want to touch react, css, js, or html. 

It's not that I can't do web tech, I already get paid a six figure salary to do that. Its simply that 
I don't want to do web tech with my free time. (And I fear that if I have to deal with complex NPM 
dependencies outside of work, I will commit toaster-bath.)

In my pursuit of the best site for a lazy programmer, I tried a few different stacks out. 

- Nextjs
- Vite + React + Tailwind + Shadcn
- HTMX and express, and associated shenanigans
- Svelte

I also kept these ones in the back of my mind to try out
- Elixir + Phoenix 
- Ratzilla
- Blazor / Razor Pages / whatever the hell is going on in the C# ecosystem + possibly F#
- Rust / Leptos

From each of these experiments, I learned a few things.
1) Setting up javascript sucks, compiling ts to js sucks even harder, but is still worth the work.
2) The greatest barrier to me is making it work is css, not js
3) Most of the js frameworks all do the exact same thing.
4) Starting from scratch isnt fun, and produces bad results

Most of all I learned two lessons: First, the biggest drain on my getting work done is not the
work itself, but rather the suck that comes up with just getting js to work. If I need to get react, 
webpack, ts, tailwind, shadcn, vite, react-router, and whatever else working, then fine. But the
second that I have to deal with crazy, obscure js configuration errors, because tailwind doesnt play
well with react for this random patch version thats the default under vite, the second I have to deal
with that, I'm done for the day. I can do hard things, I enjoy difficult projects, but configuration 
errors aren't fun. And I'm not getting paid for this. \
Second, that I'm not good at making websites look good. I'm an engineer and at times an artist, but
those dont intersect. 9 times out of 10, my ui is going to look better if I steal it from somewhere else.
And I don't think theres anything wrong with that.

Specifically I had these problems with each framework:

- Nextjs:
    - yes, its batteries included, but I feel like I need to take a course on nextjs and its strange
    obscurities. For having picked up React in a few days, it felt like I was relearning how everything
    should work, and it just wasnt tranferrable. Also, Idk if it was my system, but it seemed buggy af
- V + R + T + Sh:
    - honestly, I really liked this one. This was the one that made me feel like I was learning something,
    but it was just a pain to build everything from scratch. Every feature I wanted to add was a challenge,
    but not the kind of challenge I was looking for, rather a kind of configuration hell. This is the one 
    I would use if I had to produce an app for a startup or something.
- HTMX + server side shenanigans
    - this one is dope, and feels like you're in permanent hacker mode. Theres a part that I love about it,
    but I realize more and more that I want a static site. I want something I can store on a box and not
    have a wild hand-rolled server going all myself. This would be super cool for taking a html site and 
    grafting real features onto it.
- Svelte:
    - It felt like Vue (which I worked on in my final internship), in that if kind of felt like a 
    second class citizen to React. Kind of like how theres NPM and the other JS package managers,
    but it felt more like pnpm rather than bun (which I think feels like a genuine successor). It was
    good, but it didn't excite me. 


### Where I've settled (For Now... )

#### Astro / Starlight
Astro is a genuinely cool piece of tech. It looks to me to be primarily a static site generator, but
with all the dope cutting edge web technologies built in. Starlight is a pre-designed wiki built by 
the astro team for astro. \
It works like this: 

This is the first steps to a good looking mvp:

1) Set up your basic site parameters:
    - page names, collections, urls, assets
2) Write markdown in the collections
3) Add some stuff to the `astro.config.mjs` to compensate
4) Profit
5) GOTO `2)`

I worry about using a wiki framework as a child framework of a more obscure project like astro.
However, the buy in cost is almost zero for something like this. The majority of the work I do on this
site is content rather than design, ie, I can always host MD files anywhere, its relatively platform 
agnostic and it shouldn't ever need to change much from the initial product.

Lets revisit my checklist: 
- [X] Require minimal maintenance
    - The framework is dead simple, the content is markdown, if Starlight deprecates, I move to something
    like docusaurus.
- [X] Look pretty
    - Its simple, but I like it. I dont have to write the css, and [here](https://starlight.astro.build/guides/css-and-tailwind/#styling-starlight-with-tailwind)
    I can get a copy pastable theme with the colors I like.
- [X] Be simple to add content to
    - Md ftw.
- [?] Be hostable anywhere
    - This is yet unsolved, but I think I just need to host the build in a cdn, something like digitalocean 
    could be super cheap and easy.
- [?] Maybe learn something?
    - I learned a bit about personal sites. The thing to learn is to set yourself up for success. If you dont enjoy
    it, you wont work on it after a long day of staring at sketchy php at work.


title: Index
description: the index


---
