---

title: Conf
description: The project file concerning configuration of my dev environment, and associated shenanigans.

---

### On configuration

As a developer, I feel it is my responsibility to consistently break my personal dev environment, all 
with the assumption that it will make my life easier, but rather it make me do things 5 times as fast,
and spend my newfound time banging my head against a wall, trying to get my newfangled tools to work 
like I think they should.

It is a basic skill to be able to write code, but a complex skill to navigate and shape code.

Here is my journey. 

#### The dark days. 
When I started in university, I had a Dell XPS 2-in-1 with the current mobile i7 and dedicated gpu that
they put in those things during that time. It ran Windows 10, and I used it for almost everything. \
It was buggy as hell, because those touchscreen laptops always were. Though, as I learned later, most of 
that bugginess that frusturated me was simply the fact that Windows as an operating system is a piece of 
stinking garbage. In the name of backwards compatability, Microsoft has been able to vendor lock in the 
entirety of the normie desktop ecosystem. Outside of Windows, you have two options, Mac or Linux. Ie, Safety or Danger.
I tried Linux a few times, but never got very far into it, mainly because my hardware was already sketchy
enough.

With this laptop I coded in the following languages, using VSCode as my main IDE, save for the few times when
our professor required that we use the JetBrains Java IDE, I forget the name now, but it was so terrible that
I refuse to look it up.
- python
- java
- c
- c++

#### The upswing
In the middle of one particularly large project, my XPS laptop decided it was done with life; one of the 
daughterboards concerning charging apparently exploded. I sent it off to Dell. $300 and a month later, they 
sent me back a broken laptop, that would boot about half the time, and fail to post the rest of the time.
They told me that the EOL time on that laptop was 18 months. I bought a Lenovo. \ 
More specifically, I bought the cheapest touchscreen i7 with a keypad that microcenter sold. Within 12 hours
owing it I shoved an old 1tb NVME I had lying around with a prebuilt Windows setup on it.
It was a great machine, to be honest. It was cheap plastic, and poor build quality, but it endured some crazy 
shit with me.
This machine would last me until after I graduated college, and into my first six months into my first job.

With this machine, I also first took my first serious look at Linux as a main OS. Mainly, because my windows 
partition committed sudoku on week 3. Probably not its own fault, but I was pissed enough when I was reinstalling
it that I shrunk the partition and dual booted PopOS. \
And I fell in love. \
It was fast, and it worked without any real fuss, and it was fast, and it had a window manager built in, and
a command line and it was free, and it was fast. (Notice a trend here.) My favorite part, I wasnt perfect, but
any problem I came across, I typed the general issue into google, and found a stack overflow article that told
me exactly how to fix it. Gone were the days of unfixable borked shit from windows. Gone were the "mysterious"
settings reversions. And the consistent breakages with every new update in Windows. I was free. \
Then, I decided it was time to try something new. I'd heard about this crazy new system called Nix (and NixOS).
The people building it came up with a crazy idea: What if everything to configure building a linux configuration
could be added to a single file, whether that be installed packages, user permissions, dotfiles, or firewalls. 
And then, what if it was all written with in a functional language with some of the worst syntax known to man.
I intrigued me, and as someone who like functional languages, it was kind of a turn on to have a whole programming
language written just for this crazy configuration system. So, I switched to that. \
And, the learning curve was less of a curve that a cliff that you had to scale. \
But, It was fun. It taught me the basics of what subsystems existed in linux, and gave me a relatively unbreakable 
system to play with different things in. (Oh, I forgot to mention, its Immutable, ie you can't really brick a system).
I fell in love again. \
And it was a bit of an abusive relationship to be honest. Because Nix teaches you what the things are, and 
how to do the things the Nix way. Its a massive crutch once you learn to grok the docs. The problem is that the tool
is to big for the solutions it needs to solve. I love being able to scaffold a working system from a single directory
of config files, but yall dont need to move my dotfiles for me, or configure gnome settings for me, or determine 
which python packages I can use. Sometimes, I just want my kitty.conf in the language that kovidgoyal himself intended:
bastardized .ini labelled as .conf. \
And so, I thought about switching. But I had config fatigue. I decided to wait until I got a new laptop.

#### Fuckit we ball. or leaning into the madness.
After about 6 months into my first job, I decided to say fuckit, I deserve a new laptop. Not just any laptop, but
a __FrameWork__ Laptop. A smaller laptop, a 13 inch with the top specs that they had at the time, a frankly underpowered
AMD mobile chip, and 32 gb of memory. It wasnt gonna game, but it sure as hell was gonna code.
I had decided it was time. \
I grabbed a fresh Arch ISO, flashed it on a drive, pulled up the arch wiki, and booted to a wholly black screen save
for one beautiful thing: __a command line prompt__. \
It was time for hard mode. \
And here was the punchline. It took longer to get my Windows installation to boot to a working screen than it took for 
me to fuck up 3 installations of arch, and learn to manually configure the whole thing to get to Minimum Viable Product.
It was close, but definitely longer.



