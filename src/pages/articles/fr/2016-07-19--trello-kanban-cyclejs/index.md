---
title: Trello, Kanban & Cycle.js
date: 2016-07-19
layout: post
draft: false
path: /fr/2016/07/trello-kanban-cyclejs/
category: Développement web
tags:
  - cycle.js
  - trello
  - kanban
  - meetup
  - talk
description: Talk présenté le 29 juin 2016 au meetup Paris.js chez Algolia.
---

J’ai présenté ce talk le 29 juin 2016 au [meetup Paris.js #57 chez Algolia](http://www.meetup.com/fr-FR/Paris-js/events/232103659/).

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/8fHo34Ah6B0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Et voici les slides associés qui contiennent pas mal de liens si vous souhaitez approfondir le sujet :

<iframe src="https://slides.com/nicoespeon/trello-kanban-cycle-js/embed" width="576" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Le projet est dispo en open-source ici : <https://github.com/nicoespeon/trello-kanban-analysis-tool>

## Quelques retours post-présentation

* Pour commencer, il y a bien un exemple de TodoMVC avec Cycle.js : <https://github.com/cyclejs/todomvc-cycle/>
* Concernant le server-side rendering avec Cycle.js : ça se fait bien, toujours avec des streams. Il y a [un exemple disponible dans le dépôt de Cycle.js](https://github.com/cyclejs/examples/tree/master/isomorphic)d’ailleurs.
* On m’a posé la question de la différence entre React et Cycle.js (et Elm). Il y a [une discussion sur le sujet sur reddit](https://www.reddit.com/r/javascript/comments/3zr6i0/conversation_whats_the_core_differences_between/).

Vincent expliquait également il y a quelques mois [pourquoi il partait plutôt sur du Cycle.js](https://medium.com/@_cmdv_/why-i-chose-to-use-cycle-js-9156173c2752#.kpb0dfkd1).

Quant à mon opinion : ça dépend. Partez sur du React/Redux pour des projets qui partent en production parce-que c’est éprouvé et que la communauté est là. Mais si vous avez du temps libre, essayez voir Cycle.js, vous apprendrez des choses =)
