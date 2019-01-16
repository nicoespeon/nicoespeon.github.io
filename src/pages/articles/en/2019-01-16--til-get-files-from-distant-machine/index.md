---
title: "TIL: Easy file sharing from the command line"
date: 2019-01-16
layout: post
draft: false
path: /en/2019/01/til-get-files-from-distant-machine/
category: Web development
tags:
  - til
  - ssh
  - heroku
  - cli
description: Today, I learned how to easily retrieve a file from a distant server.
---

Today, I was working on Busbud "Preview" environment. I was connected to the distant Heroku machine, through ssh (with the Heroku CLI command `heroku run bash`). I ran a task that generates a CSV report and I wanted to get it on my local machine so I can read it more conveniently.

In such a scenario, I usually use `scp` from my machine to download the file from the distant server. But I didn't know the address of the machine I was connected to since I used the convenient Heroku CLI. I could have searched for it, but instead, a Google search gave me a nice solution: [transfer.sh](https://transfer.sh/).

<figure>
  <blockquote>
    <p>Easy file sharing from the command line</p>
    <footer>
      <cite>— Transfer.sh website</cite>
    </footer>
  </blockquote>
</figure>

The idea is to send data to this service from CLI, then retrieve it from an URL. Data could also be encrypted, and upload is made through https 🔐

Usage is very simple. Say I want to get my `task-report.csv`:

```shell
curl --upload-file ./task-report.csv https://transfer.sh/my-report.csv
```

After the upload is complete, I get the URL where I can retrieve it (e.g. `https://transfer.sh/66nb8/my-report.csv`).

Data are stored 14 days by default. But this can be configured on upload, with other different options like:

```shell
curl -H "Max-Downloads: 1" -H "Max-Days: 5" --upload-file ./hello.txt https://transfer.sh/hello.txt
```

I can also configure an alias for convenience, but I didn't feel I need to—I'd usually use that from a distant server which I don't have the address on hand.

So yeah. I did that and got my CSV file in no time. Thank you transfer.sh!

**And you, do you have tips & tricks for retrieving distant files?**
