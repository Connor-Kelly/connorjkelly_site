---
title: 'Tools I Use in Dev'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
# heroImage: '\SiteScreenshot.png'
---

The tooling we have access to nowdays is actually insane. \
And funnily enough, we only really use a small proportion of it.
So, I thought it would be interesting to write down the tools I use for development.

# What I Use:
## IDE - VSCode
The extension ecosystem in VSCode alone is the reason I use it so much.\
It makes it simple to get started doing almost anything.\
But that blade cuts in both directions.

My VSCode setup is a rats nest of extensions and configurations which always feels like 
it is sitting on a precarious tipping point, yet always remains relatively stable.

I use the One Dark Pro theme, and now all other color schemes are simply wrong.

It's also easy to install extensions, as evidenced by a little `code --list-extensions --show-versions` which identified all 59 of my currently installed extensions:
```sh
akamud.vscode-javascript-snippet-pack@0.1.6
alefragnani.Bookmarks@13.4.1
antfu.browse-lite@0.3.2
antfu.vite@0.2.5
astro-build.astro-vscode@2.3.3
azemoh.one-monokai@0.5.0
bradlc.vscode-tailwindcss@0.10.0
christian-kohler.npm-intellisense@1.4.4
cschlosser.doxdocgen@1.4.0
dbaeumer.vscode-eslint@2.4.2
eamodio.gitlens@14.3.0
Equinusocio.vsc-community-material-theme@1.4.6
Equinusocio.vsc-material-theme@33.10.5
equinusocio.vsc-material-theme-icons@3.0.4
esbenp.prettier-vscode@10.1.0
genuitecllc.codetogether@2023.2.0
GitHub.vscode-pull-request-github@0.72.0
golang.go@0.39.1
James-Yu.latex-workshop@9.14.0
jeff-hykin.better-cpp-syntax@1.17.2
mathematic.vscode-latex@1.2.0
mgt19937.typst-preview@0.8.0
ms-azuretools.vscode-docker@1.26.1
ms-dotnettools.csharp@2.1.2
ms-dotnettools.vscode-dotnet-runtime@1.7.3
ms-python.isort@2023.10.1
ms-python.python@2023.16.0
ms-python.vscode-pylance@2023.9.20
ms-toolsai.jupyter@2023.8.1002501831
ms-toolsai.jupyter-keymap@1.1.2
ms-toolsai.jupyter-renderers@1.0.17
ms-vscode-remote.remote-containers@0.309.0
ms-vscode-remote.remote-ssh@0.106.4
ms-vscode-remote.remote-ssh-edit@0.86.0
ms-vscode-remote.remote-wsl@0.81.4
ms-vscode.cmake-tools@1.15.31
ms-vscode.cpptools@1.17.5
ms-vscode.cpptools-extension-pack@1.3.0
ms-vscode.cpptools-themes@2.0.0
ms-vscode.makefile-tools@0.7.0
ms-vscode.remote-explorer@0.4.1
mubaidr.vuejs-extension-pack@1.9.0
nvarner.typst-lsp@0.10.0
octref.vetur@0.37.3
QiaoJie.binary-viewer@1.1.1
rangav.vscode-thunder-client@2.12.1
sdras.vue-vscode-snippets@3.1.1
svelte.svelte-vscode@107.11.0
tombonnike.vscode-status-bar-format-toggle@3.1.1
torn4dom4n.latex-support@3.10.0
twxs.cmake@0.0.17
VisualStudioExptTeam.intellicode-api-usage-examples@0.2.8
VisualStudioExptTeam.vscodeintellicode@1.2.30
vscodevim.vim@1.26.0
Vue.volar@1.8.13
Vue.vscode-typescript-vue-plugin@1.8.13
xabikos.JavaScriptSnippets@1.8.0
zhuangtongfa.material-theme@3.16.0
ZixuanChen.vitest-explorer@0.2.42
```

I should probably go through and delete them, but for now, the setup allows me to 
write decent code moderately fast.

## Terminal - Windows Terminal (specifically with Git Bash)
Yes, I use Windows, because it works, and requires very little work, I use the 
Windows terminal because it works, relatively well. \
As a side note, the base termainal, command-prompt, or whatever it is, can get fkt. 
It is actually horrible, and either doesn't support any unix like commands, or acts
like it does until you need something more complecated than `ls`.\
For this reason, I use the terminal that comes with the windows install of git.
It supports most unix commands, and doesn't constantly do awful things. My only 
gripe is that the `man` command doesn't work, but I've yet to come across a util 
without a great -h option, and if you want to scroll in the terminal, do a 
`<cmd> -h | less` for an experience like `man`, and `<cmd> -h | fzf` 
to fuzzy find through particularly verbose help page

## Browser - Firefox
People who use Chrome unironically scare me. \
Firefox works for every use case I've ever had, and takes a fraction of the memory
and power consumption of chrome.
It also doesn't have nearly as much spyware built in.
On the case of spyware, I use `DuckDuckGo` for my search engine, and have never 
thought about going back. \
As for extensions, the list is here, in order of importance
```sh
uBlock-Origin
Tab-Stash
BitWarden
DarkReader
Firefox-Color
Privacy-Badger
```
uBlock Origin and Privacy Badger just make me feel like I'm doing my part, 
sticking it to anyone who wants to advertise to me. Though you should turn your 
ad-blockers off for sites the genuinely provide value to you. Like geeksforgeeks
in particular; it makes the experience worse, but supports people who write good
resources for you.\
Tab-Stash is helpful for anyone with browser adhd like me. It makes it so that 
you can 'stash' all your tabs into a group, which unloads them, and stores them.
This is amazing for when you have 85 tabs open to docs in 3 different languages,
homework for 4 classes, and a collection of loosely disorganized research papers. \
Dark Reader and Firefox Color just make my browser nicer to look at. Firefox Color
is a custom theme for your browser, while dark reader lets you change the color 
of the pages you use. Contrary to popular belief, dark reader also has a light mode,
in which I have set to make light mode websites more readable, when they have particularly
egregious color schemes.
Lastly, BitWarden is free, open-source, and overall fucking amazing. I recommend
it to anyone who has 150+ logins to various sites that I will never care about until 
that one time I need to login 3 years from now.
''

