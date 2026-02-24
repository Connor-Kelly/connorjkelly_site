---
title: Vim Motions are the way
date: 2026-02-23
layout: ../../layouts/BlogLayout.astro
description: Vim motions are game changing, if you learn them, you'll love them
tags:
  - ergonomics
  - software
  - tools
---
# Vim Motions are the way

Vim isn't just a stupid little program used by nerds. It's that, but its so much more. 
## Vim is a way of life.

Vim is based on Vi, but its VI improved, thus the additional 'm', Neovim aka nvim is a fork of Vim that aims to make the Vim experience better by using a different programming language as its configuration language (vimscript -> lua), LazyVim is a configuration for Neovim which is an improvment of vim which is an improvement of vi.

Vi was written in 1976. That's 50 years ago as of the time I am writing this. I've seen installed on everything from mainframes to small business servers to supercomputers. 

Neovim is the most popular fork of the tree descending from `vi` . So for the sake of argument, when referencing features, I'll be referring to those of neovim. As one of the most active open-source tools used by nerds to playact as hackermen, its features are vast:

- LSPs (language server protocols) for almost every language
- Autocomplete
- Remote Code Sessions (literally via SSH)
- Debugger
- Configured in Lua
- Built in terminals, and TUIs (Terminal User Interfaces) for every general task you could think of
- An insane amount of other extensions

And, as I understand it, the most game changing part of vi was already there some 50 years ago:

## Vim Motions

Vim is a `modal` text editor, for those that don't know what that means: it means that when you are editing a file, you change between different modes to make your changes. Think of it like how in ms-paint / photoshop, you might change from the paintbrush to the pen tool to the rectangle tool.

In vim, the modes you will use most often are: 
- Normal : the base movement mode, all your keys are hot-keyed to different actions
- Insert : normal typing, when you type j, it inserts a "j"
- Visual : like normal, but allows you to select an area for operations

The mode I care about here is Normal mode. The way it works is this:  You know what all your keys do? What if every one of them performed a specific action rather than inserting a keystroke when you type them? What if, for actions that were done all the time like movement: up, down, left, right; what if those were trivial actions hot-keyed to the keys on your home row (h, j, k, l)?

Vim is cool. But this idea: remapping our keys to more useful ones depending on the mode. This idea is pretty cool. 

So the base layout is this:
- H - performs left arrow
- J - performs down arrow
- K - performs up arrow
- L - performs right arrow

This complication to the program makes it much easier to maintain a standard typing position, where you aren't changing the position of your wrist in order to reach over to use either an arrow key, or to use your mouse. For those concerned with ergonomics, this seems like a cool idea.

So, where could you use this idea?:
- Text editors? (Obviously...)
- Browsers?
- GUI / TUI apps?
- Games?

The possibilities are endless, but at the end of the day, I just want something that makes my life some bit easier. I don't want to learn some convoluted control scheme for every application I use. That makes my life harder.

But I like vim mode, so heres all the places I use it:
- Editors: VSCode, Neovim, Zed, Evil Emacs
- Writer: Obsidian (I consider this different from an editor)
- Search Engine: DuckDuckGo
- TUI: LazyGit
- OS Level: Cosmic Window Manager, Hyprland WM
- Leetcode

It's not everything I use, but its enough of the high usage items.

And each time it saves me some little bit of time, its a little return on investment that makes me feel all good inside.

## Vim motions are an indicator of good software

I stand by this.
I think that devs who write good software are the same people who like vim. Not that they have the perfect neovim setup and evangelize it to all the people around them.

But they appreciate finding a small way to find efficiencies that feel like a little game every time they use it. 

Because, fixing your Neovim config sucks. And trust me, neovim people are always fixing their neovim config, don't let them lie to you.

But Vim motions are fun.

