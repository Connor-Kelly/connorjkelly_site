---

title: Dual Booting
description: Linux is cool and all, but you kind of have to have access to Windows.

---

# Why
As a software dev. Almost all the tools I would ever need are available on linux.
On the aggregate, they're more stable, well behaved, and performant on linux.

But sometimes, you really just need to run a .exe file.

So for most people who run linux, you really just need to dual boot windows.

## How it works

In general, if you want to dual boot, you should have one expectation: 
Windows will be poorly behaved. It will corrupt Partition headers, and overwrite bootloaders,
and delete things willy nilly. It can and will try to ruin your day, just for the hell of it.

## The Plan

Whenever you start with something like this, you want to try to keep your windows partitions away
from the linux partitions. This is because Windows consistently messes around with the bootloader
on its main drive. Because you cant trust the windows bootloader, you're gonna want to use a windows 
bootloader. For bios / legacy devices you want to use either GRUB or Clover, and for UEFI devices,
I like to use systemd-boot. It kinda just works.

This is gonna need to be installed after Windows. Because I'm gonna dual boot with Arch, I'm gonna 
have to install everything from scratch, including the bootloader. When I add the Arch bootloader entry
I'm gonna need to add another entry for Windows.

1) Setup your Partitions [Arch Partitioning](https://wiki.archlinux.org/title/Partitioning#Partition_table)
    1) Make sure that your disk uses GPT
        - Assuming you're using UEFI.
        - You should be using UEFI.
    2) Create a NTFS Partition for Windows
    3) Create an EXT4 Partition for Linux 
        - To my understanding, this is the default file system for a linux machine
    4) Create an NTFS Partition for Shared Data.
        - Because I'm gonna be putting this on a gaming PC, this will be where I put all the games
1) Install Windows
    1) Make installation media
    2) Install Windows
    3) Setup Windows
2) Install Linux
    1) Make installation media
    2) Install Linux
    3) Install Bootloader
3) Setup bootloader (Systemd-boot)
    1) Add bootloader entry for Linux
    2) Add bootloader entry for Windows
4) Profit



