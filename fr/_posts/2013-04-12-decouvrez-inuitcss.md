---
layout: post
robots: index,follow
published: true
comments: true

tags: [inuit.css, framework]

title: Lassés de Bootstrap ? Découvrez inuit.css !
description: inuit.css est un framework CSS extensible, construit sur un ensemble de bonnes pratiques CSS et qui n'impose pas de design prédéfini.
---

## inuit.css est-il fait pour vous ?

Pour faire simple, voici les cas de figure dans lesquels ce framework peut vous intéresser :

- Vous avez besoin de mettre en place rapidement une architecture CSS décente
- Vous découvrez/connaissez les avantages du code *Orienté Objet* et appréciez son adaptabilité et sa réusabilité
- Vous devez implémenter un certain design qui ne colle pas forcément aux éléments "par défaut" des autres frameworks
- Vous aimez le concept de framework mais, développeur dans l'âme, aimez avoir la main-mise sur le code

Et voici clairement le cas de figure où vous pouvez passer votre chemin (sauf si vous êtes curieux) :

- Vous cherchez un framework CSS qui prenne en charge le design des éléments

En ce qui me concerne, je suis un assez grand utilisateur de [Bootstrap](http://twitter.github.io/bootstrap/). Mais en travaillant sur des projets où le design était imposé, je me suis confronté au problème de **devoir surcharger le design du framework**. Il faut alors annuler des effets par défaut, changer la couleur, la taille, ... Ca fonctionne, mais vous vous retrouvez avec un CSS inutilement gonflé parce-que vous avez défini et redéfini les propriétés des mêmes éléments. C'est pas glop.

Ainsi, quand on veut produire un code CSS optimal et que l'on apprécie les valeurs de [OOCSS](http://coding.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/) on se rend compte que, dans certains cas de figure, Bootstrap n'est pas l'idéal.

Je suis donc tombé sur [inuit.css](http://inuitcss.com), à peu près par hasard. Et comme je suis un peu curieux de nature, j'ai tenté le coup. J'ai adopté !

En guise d'overview, je ne peux que vous conseiller d'aller faire joujou sur [les fiddles d'inuit.css](http://jsfiddle.net/user/inuitcss/fiddles/) !

## Philosophie

inuit.css a été créé [en Avril 2011](http://csswizardry.com/2011/06/what-is-inuit-css/) par [Harry Roberts](http://csswizardry.com/about/) (c'est un anglais !).

Il est parti du principe qu'un framework CSS devait apporter une logique et un ligne de conduite pour le développeur, sans forcément le contraindre à un design particulier. Et comme le bougre n'est pas mauvais question bonnes pratiques CSS, il en a fait un framework.

<p class="islet">inuit.css is a powerful, scalable, Sass-based, BEM, OOCSS framework.</p>

**inuit.css est développé en [Sass](http://sass-lang.com/)**. Sass est un *pré-processeur CSS*, une sorte de langage CSS amélioré permettant de réaliser pas mal de choses dont le CSS n'est pas capable (sélecteurs imbriqués, boucles, conditions, etc.). Le code du pré-processeur doit ensuite être compilé pour donner le fichier CSS final qui sera utilisé pour le site, car c'est bien le CSS qu'il faut fournir au navigateur, les fichiers Sass n'étant là que pour simplifier le développement.

**inuit.css utilise la convention de nommage [BEM](https://gist.github.com/dmfrancisco/4967354)**. Alors pour le coup c'est un choix personnel du créateur qui peut être, comme toute bonne pratique CSS, controversée. C'est un coup à prendre, ça secoue les habitudes, c'est pas forcément très esthétique mais les avantages sont indéniables. Le mieux reste encore de lire [l'article d'Harry Roberts sur la question](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) car il l'explique très bien lui-même.

**inuit.css est un framework OOCSS**. C'est à dire que l'ensemble des composants du framework sont des objets indépendants, combinables et réutilisables. De plus, le framework tire partie des avantages de cette philosophie, ce qui le rend extensible à souhait sans crise de nerf à l'horizon. Je ferais un article sur les principes OOCSS, en attendant je peux vous conseiller [les slides de Nicole Sullivan sur la question](http://fr.slideshare.net/stubbornella/the-cascade-grids-headings-and-selectors-from-an-oocss-perspective-ajax-experience-2009).

## Installation

<p class="islet"><strong>Pré-requis</strong> - avoir <a href="http://sass-lang.com/tutorial.html" target="_blank">installé Sass</a> au préalable pour pouvoir compiler le code.</p>

A l'heure actuelle, **inuit.css** est passé à la version **v5.0**, ce qui change considérablement la manière de l'implémenter par rapport aux versions précédentes.

L'idée est [d'en faire un module](http://inuitcss.com/2013/03/inuit-css-v5.0/) dont le coeur peut être mis à jour sans perturber le projet dans lequel il est implémenté. Toutes les configurations propres au projet ont donc été exportées en dehors du coeur, qui peut être mis à jour sans aucun problème.

#### Méthode 1 - Avec Git

Pour un nouveau projet, clonez simplement le dépôt de la manière suivante :

    $ git clone --recursive git@github.com:csswizardry/inuit.css-web-template.git your-project-folder
    $ cd your-project-folder
    $ ./go

[Le script `go`](https://github.com/csswizardry/inuit.css-web-template/blob/master/go) intalle la dernière version de `inuit.css`.

<p class="islet">
    <strong>Astuce</strong> - Si vous souhaitez incorporer le framework dans un projet existant :
</p>

    $ git submodule add git://github.com/csswizardry/inuit.css.git your-project-folder/inuit.css

<p class="islet">
    Il vous faudra ensuite organiser vos fichiers selon vos besoin, en vous inspirant de l'architecture du dossier <code>css/</code> du <a href="https://github.com/csswizardry/inuit.css-web-template/tree/master/css" target="_blank">template web</a>.
</p>

Pour mettre à jour le coeur du framework, il suffira de mettre à jour le sous-module Git :

    $ git submodule update

#### Méthode 2 - Sans Git

Téléchargez le [template web](https://github.com/csswizardry/inuit.css-web-template/blob/master/go) puis téléchargez [le coeur du framework]() et placez ce dernier dans le dossier `css/` du template web. Placez le tout dans `your-project-folder`.

Pour mettre à jour le coeur du framework, il vous suffira de remplacer le dossier `inuit.css` par la version la plus récente.

## Architecture et fonctionnement

Idéalement, créez également un dossier `ui/` en parallèle de `inuit.css/` pour y placer tout ce qui à trait au **design** de votre projet.

{% highlight text %}
.
|-- inuit.css/           # Coeur du framework - ne pas toucher
|   |-- generic/         # Eléments bas niveau (clearfix, reset, ...)
|   |-- base/            # Eléments standards (tables, forms, ...)
|   |-- objects/         # Eléments modulaires (grid, nav, ...)
|   |-- _defaults.scss   # Variables par défaut
|   |-- _inuit.scss      # Fichier principal du coeur
|
|-- ui/                  # Dossier contenant vos fichiers Sass
|-- _vars.scss           # Variables configurables
|-- _style.scss          # Fichier principal de votre CSS
|-- watch                # Script pour compiler vos changements
{% endhighlight%}

Le dossier `inuit.css/` contient le coeur du framework. Le truc, **c'est de ne rien toucher à ce qui se trouve en dessous**. De cette manière, le framework peut être mis à jour sans perturber les configurations de votre projet, ce qui n'était pas le cas dans les versions précédentes de inuit.css. Comme le framework n'impacte pas le design des éléments, le fait de considérer `inuit.css/` comme un module que l'on peut mettre à jour est assez pertinent.

Le dossier `ui/` contient idéalement vos fichiers de style à vous. C'est vous qui voyez pour le coup. Y'en a qu'ont essayé, ils ont pas eu de problème.

Le fichier `_vars.scss` doit contenir les variables du framework que vous souhaitez personnaliser. Vous avez la liste des variables par défaut dans `inuit.css/_defaults.scss`. Le process conseillé est donc le suivant :

1. recopiez la variable par défaut dans `_vars.scss`
2. changez `@var: defaultvalue!default;` par `@var: newvalue;`
3. rien d'autre

Le fichier `_style.scss` importe les fichiers Sass pour la compilation du CSS. C'est lui le grand architecte. A vous d'y incorporer les fichiers que vous aurez créé dans `ui/` notamment.

Le script `watch` permet à Sass de compiler votre code à la volée lorsque vous faîtes des mises à jour. C'est pas impératif, ça dépend de votre workflow personnel... C'est vous qui voyez ! Le script est personnalisable et lance la commande suivante :

    $ sass --watch style.scss:style.min.css --style compressed

Pour le lancer, inutile de mémoriser la commande précédente, exécutez simplement :

    $ ./watch

<p class="islet">
    <strong>Note</strong> - A l'heure actuelle, la seule manière de définir les objets du frameworks que vous importez ou non consiste à modifier le fichier <code>inuit.css/_inuit.scss</code>. Vous pouvez commenter les éléments dont vous ne vous servez pas afin d'alléger votre CSS final notamment (c'est dans cet esprit modulaire qu'a été élaboré le framework).<br><br>
    Ce n'est pas encore très propre et cela signifie qu'il faudra répéter cette opération lors d'une mise à jour, mais je gage que d'ici quelques releases cette configuration sera exportée à l'extérieur du coeur du framework.
</p>

En définitive, vous disposez d'un fichier CSS unique, compressé et optimisé, qu'il ne vous reste plus qu'à incorporer dans votre HTML :

{% highlight html %}
<link rel="stylesheet" href="/your-css-folder/style.min.css">
{% endhighlight %}

## Une version LESS ? Oui Môsieur !

Pour ceux qui, comme moi, utilisent [LESS](http://lesscss.org/) plutôt que Sass, il existe [une version LESS de inuit.css](https://github.com/peterwilsoncc/inuit.css) entretenue par [Peter Wilson](http://twitter.com/pwcc). Pour info, [je contribue également au projet](https://github.com/nicoespeon/inuit.css) (mais je vous suggère de forker la version de Peter puisqu'elle fait office de référence).

<p class="islet">
    LESS est en effet une alternative plausible, même si moins puissante, à Sass. Ce pré-processeur est plus abordable dans un premier temps selon moi. Aussi, il fonctionne avec Javascript et non Ruby (les goûts et les couleurs me direz vous...).
</p>

Le seul hic est qu'**il ne s'agit pas forcément de la même version**. Si inuit.css est passé à la `v5.0`, l'alternative LESS correspond aujourd'hui à la `v4.3.7`.

Nous tâchons cependant de faire évoluer la version LESS avec l'optique d'offrir une version la plus up-to-date possible. Par exemple, Peter devrait traiter ma ma pull-request pour la `v4.5` ce week-end et j'ai actuellement la `v4.5.3` dans les bacs donc c'est une question de temps !

---

Pour ceux qui auraient des questions diverses et variées sur le framework, n'hésitez pas à laisser des commentaires ci-dessous.

Et si vous êtes curieux et avides de découvrir ce qu'est le CSS groskiki, *give it a try* !