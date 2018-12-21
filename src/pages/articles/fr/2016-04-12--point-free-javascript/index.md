---
title: Point-free JavaScript avec R.converge / _.over
date: 2016-04-12
layout: post
draft: false
path: /fr/2016/04/point-free-javascript/
category: Développement web
tags:
  - programmation fonctionnelle
  - lodash
  - ramda
description: Mes retours sur une pratique plus fonctionnelle de JavaScript.
---

<figure>
  <img src='./cover.jpeg' alt='' />
  <figcaption>Faire converger les fonctions pour aller vers la simplicité.</figcaption>
</figure>

## Le contexte

Je travaille sur un side-project qui est surtout un prétexte pour moi de pratiquer une approche plus fonctionnelle de JavaScript. En l’occurrence, ici je m’amuse surtout avec ES6, [Cycle.js](http://cycle.js.org/) et [Ramda](http://ramdajs.com/).

Ainsi, j’en profite pour pratiquer la programmation de style _point-free_, aka _tacit programming_, lorsque c’est pertinent.

Pour résumer l’idée : cela veut dire que [qu’il n’est pas nécessaire d’expliciter nos données](https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch5.md#pointfree). Lorsqu’elle est utilisée avec sagesse, cette technique permet de conserver un code clair et concis en supprimant les inutiles déclarations de variables intermédiaires. Voyez plutôt :

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

Mais je me suis retrouvé dans une situation qui pourra vous sembler familière si vous vous essayez, comme moi, à ce style de programmation.

## Le problème

J’ai une fonction `daysSpent` qui prend une `Date`, une autre `Date` et qui me retourne le `Number` de jours qui se sont écoulés entre elles.

```
daysSpent : Date -> Date -> Number
```

Puis, j’ai une list d’éléments où chacun dispose d’un attribut date :

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

Ce que je souhaite consiste à calculer le nombre de jours passés entre le premier et le dernier élément de ma liste (ce qui s’appelle le _Lead Time_ dans mon contexte).

Bon et bien j’y suis presque. J’ai certainement besoin de me servir de ma fonction `daysSpent`. Le soucis c’est que le format n’est pas tout à fait adapté. En utilisant Ramda, je suppose qu’une approche naive au problème ressemblerait à ceci :

```js
import { pipe, prop, head, last } from 'ramda'
import { daysSpent } from './utils/dates'

// leadTime : [{date: Date}] -> Number
const leadTime = items =>
  daysSpent(pipe(head, prop('date'))(items), pipe(last, prop('date'))(items))
```

Ça fonctionne c’est sûr… mais quelque chose ne sonne pas très juste ici.

Je suis forcé de déclarer `items` et de le balader partout parce-que j’ai besoin de le transformer de différentes manières avant de pouvoir le traiter. Je ne peux pas faire s’écouler naturellement `items` le long d’une composition de fonctions car je dois le faire diverger afin de respecter l’arité de`daysSpent`.

C’était une problématique assez récurrente… que Ramda résout !

## R.converge à la rescousse

Voilà le topo :

```js
// What I ended up with
const getX = input => getY(parseA(input), parseB(input))

// What I was trying to achieve, some sort of:
const getX = anyFunction(getY(parseA, parseB))
```

Parmi la trousse à outils de Ramda, il y a une fonction qui fait exactement ça : [R.converge](http://ramdajs.com/0.19.1/docs/#converge). La syntaxe est la suivante :

```js
const getX = R.converge(getY, [parseA, parseB])
```

Tadaaaaam :

```js
import { converge, pipe, prop, head, last } from 'ramda'
import { daysSpent } from './utils/dates'

// leadTime : [{date: Date}] -> Number
const leadTime = converge(daysSpent, [
  pipe(head, prop('date')),
  pipe(last, prop('date')),
])
```

Ceci va appeler `daysSpent` avec les arguments attendus à partir de l’input. Plus besoin de déclarer ce dernier avec une variable, je peux me concentrer sur les opérations.

D’ailleurs, le refactor est encore plus simple:

```js
import { pipe, pluck, converge, head, last } from 'ramda'
import { daysSpent } from './utils/dates'

// leadTime : [{date: Date}] -> Number
const leadTime = pipe(
  pluck('date'), // first convert input into [Date]
  converge(daysSpent, [head, last]) // then pick proper ones for calculation
)
```

`leadTime` `pluck` les `date`s de input, puis`converge` le `head` et `last` de la liste dans`daysSpent` pour déterminer le résultat. Je trouve qu’il y a de la beauté dans une telle simplicité.

Oh et si vous êtes plutôt du genre [lodash](https://lodash.com/) (ce qui est mon cas, mais j’ai toujours voulu voir ce que Ramda avait dans le ventre), [lodash-fp](https://github.com/lodash/lodash/wiki/FP-Guide) fait également du bon boulot. [John-David Dalton](https://medium.com/@jdalton) suggère une approche différente :

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

Si vous souhaitez explorer le sujet en profondeur :

* Un article sur le [point-free JavaScript](http://lucasmreis.github.io/blog/pointfree-javascript/)
* [Get started](http://cycle.js.org/getting-started.html) avec Cycle.js
* [The philosophy of Ramda](http://fr.umio.us/the-philosophy-of-ramda/) − même si lodash-fp fait du bon travail en pratique aujourd’hui, Ramda se combine parfaitement avec les concepts de programmation fonctionnelle
