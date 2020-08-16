---
title: 'How to export git history in PDF'
date: 2020-08-16
layout: post
draft: false
path: /en/2020/10/how-to-export-git-history-pdf
category: Web development
tags:
  - git
description: In case you need to export your git history, because reasons.
---

A friend recently asked me if I knew a trick to generate a somehow clean PDF of a git history, as he needed to share that to a non-technical person.

I used to dig into git history a lot [to generate git graphs in the browser](https://github.com/nicoespeon/gitgraph.js/) (although I don't maintain this project anymore). So I know some tricks indeed.

The `git` CLI is a goldmine that's overlooked. You can retrieve many things from `git log`, as long as you play around with the options.

## Generate a PDF from git history

The first step is to generate a text file from the logs:

```
git --no-pager log --graph --all --oneline > git-history.txt
```

Then, you can either convert that `.txt` into a PDF using an online service (if data is not sensitive): http://www.convertfiles.com/converter.php

Or you can use libreoffice if you don't want to send your history to some online web converter (thank you [@mcassard](https://twitter.com/mcassard) 👍):

```
libreoffice --convert-to "pdf" git-history.txt
```

## Let's decompose the git command

I think this is a good excuse to learn some git options. These can be useful in other contexts:

- `git --no-pager` tells git to **not** use a pager, so we can get all of the history in one file
- `log --graph` tells the log command to draw a graph representation, because that's what we're looking for (we want to see the branches!)
- `--all` will show all commits from all branches (local and remote tracking) and tags, everything 👐
- `--oneline` is a shorthand that abbreviates commits and renders a compact version of the graph (so it's digestible on a PDF file)

To learn more about `git log` options, you can have a look [at the docs](https://git-scm.com/docs/git-log). But it can feel a bit abstract. I recommend you fiddling with the options in a git project to really understand what's going on!
