---
title: Optimize selectors, CSS vs. JS
date: 2013-05-02
layout: post
draft: false
path: /en/2013/05/optimize-selectors-css-vs-js/
category: Web development
tags:
  - css
  - javascript
  - performance
description: Short round up of best practices for selectors use in CSS and Javascript. What is sauce for the goose is not necessarily sauce for the gander.
---

## TL;DR

Selectors are interpreted **from right to left**.

**With CSS**, it's better to use a class instead of an identifier as the first one can do exactly the same than the second one, and more. You have to keep the specificity as low as possible to improve code scalability.

**With JS**, an identifier and an high specificity will lead to more efficient results. You've to go straight to the point. But it's pointless to be over-specific, it's counter-productive.

**Don't use the universal selector `*` in a selector chain**.

Both are not mutually exclusive and do not prevent your HTML to be semantic:

```html
<!-- HTML -->

<article id="main-article">
    <!-- … -->
  <ol role="navigation" class="nav nav--block pagination">
    <li class="pagination__prev">
      <a href="/page1">&lt; Previous</a>
    </li>
    <li class="pagination__next">
      <a href="/page3">Next &gt;</a>
    </li>
  </ol>
</article>
```

```css
/* CSS */
.nav {
  list-style: none;
  margin-left: 0;
}

.nav--block {
  line-height: 1;
}

/* Bad idea */
.nav--block \* {
  color: red;
}

/* Not a big deal */
* {
  box-sizing: border-box;
}
```

```js
// Javascript (jQuery)
$('#main-article .nav--block .pagination**prev') // fast
$('#main-article .nav--block li.pagination**prev') // faster
$('#main-article').find('.pagination__prev') // super-fast
```

## With CSS

This come from CSS best practices known as OOCSS (_Object Oriented CSS_). It's a fairly generalized philosophy I agree with, but it's not the only way. However, I trust it could be used for any kind of project, regardless its size, with a _future-proof_ argument.

[Here is an introduction to OOCSS principles](http://coding.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/) for those who are interested in. [This is an alternative vision](http://coding.smashingmagazine.com/2012/06/19/classes-where-were-going-we-dont-need-classes/) I don't share but which is legit still. Feel free to follow your own path.

### Class or ID ?

In short, from CSS point of view **a class can do whatever an identifier does, but an identifier cannot be reused**.

That said, we can use classes instead of identifier and anticipate the future.

Furthermore, an identifier considerably increase the declaration specificity. This will make your CSS a mess with inappropriate uses of `!important` or other inline style declarations directly within the HTML to override the desired style.

```html
<!-- Not really future-proof -->

<ol id="pagination">
  <li>
    <a href="/page1">&lt; Previous</a>
  </li>
  <li>
    <a href="/page3">Next &gt;</a>
  </li>
</ol>
```

```css
#pagination {
  list-style: none;
  margin-left: 0;
  line-height: 1;
}
```

What if another type of pagination appears somewhere else on the page? Do we create a completely new identifier with kind of the same properties? However, pagination sounds like some kind of navigation, doesn't it?

```html
<!-- Future-proof -->

<ol class="nav pagination">
  <li>
    <a href="/page1">&lt; Previous</a>
  </li>
  <li>
    <a href="/page3">Next &gt;</a>
  </li>
</ol>
```

```css
.nav {
  list-style: none;
  margin-left: 0;
}

.pagination {
  line-height: 1;
}
```

The `.nav` class is perfectly reusable. It's an abstract layer which determine the common properties to all the _navigation_ menu of my website.

### Bewaaaaare specificity!

With CSS, [the specificity rules](http://coding.smashingmagazine.com/2007/07/27/css-specificity-things-you-should-know/) are more or less easy to figure out, more or less known and lead to more or less problems whether our CSS is more or less cleverly written.

In a few words: **don't write over-specified selectors which make rules unnecessarily heavy**.

It's about OOCSS spirit: classes are more or less abstracts objects you can combine as lego to produce the expected output. It's much more stable and scalable over time!

```css
ol.nav {
} /* 0-0-1-1 useless specification */
article > .nav li a {
} /* 0-0-1-3 too specific! */
.pagination__prev {
} /* 0-0-1-0 OK */
```

The deal is to produce an efficient CSS because:

* it's [loosely coupled](http://en.wikipedia.org/wiki/Loose_coupling) with the HTML context (flexibility)
* it could be easily override (scalability)
* plus, it's easy to figure out

The use of `!important` to set a style _"becoz', otherwise, it duzn't work and we dun't know why"_ is a good indicator of a poor-quality CSS.

If you're not a really good numbers person, [here is an online CSS specificity calculator](http://css-specificity.webapp-prototypes.appspot.com/) which can help you. The deal is to keep a specificity close to `[0-0-1-0]`, which is equivalent to a class. Doing so, you won't lose time anymore in debugging why your style doesn't apply.

## With Javascript

**NB** - _Javascript_ is an abuse of terms. I mainly deal with JS libraries, jQuery as a reference.

It worth noting that vanilla JS will give better results and `document.getElementById()` is probably [the most efficient](http://jsperf.com/id-selector-comparison/3).

### A good ID

An identifier is the most efficient of selectors. Once the selector engine has found the element, it stops its journey through the DOM. The use of an identifier is relevant with Javascript because we want to deal with a precise, identified element most of the time.

In short, it's much more efficient to **isolate the identifier within the selector**, then to chain with a query function to limit the scope for the engine:

```js
$('#main-article .pagination**prev') // fast
$('#main-article').find('.pagination**prev') // 2 times faster
```

In the first attempt, the engine will search for all the elements from the DOM with the `.pagination__prev` class, then search for those who are inside the `#main-article` block.

In the second attempt, the engine will first search for the `#main-article` block, then for elements with the `.pagination__prev` class inside this block.

Please [check performances by yourself](http://jsperf.com/optimized-js-selectors).

### Specific enough

This is a small bullet point worth noting. To **increase the specificity at the right of the selector** could increase the speed of the selector engine.

However, it's pointless and counter-productive to make your selector far too heavy than necessary.

```js
$('ol.nav--block .muted') // not-optimized
$('.nav--block li.pagination__next a.muted') // not-optimized
$('.nav--block a.muted') // optimized
```

## Be careful with the universal selector

_Updated on May 4th, 2013 after an [insightful reading](http://paulirish.com/2012/box-sizing-border-box-ftw/) about the use of `*` in CSS and its performance impact (the performance paragraph)._

Whether it is with CSS or JS, `*` could be the bugbear of selection performance.

Improperly used with CSS or, without knowing it, in JS selectors, this is the worst thing the selector engine could have to deal with, as it should check against all the DOM elements.

**In CSS**, ask yourself: do I really need to point out all the elements, whatever they are? "No" would probably be the answer.

This, is a bad idea:

```css
.nav--block * {
  color: red;
}
```

When you read _"within `.nav--block` elements, all the elements"_, the selector engine read _"all the elements, then those who have `.nav--block` as a parent"_. From the right to the left!

However, this won't lead to performance leak and shouldn't be a concern excepted if you try to improve your [Page Speed](https://developers.google.com/speed/pagespeed) score beyond 90:

```css
/* apply a natural box layout model to all elements */

* {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
```

**In JS**, if you don't pay attention you'll make it implicit by default. Plus, there should be alternative functions to achieve what you want to do.

```js
$('.nav--block > *') // ouch!
$('.nav--block').children() // better

$('.form-fields :radio') // = $('.form-fields \*:radio');
$('.form-fields input:radio') // better
```

## Last words

That's it folks, that was my point of view over selectors.

These are best practices I learnt over time. It's completely open to discuss, do not hesitate to do remarks, questions or suggestions below =)

Plop!
