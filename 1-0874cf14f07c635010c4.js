(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{166:function(e,t,a){"use strict";a(30),a(184);var n=a(0),r=a.n(n),i=a(189),s=a.n(i);t.a=function(e){return function(t){var a,n,i=t.location,l=s()(i,"pathname","/").startsWith("/fr")?"fr":"en";if("fr"===l){var c=s()(i,"pathname","/fr/"),m=c.startsWith("/fr/tags"),o=c.startsWith("/fr/categories");n=[{path:(a="/fr/"===c)?"/":m?"/tags":o?"/categories":c.slice(4),label:"🇬🇧 Switch to English"}]}else{var u=s()(i,"pathname","/"),h=u.startsWith("/tags"),f=u.startsWith("/categories");n=[{path:(a="/"===u)?"/fr/":h?"/fr/tags":f?"/fr/categories":"/fr"+u,label:"🇫🇷 Basculer en français"}]}var p={lang:l,switchLangMenu:n};return r.a.createElement(e,Object.assign({},t,{isHomePage:a,i18n:p}))}}},167:function(e,t,a){"use strict";var n=a(8),r=a.n(n),i=a(0),s=a.n(i),l=a(165),c=a.n(l),m=(a(194),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return s.a.createElement("div",{className:"layout"},s.a.createElement(c.a,{defaultTitle:"@nicoespeon's blog"}),e)},t}(s.a.Component));t.a=m},168:function(e,t,a){"use strict";a(249);var n=a(8),r=a.n(n),i=a(0),s=a.n(i),l=(a(189),a(40)),c=(a(57),a(250),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=s.a.createElement("ul",{className:"menu__list"},e.map(function(e){return s.a.createElement("li",{className:"menu__list-item",key:e.path},s.a.createElement(l.Link,{to:e.path,className:"menu__list-item-link",activeClassName:"menu__list-item-link menu__list-item-link--active"},e.label))}));return s.a.createElement("nav",{className:"menu"},t)},t}(s.a.Component)),m=(a(251),a(252),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t={twitter:e.twitter,github:e.github,linkedin:e.linkedin,rss:e.rss,email:e.email};return s.a.createElement("div",{className:"links"},s.a.createElement("ul",{className:"links__list"},s.a.createElement("li",{className:"links__list-item"},s.a.createElement("a",{href:"https://www.twitter.com/"+t.twitter,target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{className:"icon-twitter"}))),s.a.createElement("li",{className:"links__list-item"},s.a.createElement("a",{href:"https://www.github.com/"+t.github,target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{className:"icon-github"}))),s.a.createElement("li",{className:"links__list-item"},s.a.createElement("a",{href:"https://www.linkedin.com/in/"+t.linkedin,target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{className:"icon-linkedin"}))),s.a.createElement("li",{className:"links__list-item"},s.a.createElement("a",{href:"mailto:"+t.email},s.a.createElement("i",{className:"icon-mail"}))),s.a.createElement("li",{className:"links__list-item"},s.a.createElement("a",{href:t.rss},s.a.createElement("i",{className:"icon-rss"})))))},t}(s.a.Component)),o=a(253),u=a.n(o),h=(a(254),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.isHomePage,a=e.i18n,n=this.props.data.site.siteMetadata,r=n.author,i=n.subtitles,o=n.menus,h=n.greetings,f=s.a.createElement("div",null,s.a.createElement(l.Link,{to:"/"},s.a.createElement("img",{src:u.a,className:"sidebar__author-photo",width:"75",height:"75",alt:r.name})),t?s.a.createElement("h1",{className:"sidebar__author-title"},s.a.createElement(l.Link,{className:"sidebar__author-title-link",to:"/"},h[a.lang])):s.a.createElement("h2",{className:"sidebar__author-title"},s.a.createElement(l.Link,{className:"sidebar__author-title-link",to:"/"},h[a.lang])),s.a.createElement("p",{className:"sidebar__author-subtitle"},i[a.lang]));return s.a.createElement("div",{className:"sidebar"},s.a.createElement("div",{className:"sidebar__inner"},s.a.createElement("div",{className:"sidebar__author"},f),s.a.createElement("div",null,s.a.createElement(c,{data:o[a.lang]}),s.a.createElement(m,{data:r}),s.a.createElement(c,{data:a.switchLangMenu}))))},t}(s.a.Component));t.a=h},194:function(e,t,a){},249:function(e,t,a){var n=a(31).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||a(19)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},250:function(e,t,a){},251:function(e,t,a){},252:function(e,t,a){},253:function(e,t,a){e.exports=a.p+"static/photo-396585ecc56bb47ee41d2021a5a1ab08.jpg"},254:function(e,t,a){}}]);
//# sourceMappingURL=1-0874cf14f07c635010c4.js.map