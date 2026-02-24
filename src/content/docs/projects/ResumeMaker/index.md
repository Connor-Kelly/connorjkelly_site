---
title: Index
description: A little cli for generating resumes with some AI assistance
sidebar: 
    order: 1
---


## Why?
There are tons of generators for resumes out there. There's tons of them, they all look really cool, 
and I'm sure they work great.\
However, I've got a few problems with them.
- I don't feel like paying for them.
- They don't take the format I like
- It's hard to give them a good set of data about myself, since a resume isn't really a good training set.

So, I went down the path that all good devs do when they say that cursed phrase: "I could build that."

## The Plan
- Take .typ file
- Take some inputs
- Send inputs to the AI, asking it to generate some relatively structured data
- Dump that data into a .json file and consume it from the .typ file
- Compile the file

## Problems
- Security / Disclosure of personal data
    - Need to structure this data, so not to leak my personal data (phone numbers, addresses, etc)
    - Need to structure the project such that someone else could use it



