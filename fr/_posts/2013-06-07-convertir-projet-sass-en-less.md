---
layout: post
robots: index,follow
published: false
comments: true

tags: [less, sass]
icon: lab

title: Convertir un projet SASS en LESS
description: Similitudes, différences et équivalences de ces deux pré-processeurs CSS.
---

## Les goûts et les couleurs

[LESS](http://lesscss.org/) et [SASS](http://sass-lang.com/) sont aujourd'hui [les deux pré-processeurs CSS les plus populaires](http://css-tricks.com/poll-results-popularity-of-css-preprocessors/) et de loin. Tous deux sont assez similaires et apportent au CSS les fonctionnalités dont rêvent basiquement tout développeur front-end à savoir : variables, fonctions, opérations mathématiques, imbrication des sélecteurs, etc.

Cependant, leur nature diffère quelque peu :

- SASS est compilé en Ruby, il est assez complet et présente 2 syntaxes différentes `.sass` et `.scss`. La seconde, plus proche de celle du CSS, est la plus utilisée.
- LESS est compilé en Javascript, il présente une syntaxe assez proche du CSS.

D'une manière générale, on constate que [SASS est plus puissant que LESS](http://css-tricks.com/sass-vs-less/) car il dispose d'un certain nombre de fonctionnalités que ne présente pas ce dernier. Toutefois, les goûts et les couleurs étant ce qu'ils sont, LESS peut tout à fait suffir à vous contenter car il est bien suffisant et, selon moi, un peu plus facile à prendre en main au début (puis l'habitude fait le reste).

Personnellement, **j'utilise LESS plutôt que SASS** sur mes projets, par habitude probablement.<br>
Dans le même temps, j'ai tendance à utiliser le framework [inuit.css (plutôt que Bootstrap notamment)]({% post_url 2013-04-12-decouvrez-inuitcss %}) sur ces projets. Mais inuit.css, c'est du SASS !

Fort heureusement, je ne suis pas le seul à aimer lESS et [Peter Wilson](http://twitter.com/pwcc) s'est efforcé de mettre en place la version LESS du framework. Emballé par l'idée, j'ai rejoint son projet et je maintient aujourd'hui [le port LESS officiel de inuit.css](https://github.com/peterwilsoncc/inuit.css).

Le principe consiste donc à **traduire le framework SASS en LESS**, ce qui conduit à 3 cas de figures :

1. Le code SASS est identique au code LESS, c'est le même principe
2. Le code SASS a un équivalent en LESS, il faut alors trouver l'alternative
3. Le code SASS n'a pas d'équivalent en LESS et il faut savoir ruser (ou fermer les yeux)

Voici donc un petit tour sur ces cas de figures, d'après ce que j'ai pu en expérimenter.


## Ce qui est identique en LESS

Dans ce cas, c'est peinard : il n'y a pas grand chose à faire.

En effet, malgré leurs différences, SASS et LESS partagent cependant quelques concepts fondamentaux qui sont identiques chez les deux pré-processeurs.

#### Imbrication (nesting)

L'un des principes phares du pré-processeur CSS : l'imbrication des sélecteurs.

Plutôt que de créer des sélecteurs à rallonge afin de spécifier l'héritage, il suffit d'imbriquer les sélecteurs les uns dans les autres. Ainsi, ceci :

{% highlight css %}
.islet {
    margin-top: 24px;

    p {
        color: #BADA55;
        font-weight: bold
    }
}
{% endhighlight %}

Produira le code suivant, dans les deux langages :

{% highlight css %}
.islet {
    margin-top: 24px;
}

.islet p {
    color: #BADA55;
    font-weight: bold
}
{% endhighlight %}

<p class="islet">
    <strong>Attention</strong> - Il arrive souvent que les développeurs, expérimentés ou non, s'emportent avec l'imbrication et en abusent plus que de raison, ce qui a tendance à alourdir inutilement le CSS, un vrai cauchemard !<br><br>
    Gardez donc en tête la <a href="http://thesassway.com/beginner/the-inception-rule">règle de l'inception</a> : <strong>ne jamais aller au delà de 4 niveau d'imbrication</strong>.
</p>

#### Commentaires et compilation

Outre les fonctionnalités qu'ils apportent, les pré-processeurs permettent de disposer d'un code source clair et organisé, tout en produisant un seul fichier CSS compilé (et compressé) pour la production.

Dans cet état d'esprit, SASS et LESS proposent tous deux des commentaires alternatifs qui ne sont pas conservés lors de la compilation. Ainsi donc, ceci :

{% highlight css %}
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
{% endhighlight %}

Produira le code suivant :

{% highlight css %}
/**
 * The date/time
 */
.timeline__time {
    position: absolute;
    display: block;

    padding-right: 24px;
    width: 200px;
}
{% endhighlight %}

Ce qui peut être assez pratique pour placer des commentaires qui n'ont aucune pertinence dans le code compilé, mais ont un sens vis-à-vis du code source.

Notez cependant qu'un fichier compilé en production sera préférentiellement compressé de manière à ne pas inclure les commentaires CSS, à moins de les préserver explicitement (avec `/*! */` en utilisant [YUI compressor](http://yui.github.io/yuicompressor/css.html), par exemple).

#### Imports

Les pré-processeurs permettent également d'importer très simplement d'autres fichiers grâce à `@import`, ce qui permet la mise en place d'une architecture claire et modulaire des fichiers sources. Oui, les pré-processeurs CSS sont les grands amis de l'OOCSS.

Une bonne pratique consiste donc à créer un fichier principal `main.less` / `_main.scss` dont le rôle est d'importer les fichiers dont vous aurez besoin pour produire le fichier final `main.css` :

{% highlight css %}
/**
 * Setup
 */
@import "inuit.css/defaults";
@import "vars";
@import "inuit.css/inuit";


/**
 * She’s all yours, cap’n... Begin importing your stuff here.
 */
@import "ui/base";
@import "ui/layout";

@import "ui/mod-block-list";
@import "ui/mod-helper";

/* etc. */
{% endhighlight %}

Vous noterez que préciser l'extension n'est pas utile, que ce soit en SASS ou en LESS. Le principe est parfaitement identique donc.

<p class="islet">
    <strong>Attention</strong> - Malgré toute ressemblance, la commande <code>@import</code> des pré-processeurs n'a rien à voir avec celle de CSS. En effet, le pré-processeur va importer vos fichiers lors de la compilation afin de produire un fichier CSS unique tandis que l'import en CSS fera télécharger plusieurs fichiers par le navigateur.<br><br>
    Notez également que l'utilisation de <code>@import</code> est <a href="http://browserdiet.com/fr/#prefer-link-over-import">une mauvaise pratique CSS</a>, à éviter donc.
</p>


## Ce qui a un équivalent en LESS

Dans ce cas, il s'agit surtout de connaître la syntaxe et les spécificités de chaque langage, les principes fondamentaux étant les mêmes. Voyons donc ce que nous avons...

#### Variables

SASS comme LESS donnent la possibilité de créer des variables. Et les variables en CSS, c'est quasiment le Saint Graal !

Le concept est assez simple à assimiler, la seule différence entre les deux c'est que SASS utilise des `$` tandis que LESS utilise des `@`. Les goûts et les couleurs...

{% highlight css %}
/* En SASS */
$color: #BADA55;

.header {
  color: $color;
}
{% endhighlight %}

{% highlight css %}
/* En LESS */
@color: #BADA55;

.header {
  color: @color;
}
{% endhighlight %}

Le rendu CSS :

{% highlight css %}
.header {
  color: #BADA55;
}
{% endhighlight %}

#### Mixins


#### Opérations


#### Fonctions


#### Interpolation


#### Extensions et classes silencieuses

Il SASS, il est possible d'étendre les propriétés d'une classe à une autre afin de partager un style commun, la seconde classe héritant de la première.

Par exemple, ceci :

{% highlight css %}
.error {
  border: 1px #f00;
  background-color: #fdd;
}

.serious-error {
  @extend .error;
  border-width: 3px;
}
{% endhighlight %}

Donnera le code suivant :

{% highlight css %}
.error, .serious-error {
  border: 1px #f00;
  background-color: #fdd;
}

.serious-error {
  border-width: 3px;
}
{% endhighlight %}

SASS permet également de créer ce que l'on appelle des *classes silencieuses* : il s'agit de définir des classes qui ne seront pas compilées avant d'être explicitement incluses quelque part avec `@extend`.

Ainsi, ceci :

{% highlight css %}
a%error {
  color: red;
  font-weight: bold;
}

.notice {
  @extend %error;
}
{% endhighlight %}

Produira le code suivant :

{% highlight css %}
a.notice {
  color: red;
  font-weight: bold;
}
{% endhighlight %}

En LESS, on utilise généralement **les mixins** pour réaliser ce genre d'extension. Selon le même principe que la classe silencieuse : le mixin ne sera pas compilé tant qu'il n'aura pas été inclu quelque part. Le principe est donc sensiblement le même, seule la syntaxe diffère :

{% highlight css %}
.error() {
    a& {
      color: red;
      font-weight: bold;
    }
}

.notice {
  .error();
}
{% endhighlight %}

Cela étant, vous noterez que SASS gère intelligemment l'extension en synthétisant les sélecteurs (`.error, serious-error` dans l'exemple précédent). En LESS, il faudrait le faire à la main.

<p class="islet">
    <strong>Note</strong> - <a href="https://github.com/cloudhead/less.js/blob/master/CHANGELOG.md#140-beta-1--2">La version 1.4 de LESS</a> (actuellement en béta) introduit <code>:extend()</code> qui permettra de gérer les extensions au niveau des sélecteurs. La syntaxe sera donc plus proche du CSS, rappelant celle des pseudo-sélecteurs, ce qui devrait donner quelque chose du genre :
</p>

{% highlight css %}
.error {
  border: 1px #f00;
  background-color: #fdd;
}

.serious-error:extend(.error) {
  border-width: 3px;
}
{% endhighlight %}


## Ce qui ne peut être reproduit en LESS

Voici donc une liste non exhaustive de ce dont SASS est capable sans qu'il n'existe de véritable alternative en LESS (éventuellement des ruses de sioux), d'après l'expérience que j'en ai faite.

#### Variables `!default`

Avec SASS, il est possible de donner une valeur par défaut aux variables, a posteriori. Cela signifie que la valeur sera affectée si et seulement si la variable n'est pas déjà définie.

{% highlight sass %}
$base-font-size:    14px;
$base-font-size:    16px !default;
$base-spacing-unit: 24px !default;

.container {
  font-size:        $base-font-size;
  margin-bottom:    $base-spacing-unit;
}
{% endhighlight %}

{% highlight css %}
.container {
  font-size: 16px;
  margin-bottom: 24px;
}
{% endhighlight %}

L'intérêt de cette technique, c'est de pouvoir définir des variables par défaut au coeur du module développé, tout en permettant à celles-ci d'être redéfinies de l'extérieur.

Un exemple concret ? Le coeur du framework d'inuit.css utilise un ensemble de variables par défaut, permettant au développeur d'utiliser ce dernier comme un sous-module : il le met éventuellement à jour mais ne touche jamais au code qu'il y a dedans.

Pour modifier une variable, il doit simplement la redéfinir plus haut, dans son propre fichier de configuration :

{% highlight text %}
.
|-- inuit.css/          # Coeur du framework
|   |-- base/
|   |-- generic/
|   |-- objects/
|   |-- _defaults.scss  # Variables par défaut
|   |-- _inuit.scss     # Fichier setup inuit.css
|
|-- ui/
|-- _vars.scss          # Variables spécifiques
|-- style.scss          # Fichier setup projet
{% endhighlight %}

Il lui suffit de surcharger éventuellement des variables dans `_vars.scss` et d'organiser son `main.scss` ainsi :

{% highlight css %}
/**
 * Setup
 */
@import "vars";
@import "inuit.css/inuit";
{% endhighlight %}

Sans toucher au code de inuit.css, il est donc capable de le configurer entièrement.

**Cette fonctionnalité n'existe pas (encore) en LESS malheureusement.**

Le problème se pose alors : comment définir des variables par défaut tout en permettant au développeur de les surcharger sans toucher au coeur du framework ?

La solution trouvée consiste à garder la même architecture et inclure le fichier `defaults.less` avant `vars.less`. Le fichier `defaults.less` **n'est donc plus inclus directement par le coeur du framework**, mais dans le `main.less` du projet :

{% highlight css %}
/**
 * Setup
 */
@import "inuit.css/defaults";
@import "vars";
@import "inuit.css/inuit";
{% endhighlight %}

#### Bloc de contenu dans un mixin

Avec SASS il est possible de passer tout un bloc de contenu au sein d'un mixin avec la variable `@content`. Concrètement, ceci :

{% highlight text %}
@mixin apply-to-ie6-only {
    * html {
        @content;
    }
}

@include apply-to-ie6-only {
    #logo {
        background-image: url(/logo.gif);
    }
}
{% endhighlight %}

Se compile ainsi :

{% highlight css %}
* html #logo {
    background-image: url(/logo.gif);
}
{% endhighlight %}

D'autant que je sache, il n'existe pas d'équivalent en LESS...

#### Variabiliser les propriétés

En SASS toujours, il est également possible d'utiliser l'interpolation pour variabiliser une propriété. C'est extrêmement utile pour créer des mixins concis et puissants. Ainsi, ceci :

{% highlight text %}
@mixin border-badass($side) {
    border-#{$side}: 1px #BADA55 solid;
}

.container {
    @include border-badass(left);
}
{% endhighlight %}

Donnera par exemple :

{% highlight css %}
.container {
    border-left: 1px #BADA55 solid;
}
{% endhighlight %}

**En LESS en revanche, il s'agira de faire un mixin par propriété**, ce qui complique énormément la tâche pour ce genre de cas de figure. Il faut donc apprendre à s'en passer.

En réalité, il existe une bidouille qui permet d'obtenir le même résultat, mais qui n'a rien de très propre. A utiliser en votre âme et conscience donc...

Le principe se base sur le fait que les navigateurs ignorent les propriétés inconnues en CSS. Ainsi, `hack: 1;` ne sera pas très valide, mais ne sera pas considéré. Sachant cela, et en le combinant avec l'interpolation LESS qui peut se faire sur les valeurs, on peut imaginer le code suivant :

{% highlight text %}
.border-badass(@side) {
    hack: 1 ~"; border-@{side}: 1px #BADA55 solid";
}

.container {
    .border-badass(left);
}
{% endhighlight %}

Qui donnera :

{% highlight css %}
.container {
  hack: 1;
  border-left: 1px #BADA55 solid;
}
{% endhighlight %}

Techniquement, ça marche.

De là à l'utiliser, tout dépend de votre besoin je dirais. On peut imaginer que vous traitiez automatiquement votre CSS compilé lors du build pour supprimer les occurrences à `hack:1;` par exemple. On peut aussi imaginer que LESS intègrera cette fonctionnalité à l'avenir.

Sinon, gardez en tête que c'est un peu sale (quand même).


## Pour finir



