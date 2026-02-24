---
title: Style is Hard
date: 2026-02-20
layout: ../../layouts/BlogLayout.astro
description: My experience with the amazing world of making webpages pretty
tags: [css, style, web]
---

# Style Is Hard.

Since the dawn of time, man has always tried to figure out how to make things pretty.

There's a certain skill to making things pretty, and the truth of the matter is this: programmers are largely bad at making things pretty. That hasn't stopped us from trying...

My journey with styling has gone roughly like this:

1. [CSS](#CSS)
2. [Bootstrap](#Bootstrap)
3. [Tailwind](#Tailwind)
4. Corporate built framework
5. DaisyUI

## CSS

( https://developer.mozilla.org/en-US/docs/Web/CSS )

I originally learned CSS from an online class. I started by learning all the properties and classes and things, then worked building a little test website. I studied it like I studied anything else: I memorized all the things, and once I understood it, I called it done.

I learned one primary thing: like all things on the web, the implementation sucks, but its universal, so its better than 90% of everything else that doesn't have a perfect implementation.

The way I see it, CSS has one primary issue: the C. It stands for Cascading, and its a thing that seems to start with good intentions, but doesn't really work like it should. Cascading is inherent inheritance for markup. It means that if I add a red background to a parent element, then all child elements will have a red background. Its the kind of thing that sounds good, till you reach a certain amount of application complexity. Then you're `fucked`.

## Bootstrap

( https://getbootstrap.com/ )

![bootstrap_button](./images/bootstrap_button.png)

```html
<button type="button" class="btn btn-primary">Primary</button>
```

Bootstrap UI started as Twitter's primary web styling framework. It was intended to simplify web frameworks. It did that remarkably, to the degree that people once complained about the feeling that every single app looked the same.

It's because everyone either used bootstrap or was replicating it. It was and continues to be that good.

## Tailwind

( https://tailwindcss.com/ )

![tailwind_button](./images/tailwind_button.png)

```html
<button class="bg-sky-500 hover:bg-sky-700 ...">Save changes</button>
```

Tailwind was next version of: it's just that good.

Tailwind operates by taking every single thing in CSS and mapping it to a massive set of CSS classes that do not cascade and cleanly interact with each other. Everything has a nice kind of `operation-value-modifier` shorthand that lets the user trivially do all the things, given that they know what they're doing.

It allows you to go from:

```html
<button style="background-color: var(--color-red-500);">Click Me!</button>
```

to:

```html
<button class="bg-red-500">Click Me!</button>
```

## Corporate built framework

## Shadcn

## DaisyUI
