---
title: "TIL: How to checkout to "previous" branch"
date: 2019-12-03
layout: post
draft: false
path: /en/2019/12/til-git-checkout-previous-branch/
category: Web development
tags:
  - til
  - git
description: Today, I learned how to go back to the previous branch with one simple command.
---

Git is the kind of awesome tool that keeps giving. Ok, this feature is not as impressive as [git worktree](https://spin.atomicobject.com/2016/06/26/parallelize-development-git-worktrees/) or [the powerful reflog](http://effectif.com/git/recovering-lost-git-commits), but it's very handy.

Say you're on a branch. You checkout to `master` temporarily. Then, you want to come back to your branch. Wait… what's the name of your branch again?

Turns out, you can just ask git to go back to the previous branch you were on with `git checkout -`

It works like `cd -`: it checkouts the previous branch and if you run it twice, you'll end up on the same branch you're now.

![Demo of the command](./demo.gif)

And you, do you have any git trick? 😜
