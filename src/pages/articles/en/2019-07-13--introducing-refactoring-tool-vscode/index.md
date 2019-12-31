---
title: 'Introducing a refactoring tool for VS Code'
date: 2019-07-13
layout: post
draft: false
path: /en/2019/07/introducing-refactoring-tool-vscode/
category: VS Code
tags:
  - abracadabra
  - refactoring
  - side-project
description: I built "Abracadabra", a VS Code extension to do automated refactorings.
---

I use VS Code every day. I use it exclusively since February 2018, both personally and professionally. I like it a lot.

But I am _frustrated_.

I am frustrated because I miss a **great** tool to perform **automated refactorings** for me. And neither VS Code, neither existing extensions provide the experience I'm looking for!

![](./frustrated.gif)

Thus, 2 months ago, I decided to follow [my own advice](/en/2019/06/drawing-git-graphs-browser/) and hack my own problem. I started creating the VS Code extension I was looking for. This extension analyzes my code, suggests refactorings and executes them with the minimal amount of keystrokes needed.

**It helps me focus on my intention instead of manually following the scripted mechanics of a refactoring.**

<figure>
  <blockquote>
    <p>I called this extension: <a href="https://marketplace.visualstudio.com/items?itemName=nicoespeon.abracadabra">Abracadabra</a> ✨</p>
  </blockquote>
</figure>

![Gif of extracting variables with Abracadabra](./abracadabra-demo.gif)

## Why wasn't I satisfied with VS Code refactorings?

It's true that VS Code ships with [basic refactoring operations](https://code.visualstudio.com/docs/editor/refactoring). So what's wrong?

Well, speaking from a personal point of view, few things aren't great:

- **I need more than that.** There are a lot of automated refactorings that I know and aren't proposed.
- **I can't just have the cursor on a variable and trigger an extraction.** To get an appropriate suggestion requires selecting _exactly_ the code to refactor. I need to select the whole extracted statement first, which is slowing me down.
- **I don't like the UX much.** Talking about extraction, I often feel confused in front of all the suggested options. I need to play the computer in my head and decipher what "enclosing scope" vs. "module scope" means in terms of the resulting code. I _know_ that there is a better way.

<figure>
  <img src="./confusing-vscode-extraction.png" alt='VS Code shows a popup to either "extract to function in module scope", or to "extract to constant in enclosing scope"'>
  <figcaption>I understand what it means, but it takes precious seconds to process. Don't make me think!</figcaption>
</figure>

Before using VS Code exclusively, I used Webstorm professionally for a few years. And I prefer VS Code: it's free, feels lighter to use and has a very active community.

But there is one thing Webstorm nailed that VS Code doesn't provide: many, intuitive, automated refactorings.

![Gif of extracting a function in Webstorm](./extract-function-webstorm.gif)

![List of available refactorings in Webstorm](./webstorm-list-refactorings.png)

This made me so productive back in the days. I relied on my editor to move fast 🏇

And I think it matters. If refactoring code takes 2 keystrokes I'm very likely to do it. If I have to find the correct combination of 5 keystrokes to make it work, I'm less likely. If I have to do it by hand… You get the idea.

**Great automated refactorings are a productivity boost for every developer.**

## But wait, wasn't there an extension already?

Yes! And I used it for some time.

I essentially work with JavaScript (and TypeScript). If you search for "JS refactoring" [on VS Code Marketplace](https://marketplace.visualstudio.com/search?term=js%20refactoring&target=VSCode&category=All%20categories&sortBy=Relevance), you'll find a promising extension called "JS Refactor":

![](./marketplace-js-refactoring.png)

I appreciate the good efforts that were put in it. At least someone worked to provide more refactorings, **shared that for free** and maintained it 👏👏

But at this point, it was not exactly what I needed, for a few reasons:

- I needed more refactorings operations. I'd consider operations like "Add Export", "Negate Expression" or "Wrap Selection" not being "refactorings". Even if they're handy, they modify code behavior.
- Also, sometimes, it didn't work well. It had some hiccups working on classes or on TypeScript.
- It handles partial selection better than VS Code, but it was still not as smooth as I was looking for. The UX was not the one I expected.

At that point, the best move for me would have been:

> OK, maybe I can contribute and improve it!

Heading to [the repository](https://github.com/cmstead/js-refactor), I was really happy to see it seemed well tested 👍

But I felt the architecture was not quite what I'd have in mind. I'd have done abstractions differently…

Now, I'm not saying this is bad and I know better. Actually, I think the code is quite clean and well tested. But I started imagining how I'd build such solution, and I had this desire to make it happen. In fact, it would be a great opportunity for me to work on something where I could try things, fast, to scratch my own itch.

Sure, building another extension is not the best idea, community wise. For the greater good, I should have reached the author of the existing extension and see how could I help. And, at some point, I'll probably ping him to see how I could help, now that I've a clearer idea of how all of this could work.

But for the moment, **I wanted to build something on my own**. Not to replace the existing extension, but to try something different. Something aligned with what I needed. Without having to deal with existing code and users.

## Abracadabra!

That's why, 2 months ago, I started to build this extension.

My goal is essentially to **build the tool I'm missing**.

There is a very cool side-effect of this: the learning part. Digging into [Abstract Syntax Trees](https://en.wikipedia.org/wiki/Abstract_syntax_tree) manipulations is super interesting. Also, I'm discovering how to build a VS Code extension for the first time. Finally, it's a playground for me to test architectural decisions and practices, like [documenting architectural decisions through ADRs](https://github.com/nicoespeon/abracadabra/tree/master/docs/adr).

I implemented a couple of refactorings across these 2 months. I published the extension a few days ago [on the Marketplace](https://marketplace.visualstudio.com/items?itemName=nicoespeon.abracadabra).

Now I'm waiting for feedback to improve these first refactorings, fix edge cases and improve the UX to match what I'd expect from a **great** extension!

![](./magic.gif)

### What about you?

Well first, if you do JavaScript or TypeScript and you're looking for great automated refactorings, you can [give Abracadabra a try](https://marketplace.visualstudio.com/items?itemName=nicoespeon.abracadabra)!

Then, if you want to help me, you can:

- Give me your feedbacks on what you like and what you'd like to improve. Whether you find a bug, have a suggestion or just want to share something, [have a look at existing issues or open a new one](https://github.com/nicoespeon/abracadabra/issues).
- If you'd like to contribute, you can start with the ["Good First Issues" I've listed](https://github.com/nicoespeon/abracadabra/issues?q=is%3Aissue+is%3Aopen+label%3A%22%3Awave%3A+Good+first+issue%22). Any kind of contribution is welcomed 🙂
- Spread the word so I can get more use-cases and more feedbacks to improve the extension!

That's it. I'm really excited about this and happy to start spreading the word.

Now, _I feel better_.

![](./thumbs-up.gif)
