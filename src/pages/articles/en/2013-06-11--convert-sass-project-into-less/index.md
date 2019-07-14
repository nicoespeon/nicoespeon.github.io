---
title: Convert a SASS project into LESS
date: 2013-06-11
layout: post
draft: false
path: /en/2013/06/convert-sass-project-into-less/
category: Web development
tags:
  - less
  - sass
description: Similarities, differences et equivalents between those two CSS preprocessors.
---

## Matters of taste

[LESS](http://lesscss.org/) and [SASS](http://sass-lang.com/) today are [the two most popular CSS preprocessors so far](http://css-tricks.com/poll-results-popularity-of-css-preprocessors/).

They are quite similar and give functionalities to CSS that every front-end developer ever dreamt: variables, functions, mathematical operations, selectors nesting, etc.

However, there are some differences:

* SASS is compiled with Ruby, it has two different syntaxes: `.sass` and `.scss`.<br>
  The second one, closer to the CSS syntax, is the most used.
* LESS is compiled with Javascript, it has one syntax which is quite close to the CSS.

As a general rule, we can say that [SASS is more powerful than LESS](http://css-tricks.com/sass-vs-less/) because it notably has a bunch of additional functionalities. However, this is a matter of taste and LESS could suffice enough to please you and, in my opinion, is easier to use at first.

Personally, **I use LESS instead of SASS** with my projects, mostfully because I get used to it.

In the same time, I tend to use the inuit.css framework (instead of Bootstrap) on these projects. But inuit.css uses SASS!

Hopefully, I'm not the only one who likes LESS and [Peter Wilson](http://twitter.com/pwcc) has worked to create the LESS version of the framework. As I was keen on this idea, I joined the project we are maintaining today: [the official LESS port of inuit.css](https://github.com/peterwilsoncc/inuit.css).

It's all about **traducing the SASS framework into LESS**, which leads us to 3 options:

1. The SASS code is identical to the LESS one, so it's the same principle
2. The SASS code as an equivalent in LESS, so you need to find the alternative
3. The SASS code doesn't have any equivalent in LESS and you need to ruse - or ignore it -

Here is a broad overview of these options, as far as I know.

## What is identical in LESS

In such a case, it's dead easy: there is nothing to do.

Indeed, even though they are differents, SASS and LESS both share some basic concepts.

### Nesting

One of the guiding principle of CSS preprocessors: selectors nesting.

Instead of creating huge selectors to specify inheritance, you just have to nest them like this:

```css
.islet {
  margin-top: 24px;

  p {
    color: #bada55;
    font-weight: bold;
  }
}
```

That will produce the following code, in both languages:

```css
.islet {
  margin-top: 24px;
}

.islet p {
  color: #bada55;
  font-weight: bold;
}
```

<strong>Beware</strong> - Developers, whether they are experimented or not, often abuse of nesting which bloats their CSS for no valuable reason.

Keep in mind <a href="http://thesassway.com/beginner/the-inception-rule">the inception rule</a>: <strong>never go farther than 4 nested levels</strong>.

### Comments and compilation

In addition to features they bring, preprocessors help you to produce code clear and organized while having a single compiled - and compressed - CSS file as the output for production.

In that spirit, SASS and LESS both have alternate comments that are not compiled into CSS. So this code:

```scss
/**
 * The date/time
 */
.timeline__time {
  position: absolute;
  display: block;

  // The actual inner width is `25% - x`, `x` is the padding
  padding-right: 24px;
  width: 200px;
}
```

Will produce the following code:

```css
/**
 * The date/time
 */
.timeline__time {
  position: absolute;
  display: block;

  padding-right: 24px;
  width: 200px;
}
```

Which could be very helpful in case you want to add some code comments which would not be relevant for production code.

Please note that a compiled file for production should be compressed so it doesn't have CSS comments neither, excepted if you decide to preserve them. [YUI compressor](http://yui.github.io/yuicompressor/css.html) uses `/*! */` to preserve CSS comments for instance.

### Imports

Preprocessors help you to import other files very easily with `@import`, which allows you to build a clear and modular architecture of your source files. Dare I say: CSS preprocessors are OOCSS best friends.

A best practice may be to create a `main.less` / `_main.scss` file which role is to import the source file you need to produce your final `main.css`:

```scss
/**
 * Setup
 */
@import 'inuit.css/defaults';
@import 'vars';
@import 'inuit.css/inuit';

/**
 * It's all yours, cap’n… Begin importing your stuff here.
 */
@import 'ui/base';
@import 'ui/layout';

@import 'ui/mod-block-list';
@import 'ui/mod-helper';

/* etc. */
```

You'll note here that it's pointless to add the extension, whatever preprocessor you use.

<strong>Beware</strong> - All likeness taken after, the <code>@import</code> command of preprocessors has nothing to do with CSS one. Indeed, preprocessors will import your files when you compile them to output a unique CSS file that will be used in production. But CSS import will load many files by the browser.

Please note that the use of <code>@import</code> is <a href="http://browserdiet.com/#prefer-link-over-import">not a very good CSS practice</a>, try to avoid it.

## What has an equivalent in LESS

In such a case, you mainly have to know the syntax and specificities of each language as fundamentals principles are the same. Let's see what you've got…

### Variables

SASS and LESS both allow you to create variables, which is basically the Holy Grail in CSS!

The concept is very straight forward. The only difference here is that SASS uses `$` while LESS uses `@`.

```scss
/* With SASS */
$color: #bada55;

.header {
  color: $color;
}
```

```less
/* With LESS */
@color: #bada55;

.header {
  color: @color;
}
```

And so the CSS output is:

```css
.header {
  color: #bada55;
}
```

### Mixins

SASS and LESS both allow you to create what we call **mixins**. That means that you could simply create groups of properties that can be quickly included wherever you want to.

Here again, the main difference is the syntax, not the concept:

```scss
/* With SASS */
@mixin bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}

.header {
  @include bordered;
}
```

```less
/* With LESS */
.bordered() {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}

.header {
  .bordered();
}
```

This will output:

```css
.header {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
```

You should know that mixins can do more and have parameters, default values, conditions, etc.

Without going further into details, you should know also that mixins can take a **variable number of arguments** into account.

However, while SASS deals perfectly with the different values you give to the parameters, you would have to escape those you pass to LESS if you don't want him to interpret the whole thing as a single big variable.

Escaping in LESS would return the exactly given output thanks to <code>~"my string"</code>, which could be helpful for a bunch of tips.

Technically, code is the following:

```scss
/* With SASS */
@mixin box-shadow($shadows…) {
  -moz-box-shadow: $shadows;
  -webkit-box-shadow: $shadows;
  box-shadow: $shadows;
}

.shadows {
  @include box-shadow(0 4px 5px #666, 2px 6px 10px #999);
}
```

```less
/* With LESS */
.box-shadow(@shadows…) {
  -moz-box-shadow: @shadows;
  -webkit-box-shadow: @shadows;
  box-shadow: @shadows;
}

.shadows {
  .box-shadow(~'0 4px 5px #666, 2px 6px 10px #999');
}
```

And that would produce this CSS:

```css
.shadows {
  -moz-box-shadow: 0 4px 5px #666, 2px 6px 10px #999;
  -webkit-box-shadow: 0 4px 5px #666, 2px 6px 10px #999;
  box-shadow: 0 4px 5px #666, 2px 6px 10px #999;
}
```

Excepted some little specificities, mixins just work the same.

### Operations

Every preprocessor has is bunch of mathematical operations which could be very useful to do some flexible styling with variables.

Syntaxes are very close and intuitive - just a matter of `+` and `-`, etc. A best practice is to isolate these operations into parenthesis so you avoid potential confusions and conflicts.

However, you should know that LESS is considering the first unit specified in the calculus, which could lead to some aberrations while SASS will properly output a warning instead of compiling something wrong:

```scss
.container {
  width: 300px + 2em; // == 302px o_O
}
```

So in LESS you should better **not specify variables unit** so you don't have that kind of nasty surprises when you do operations. You just have to apply the unit at the very end and you're all set:

```less
@base-font-size: 16;
@base-spacing-unit: 24;

html {
  font-size: (@base-font-size/16)*1em;
  margin-bottom: @base-spacing-unit*1px;
}
```

Which will produce:

```css
html {
  font-size: 1em;
  margin-bottom: 24px;
}
```

### Functions

Each preprocessor brings their own functions that allow you to do a bunch of very nice things with colors, maths, strings, etc.

You may have a look to each respective list to get an idea:

* [SASS functions](http://sass-lang.com/docs/yardoc/Sass/Script/Functions.html)
* [LESS functions](http://lesscss.org/#reference)

### Interpolation

Sometimes you'll need to include some variables into stings and interprate them however. That's what we call interpolation and both SASS and LESS allow you to do that:

```scss
/* With SASS */
$base-url: '../images';

.container {
  background-image: url('#{$base-url}/bg.png');
}
```

```less
/* With LESS */
@base-url: '../images';

.container {
  background-image: url('@{base-url}/bg.png');
}
```

Which will produce:

```css
.container {
  background-image: url('../images/bg.png');
}
```

The only difference is the syntax: `#{ $var }` with SASS and `@{ var }` with LESS.

You also can interpolate variables within selectors as we could see with loops - yep, I'm working on my transitions.

### Loops

Technically speaking, both preprocessors can implement loops which could be very useful.

However, SASS natively deals with the iteration logic, not LESS. In fact, you can use an alternative based on mixins to create the loop behavior with LESS.

With LESS, here is the deal:

1. Create a mixin with an `@index` parameter
2. The mixin will produce the content of the loop while `@index > 0`
3. At the end of the mixin, you decrease `@index`
4. You create an empty verion of the mixin to stop the loop when `@index = 0`

Which leads us to the following syntaxes for a loop:

```scss
/* With SASS */
$index: 5;

@while $index > 0 {
  // Interpolate the class name
  .container-#{$index} {
    z-index: $index;
  }

  // Decrease the index
  $index: $index - 1;
}
```

```less
/* With LESS */
.loop (@index) when (@index > 0) {
  // Interpolate the class name
  .container-@{index} {
    z-index: @index;
  }

  // Decrease the index and start the loop again
  .loop (@index - 1);
}

// Stop the loop at 0
.loop (0) {
}

// Start the loop
.loop (5);
```

Which will output, once compiled:

```css
.container-5 {
  z-index: 5;
}
.container-4 {
  z-index: 4;
}
.container-3 {
  z-index: 3;
}
.container-2 {
  z-index: 2;
}
.container-1 {
  z-index: 1;
}
```

This technique is used by Bootstrap [to generate spans regarding the number of columns](https://github.com/twitter/bootstrap/blob/master/less/mixins.less#L577-L595).

### Extend and silent classes

With SASS you can extend a class properties very easily to share a common style, the second class inherits style of the first one.

For instance, this:

```scss
.error {
  border: 1px #f00;
  background-color: #fdd;
}

.serious-error {
  @extend .error;
  border-width: 3px;
}
```

Will give the following code:

```css
.error,
.serious-error {
  border: 1px #f00;
  background-color: #fdd;
}

.serious-error {
  border-width: 3px;
}
```

SASS can create what we call _silent classes_: you just define classes that wouldn't be compiled until they are included somewhere with `@extend`.

So this code:

```scss
a%error {
  color: red;
  font-weight: bold;
}

.notice {
  @extend %error;
}
```

Will output the following:

```css
a.notice {
  color: red;
  font-weight: bold;
}
```

With LESS, you'll generally use **mixins** to realize that kind of extensions. Just like a silent class, the mixin won't be compiled until it's included somewhere. So it comes with the same spirit, only the syntax changes:

```less
.error() {
  a& {
    color: red;
    font-weight: bold;
  }
}

.notice {
  .error();
}
```

That said, you'll note that SASS is extending smartly selectors - `.error, serious-error` in the previous example. With LESS, you'd need to do that by hand.

<strong>Note</strong> - <a href="https://github.com/cloudhead/less.js/blob/master/CHANGELOG.md#140-beta-1--2">LESS v1.4</a> - which is currently in beta - will introduce <code>:extend()</code> that could handle selectors extension. The syntax would be closer to the CSS one, just like a pseudo-selector, which should produce something like that:

```less
.error {
  border: 1px #f00;
  background-color: #fdd;
}

.serious-error:extend(.error) {
  border-width: 3px;
}
```

### `!default` variables

With SASS you can set a default value to variables at any time. The default value is used if the variable is not already defined somewhere.

```scss
$base-font-size: 14px;
$base-font-size: 16px !default;
$base-spacing-unit: 24px !default;

.container {
  font-size: $base-font-size;
  margin-bottom: $base-spacing-unit;
}
```

```css
.container {
  font-size: 16px;
  margin-bottom: 24px;
}
```

This technique is very useful because you can define defaults into the core of the module you're developing, so you allow users to override them if necessary **from the outside**.

Need a concrete example? I've got that: the framework core of inuit.css use a bunch of defaults so the developer can use the framework as a submodule: he can update it but he never has to touch it, never!

To override a variable, he just needs to define it in its own configuration file:

```
.
|-- inuit.css/ # Framework core
| |-- base/
| |-- generic/
| |-- objects/
| |-- \_defaults.scss # Default variables
| |-- \_inuit.scss # Setup file for inuit.css
|
|-- ui/
|-- \_vars.scss # Specific variables
|-- main.scss # Setup file for the project
```

So he can override variables in `_vars.scss` and organize `main.scss` as follows:

```scss
/**
 * Setup
 */
@import 'vars';
@import 'inuit.css/inuit';
```

Without touching anything from the inuit.css core he is able to configure it entirely.

**The fact is, you ain't gonna need this with LESS.**

Thanks [Chris Snyder](https://twitter.com/KB1RMA) for pointing this out!

For a long time I thought LESS didn't provide the ability to do the same, and I've had to find hacks to this problem.

Actually, variables work differently in LESS since the pre-processor uses [lazy loading](http://lesscss.org/features/#variables-feature-lazy-loading). That means variables can be used **before** being described.

Hence, you can perfectly override variables later in your codebase. Which is the equivalent of having default variables:

```less
@base-font-size: 14px;
@base-spacing-unit: 24px;

.container {
  font-size: @base-font-size;
  margin-bottom: @base-spacing-unit;
}

/* … later in your code */
@base-font-size: 16px;
```

Will produce the same result:

```css
.container {
  font-size: 16px;
  margin-bottom: 24px;
}
```

Hence, we could do the same with inuit.css and use proper (default) variables in the framework while giving the capacity to developers to override them after.

```less
/**
 * Setup
 */
@import 'inuit.css/inuit';
@import 'vars';
```

## What couldn't be reproduced in LESS

Here is a non-exhaustive list of what SASS is able to do and not LESS, without any real alternative but ingenious hacks.

### Block of content within a mixin

If you are using SASS, you can pass a whole block of content into a mixin thanks to the `@content` variable. Concretely, this:

```scss
@mixin apply-to-ie6-only {
  html {
    @content;
  }
}

@include apply-to-ie6-only {
  #logo {
    background-image: url(/logo.gif);
  }
}
```

Will compile into:

```css
html #logo {
  background-image: url(/logo.gif);
}
```

As far as I know, there is no possibility to do that in LESS - but I'd consider any suggestion!

### Variable properties

With SASS you also can use interpolation to have variable properties. This is extremely useful to create powerful mixins like this:

```scss
@mixin border-badass($side) {
  border-#{$side}: 1px #bada55 solid;
}

.container {
  @include border-badass(left);
}
```

Will output:

```css
.container {
  border-left: 1px #bada55 solid;
}
```

**However, you need to do a mixin per property in LESS**, which is very painfull. So you may need to get use of it…

…

… well, in fact, there IS a kind of _weird_ hack that can produce the same result. I deny any responsibility for its weirdness, you are smart enough to decide whether or not it worth using it!

The thing is that browsers will ignore unknown CSS properties.

So let's say, `hack: 1;` would'n be very valid right? But it wouldn't be considered. If you keep that in mind and use LESS interpolation over properties values, you'd be able to imagine the following code:

```scss
.border-badass(@side) {
    hack: 1 ~"; border-@{side}: 1px #BADA55 solid";
}

.container {
    .border-badass(left);
}
```

Which will output:

```css
.container {
  hack: 1;
  border-left: 1px #bada55 solid;
}
```

Technically, it works.

I don't tell you to use it, but we can imagine that you automatically treat your compiled CSS so you delete every `hack:1;` for instance. We can also imagine that LESS will have this feature later.

So keep in mind: it's weird, but it works though…

## Final words

Here we are! That was my 50 cents about main similarities and differencies I experimented between SASS and LESS. To convert a SASS project into LESS isn't that difficult, but you need do take care of each language specificities.

From an objective point of view, SASS is more powerful than LESS and has real programming notions inside. However, its syntax and spirit is even more far from the original CSS compared to LESS, in my humble opinion.

It's much more **a question of habit and comfort**. What counts is that you're using a CSS preprocessor to simplify development and make your stylesheets easier to scale and maintain: the future you will thank the present you for that!

For those who would like to play with it online, here you go:

* [Sass-try](http://sass-lang.com/try.html), for SASS
* [Less2css](http://less2css.org/), for LESS

If you have any suggestion, spot any mistake or have some comments to do on this (long) post, please do.

Plop!
