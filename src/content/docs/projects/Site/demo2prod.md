---
title: From Demo to Production
description: How i got to deployment.
---

## Getting to Prod

My old site was hosted on vercel. Its dead simple, and free.

It autodeploys when I push to my github repo, and build extremely fast.
For reference, I just tested it and the time between me pushing to the remote repo and the changes being updated on this page
was 26.85 seconds. Thats kind of insane.
For reference, my hot module reloads at work take about 20 seconds to rebuild sometimes, and another minute to refresh the page.
Yes, yes, those are much more complex applications with a lot more interactivity compared to the compilation of a static application.
But the iteration time is kind of crazy.

It was astro bassed too, but I had decided to build everything from scratch. It just looked like a bad version of this one.
When deploying this one, I simply cloned the repo, `rm -rf *`'ed all the files, and scaffolded a new Starlight app. When I pushed to my repo, to my surprise, it just worked.

## Future plans

To be honest. For now, hosting on vercel is a zero problems deployment. There aren't many reasons to change that.
The only thing I would need to fix with the new application is the tracking code for telling when someone visits the site.

In the next iteration of the site, I'd like to mess with self hosting this project on a little server box that I have at home. I'd 
like to learn how hard it really is to self-host a website, and I thing this one would be super simple, considering how static it is.
