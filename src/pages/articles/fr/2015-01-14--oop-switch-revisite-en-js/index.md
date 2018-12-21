---
title: POO - le switch revisité en JavaScript
date: 2015-01-14
layout: post
draft: false
path: /fr/2015/01/oop-switch-revisite-en-js/
category: Développement web
tags:
  - javascript
  - oop
  - switch
description: En JavaScript, nous disposons d'une alternative plus orientée-objet, moins procédurale et propice aux erreurs que le bon vieux switch … case.
---

Supposons que les méthodes suivantes existent :

```javascript
function sayHello() {
  console.log('Hello, how are you?')
}

function giveSomeNews() {
  console.log('Roses are red. Did you know that?')
}

function sayBye() {
  console.log('Ok bye!')
}
```

## Quelques rappels sur le `switch`

`if / else` permet d'introduire de la logique dans notre code en créant des branches : en fonction d'une condition, nous exécuterons telle ou telle opération. Mais parfois, il y a plus de 2 branches possibles.

Le réflexe initial consiste donc à ajouter des branches avec `else if` :

```javascript
if (name === 'patrick') {
  sayHello()
} else if (name === 'jane') {
  giveSomeNews()
} else {
  sayBye() // don't talk to strangers!
}
```

Comme c'est un petit peu verbeux, peu lisible et encore moins élégant, on utilise alors le `switch` :

```javascript
switch (name) {
  case 'patrick':
    sayHello()
    break

  case 'jane':
    giveSomeNews()
    break

  default:
    sayBye() // don't talk to strangers!
    break
}
```

`switch` est une alternative classique à un enchaînement de `else if`.

À moins qu'il s'agisse d'opérations très petites (quelques lignes, claires et explicites), je préfère les encapsuler dans des fonctions <strong>explicitement nommées</strong> pour décomposer la logique de l'implémentation. Le <code>switch</code>, c'est la logique. J'utilise la même technique pour les <code>if / else</code>.

La syntaxe est plus claire, mais on introduit certaines subtilités.

Notamment, il faut prendre garde au concept du `break` introduit ici : il permet de sortir du `switch` et éviter de passer au `case` suivant.

### Rappel des erreurs à éviter !

Lorsque l'on arrive sur un `switch`, on s'attend rarement (jamais ?) à passer à travers 2 cas différents.

À l'instar du `else if`, on s'attend à exécuter un cas et un seul. Pour cette raison, on veille à **ne pas oublier le `break`** !

Par exemple, ce code est-il intentionnel ? Est-ce un oubli ? En tout cas, c'est une source de confusion et de bugs !

```javascript
switch (name) {
  case 'patrick':
    sayHello()
    break

  case 'jane':
    giveSomeNews()

  default:
    sayBye() // don't talk to strangers!
    break
}
```

Il existe un cas de figure où, à la limite, l'intention reste claire et qui est acceptable (et utilisée).

Il s'agit de regrouper différents inputs dans un même `case` :

```javascript
switch (name) {
  case 'patrick':
    sayHello()
    break

  case 'jane':
  case 'john':
    giveSomeNews()
    break

  default:
    sayBye() // don't talk to strangers!
    break
}
```

Bref, ne pas mettre un `break` à chaque `case` est très souvent propice aux erreurs car le code écrit comporte "une subtilité", il a donc des chances d'être mal lu / interprété.

Le jeu n'en vaut pas la chandelle, aussi je vous conseille plutôt de ne pas le faire. Après, c'est vous qui voyez mais y'en a qu'on essayé…

## Une alternative orientée objet : method lookup

Reprenons à présent notre exemple avec un esprit moins procédural, plus orienté-objet :

```javascript
var greetings = {
  patrick: sayHello,
  john: giveSomeNews,
  jane: giveSomeNews,
}

typeof greetings[name] === 'function' ? greetings[name]() : sayBye()
```

On peut appeler cela le **method lookup** qui traduit finalement l'idée du [Command Pattern](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#commandpatternjavascript).

On utilise ici la syntaxe objet naturelle de JavaScript et la puissance de ses fonctions. Pas de `break` dont on doit se préoccuper. On dispose également de tous les avantages de l'objet, notamment le fait de pouvoir le surcharger facilement et ainsi dépendre d'un contexte particulier.

En pratique, le method lookup est pertinent par rapport au switch si vous vous trouvez dans l'un des cas suivants :

* aurez-vous besoin d'ajouter plus de cas ? _Par exemple dans le cas de plugins_
* est-il utile de pouvoir modifier les cas en cours d'exécution ? _Par exemple pour changer d'options en fonction du contexte._
* est-il utile de log les cas qui ont été exécutés ? _Par exemple pour mettre en place un stack de undo / redo, ou un système de log._
* êtes-vous en train d'utiliser des nombres pour lister vos cas, de manière itérative ? _Par exemple `case 1:`, `case 2:`, etc._
* êtes-vous en train d'essayer de regrouper des cas ensembles en omettant de manière intentionnelle des `break` ? _Fall through = danger, le method lookup est bien plus clair._

## Remarques sur une version du `switch` "avancé"

Avec `switch` il est possible de tester directement une condition dans le `case`.

Ainsi, en considérant que ceci existe :

```javascript
function isPatrick(name) {
  return name === 'patrick'
}

function isJane(name) {
  return /^jane-/.test(name)
}
```

Le code suivant fonctionne parfaitement :

```javascript
switch (true) {
  case isPatrick(name):
    sayHello()
    break

  case isJane(name):
    giveSomeNews()
    break

  default:
    sayBye() // don't talk to strangers!
    break
}
```

Pour plus de lisibilité, j'ai effectivement exporté les <code>case</code> dans des fonctions qui expriment clairement l'intention afin de produire un code clair avec cette syntaxe.

Vous conviendrez que la logique est à présent un poil plus complexe. Dans ce cas, il est donc judicieux de travailler à <strong>rendre le code plus clair</strong>.

Ceci fonctionne, peut se révéler utile et n'a pas d'équivalent avec la method lookup (que je sache).

Cela étant, **prenez garde aux abus de logique**. Ce n'est pas parce-qu'on peut le faire, qu'on doit le faire. Veillez à garder un esprit critique sur ce que vous faîtes : est-ce vraiment nécessaire ou existe-t-il un moyen plus simple ? Peut-on trouver design plus clair pour exprimer cette logique ?

Parfois on s'emporte dans des trucs "sexy", mais un bon **KISS** ne fait jamais de mal !

## Release the (object-oriented) Kraken!

Le _method lookup / command pattern_ est l'équivalent du `switch` dans un esprit objet. **Il tend à encourager l'écriture d'un code flexible, bien organisé, orienté-objet** (et ça, c'est bien !).

Si `switch … case` n'est pas mauvais en soi, il peut s'avérer propice aux erreurs et encourage en soi le _spaghetti code_. Par sa nature procédurale, il peut conduire à une logique de branche complexe qui résulte souvent dans un mauvais design et donc un code peu difficile à maintenir.

En fait, il n'y a pas vraiment de raison d'utiliser `switch` plutôt que son alternative quand on veut profiter de ce que JavaScript offre. Le principal, c'est de produire un code clair pour votre future-vous et les autres !
