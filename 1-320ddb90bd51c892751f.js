(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{166:function(e,t,n){"use strict";n(30),n(185);var a=n(0),r=n.n(a),i=n(204),l=n.n(i);t.a=function(e){return function(t){var n,a,i=t.location,s=l()(i,"pathname","/").startsWith("/fr")?"fr":"en";if("fr"===s){var c=l()(i,"pathname","/fr/"),o=c.startsWith("/fr/tags"),m=c.startsWith("/fr/categories");a=[{path:(n="/fr/"===c)?"/":o?"/tags":m?"/categories":c.slice(4),label:"🇬🇧 Switch to English"}]}else{var u=l()(i,"pathname","/"),h=u.startsWith("/tags"),f=u.startsWith("/categories");a=[{path:(n="/"===u)?"/fr/":h?"/fr/tags":f?"/fr/categories":"/fr"+u,label:"🇫🇷 Basculer en français"}]}var d={lang:s,switchLangMenu:a};return r.a.createElement(e,Object.assign({},t,{isHomePage:n,i18n:d}))}}},168:function(e,t,n){"use strict";var a=n(8),r=n.n(a),i=n(0),l=n.n(i),s=n(165),c=n.n(s),o=(n(186),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return l.a.createElement("div",{className:"layout"},l.a.createElement(c.a,{defaultTitle:"@nicoespeon's blog"}),e)},t}(l.a.Component));t.a=o},169:function(e,t,n){"use strict";n(267);var a=n(8),r=n.n(a),i=n(0),l=n.n(i),s=n(40);n(57),n(268);var c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=l.a.createElement("ul",{className:"menu__list"},e.map(function(e){return e.path?function(e){return l.a.createElement("li",{className:"menu__list-item",key:e.path},l.a.createElement(s.Link,{to:e.path,className:"menu__list-item-link",activeClassName:"menu__list-item-link menu__list-item-link--active link-underlined"},e.label))}(e):function(e){return l.a.createElement("li",{className:"menu__list-item",key:e.label},l.a.createElement("span",{className:"menu__list-item-link",role:"button",tabIndex:0,onClick:e.action,onKeyPress:e.action},e.label))}(e)}));return l.a.createElement("nav",{className:"menu"},t)},t}(l.a.Component),o=n(197),m=(n(270),n(271),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t={twitter:e.twitter,github:e.github,linkedin:e.linkedin,rss:e.rss,email:e.email};return l.a.createElement("div",{className:"links"},l.a.createElement("ul",{className:"links__list"},l.a.createElement("li",{className:"links__list-item"},l.a.createElement("a",{className:"no-underline",href:"https://www.twitter.com/"+t.twitter,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"icon-twitter"}))),l.a.createElement("li",{className:"links__list-item"},l.a.createElement("a",{className:"no-underline",href:"https://www.github.com/"+t.github,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"icon-github"}))),l.a.createElement("li",{className:"links__list-item"},l.a.createElement("a",{className:"no-underline",href:"https://www.linkedin.com/in/"+t.linkedin,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"icon-linkedin"}))),l.a.createElement("li",{className:"links__list-item"},l.a.createElement("a",{href:"mailto:"+t.email},l.a.createElement("i",{className:"icon-mail"}))),l.a.createElement("li",{className:"links__list-item"},l.a.createElement("a",{href:t.rss},l.a.createElement("i",{className:"icon-rss"})))))},t}(l.a.Component)),u=n(272),h=n.n(u),f=(n(273),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.isHomePage,n=e.i18n,a=this.props.data.site.siteMetadata,r=a.author,i=a.subtitles,u=a.menus,f=a.greetings,d=l.a.createElement("div",null,l.a.createElement(s.Link,{to:"/"},l.a.createElement("img",{src:h.a,className:"sidebar__author-photo",width:"75",height:"75",alt:r.name})),t?l.a.createElement("h1",{className:"sidebar__author-title"},l.a.createElement(s.Link,{className:"sidebar__author-title-link",to:"/"},f[n.lang])):l.a.createElement("h2",{className:"sidebar__author-title"},l.a.createElement(s.Link,{className:"sidebar__author-title-link",to:"/"},f[n.lang])),l.a.createElement("p",{className:"sidebar__author-subtitle"},i[n.lang])),p=l.a.createElement(o.a,{lang:n.lang},function(e,t){var a={en:"Switch to "+e+" theme",fr:"Basculer en thème "+e}[n.lang];return l.a.createElement(c,{data:[{label:a,action:t}]})});return l.a.createElement("div",{className:"sidebar"},l.a.createElement("div",{className:"sidebar__inner"},l.a.createElement("div",{className:"sidebar__author"},d),l.a.createElement("div",null,l.a.createElement(c,{data:u[n.lang]}),l.a.createElement(m,{data:r}),p,l.a.createElement(c,{data:n.switchLangMenu}))))},t}(l.a.Component));t.a=f},186:function(e,t,n){},197:function(e,t,n){"use strict";n(208);var a=n(8),r=n.n(a),i=n(0),l=n.n(i),s=(n(186),{light:"light",dark:"dark"});function c(e){return e===s.dark?s.light:s.dark}var o=function(e){function t(t){var n,a;return n=e.call(this,t)||this,a="undefined"!=typeof localStorage&&localStorage.getItem("theme")||s.light,n.state={theme:a},n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){"undefined"!=typeof document&&this.setThemeToHtmlOf(document)},n.componentDidUpdate=function(){"undefined"!=typeof document&&this.setThemeToHtmlOf(document),"undefined"!=typeof localStorage&&localStorage.setItem("theme",this.state.theme)},n.componentWillUnmount=function(){},n.setThemeToHtmlOf=function(e){var t=e.getElementsByTagName("html")[0];t&&t.setAttribute("data-theme",this.state.theme)},n.toggleTheme=function(){this.setState(function(e){return{theme:c(e.theme)}})},n.render=function(){var e,t,n=this.props.lang,a={en:(e={},e[s.dark]="dark",e[s.light]="light",e),fr:(t={},t[s.dark]="sombre",t[s.light]="clair",t)}[n][c(this.state.theme)];return this.props.children(a,this.toggleTheme.bind(this))},t}(l.a.Component);t.a=o},267:function(e,t,n){var a=n(31).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(19)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},268:function(e,t,n){},270:function(e,t,n){},271:function(e,t,n){},272:function(e,t,n){e.exports=n.p+"static/photo-396585ecc56bb47ee41d2021a5a1ab08.jpg"},273:function(e,t,n){}}]);
//# sourceMappingURL=1-320ddb90bd51c892751f.js.map