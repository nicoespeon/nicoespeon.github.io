---
title: Point-free JavaScript with R.converge / _.over
date: 2016-04-12
layout: post
draft: false
path: /en/2016/04/point-free-javascript/
category: Web development
tags:
  - functional programming
  - lodash
  - ramda
description: Insights from practicing a more functional approach to JavaScript.
---

<figure>
  <img src='./cover.jpeg' alt='' />
  <figcaption>Get to simplicity, converging functions.</figcaption>
</figure>

## The context

I’m working on a side-project which is mainly a playground for me to practice a more functional approach to JavaScript. There I’m mostly playing with ES6, [Cycle.js](http://cycle.js.org/) and [Ramda](http://ramdajs.com/).

Along this journey, I’m doing my best to practice _point-free_ style programming, aka _tacit programming_, when relevant.

To put it in a nutshell: it means that [you never have to say your data](https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch5.md#pointfree). When used wisely, it can help keeping your code clear and concise, avoiding unnecessary intermediate variable declarations. See for yourself:

```js
// From https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch5.md#pointfree

// Not point-free because we mention the data: name
let initials = name =>
  name
    .split(' ')
    .map(compose(toUpperCase, head))
    .join('. ')

// Point-free style
let initials = compose(join('. '), map(compose(toUpperCase, head)), split(' '))

initials('hunter stockton thompson')
// 'H. S. T'
```

Then, I found myself stuck in a situation that may sound familiar if you ever tried to achieve that.

## The problem

I’ve got a `daysSpent` function that takes a `Date`, another `Date` and then return the `Number` of days spent between those.

```
daysSpent : Date -> Date -> Number
```

Then, I have a list of items, each of which having a date attribute:

```json
[
  { "list": "Backlog", "date": "2016-04-01" },
  { "list": "Card Preparation [2]", "date": "2016-04-01" },
  { "list": "Production [3]", "date": "2016-04-02" },
  { "list": "Tests QA [2]", "date": "2016-04-05" },
  { "list": "Mise en live [1]", "date": "2016-04-05" },
  { "list": "In Production", "date": "2016-04-06" },
  { "list": "Live (April 2016)", "date": "2016-04-08" }
]
```

What I want is to calculate the number of days spent between the first item of the list and the last one − which is something that will be called _Lead Time_ in my context.

Well, I’m almost there. What I need is probably to use the `daysSpent` function. However, the format doesn’t quite match. I guess the naive attempt to do so, using Ramda, would look like:

```js
import { pipe, prop, head, last } from 'ramda'
import { daysSpent } from './utils/dates'

// leadTime : [{date: Date}] -> Number
const leadTime = items =>
  daysSpent(pipe(head, prop('date'))(items), pipe(last, prop('date'))(items))
```

It sures work, but… something feel weird here.

I’m doomed to declare `items` and spread it around because I need to parse it into different ways before I can process it. I can’t make `items` flow nicely since I need to branch it to respect the arity of `daysSpent`.

This used to be a common issue… which Ramda solves!

## R.converge to the rescue

Here is the thing:

```js
// What I ended up with
const getX = input => getY(parseA(input), parseB(input))

// What I was trying to achieve, some sort of:
const getX = anyFunction(getY(parseA, parseB))
```

Among Ramda toolset, there is a function for that: [R.converge](http://ramdajs.com/0.19.1/docs/#converge). Syntax is the following:

```js
const getX = R.converge(getY, [parseA, parseB])
```

Aaaand, there we go:

```js
import { converge, pipe, prop, head, last } from 'ramda'
import { daysSpent } from './utils/dates'

// leadTime : [{date: Date}] -> Number
const leadTime = converge(daysSpent, [
  pipe(head, prop('date')),
  pipe(last, prop('date')),
])
```

This will call `daysSpent` with properly expected arguments from input. Needless to declare it with a variable, I focus on operations.

Hence, refactoring got event easier:

```js
import { pipe, pluck, converge, head, last } from 'ramda'
import { daysSpent } from './utils/dates'

// leadTime : [{date: Date}] -> Number
const leadTime = pipe(
  pluck('date'), // first convert input into [Date]
  converge(daysSpent, [head, last]) // then pick proper ones for calculation
)
```

`leadTime` pluck input `date`s, then `converge` the `head` and `last` of the list into `daysSpent` to get the result. I found some beauty in such simplicity.

Oh and if you’re much a [lodash](https://lodash.com/) person − I am, but I always wanted to experiment what Ramda got − [lodash-fp](https://github.com/lodash/lodash/wiki/FP-Guide) is doing a pretty good job too. [John-David Dalton](https://medium.com/@jdalton) suggested another approach to do so:

```js
import { pipe, pluck, over, head, last, spread } from 'lodash/fp'
import { daysSpent } from './utils/dates'

// leadTime : [{date: Date}] -> Number
const leadTime = pipe(
  pluck('date'), // first convert input into [Date]
  over([head, last]), // then turns them to our arguments array [ FirstDate, LastDate ]
  spread(daysSpent) // finally spread arguments to the function
)
```

---

If you’d like to explore further:

* An article about [point-free JavaScript](http://lucasmreis.github.io/blog/pointfree-javascript/)
* [Get started](http://cycle.js.org/getting-started.html) with Cycle.js
* [The philosophy of Ramda](http://fr.umio.us/the-philosophy-of-ramda/) − even though lodash-fp is doing a great practical job today, Ramda plays nicely with FP concepts
