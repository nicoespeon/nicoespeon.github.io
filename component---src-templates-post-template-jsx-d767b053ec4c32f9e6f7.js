(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{161:function(t,e,n){"use strict";n.r(e);var r=n(8),a=n.n(r),o=n(0),i=n.n(o),u=n(165),s=n.n(u),l=n(166),f=n(168),c=(n(57),n(40)),d=n(262),m=n.n(d),p=n(179),h=n(180),g=(n(197),n(41)),v=n.n(g),b=n(272),x=n.n(b),y=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={toasts:[]},n.notifyAboutComment=n.notifyAboutComment.bind(v()(v()(n))),n.onSnackbarDismiss=n.onSnackbarDismiss.bind(v()(v()(n))),n}a()(e,t);var n=e.prototype;return n.onSnackbarDismiss=function(){var t=this.state.toasts.slice(1);this.setState({toasts:t})},n.notifyAboutComment=function(){var t=this.state.toasts.slice();t.push({text:"New comment available!!"}),this.setState({toasts:t})},n.render=function(){var t=this.props,e=t.postNode,n=t.siteMetadata;if(!n.disqusShortname)return null;var r=e.frontmatter,a=n.url+e.fields.slug;return i.a.createElement(x.a,{shortname:n.disqusShortname,identifier:r.title,title:r.title,url:a,category_id:r.category_id,onNewComment:this.notifyAboutComment})},e}(o.Component);n(274);var E=function(t){var e=t.author,n={en:"Follow @"+e,fr:"Suivez @"+e}[t.lang];return i.a.createElement("ul",{className:"twitter"},i.a.createElement("li",null,i.a.createElement("a",{className:"twitter-share-button",href:"https://twitter.com/intent/tweet?via="+e,"data-size":"large"},"Tweet")),i.a.createElement("li",null,i.a.createElement("a",{className:"twitter-follow-button",href:"https://twitter.com/"+e,"data-show-count":"false","data-size":"large"},n)))},w=n(196),_=(n(275),function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t=this.props,e=t.i18n,n=t.localMoment,r=this.props.data.site.siteMetadata,a=r.subtitles,o=r.author,u=this.props.data.markdownRemark,s=u.fields.tagSlugs,l={en:i.a.createElement("div",{className:"post-single__button-container"},i.a.createElement(c.Link,{className:"post-single__button post-single__button--home",to:"/"},"← Articles"),i.a.createElement(w.a,{lang:e.lang},function(t,e){return i.a.createElement("div",{className:"post-single__button post-single__button--theme",role:"button",tabIndex:0,onClick:e,onKeyPress:e},m()(t)," theme")})),fr:i.a.createElement("div",{className:"post-single__button-container"},i.a.createElement(c.Link,{className:"post-single__button post-single__button--home",to:"/fr/"},"← Articles"),i.a.createElement(w.a,{lang:e.lang},function(t,e){return i.a.createElement("div",{className:"post-single__button post-single__button--theme",role:"button",tabIndex:0,onClick:e,onKeyPress:e},"Thème ",t)}))}[e.lang],f=i.a.createElement("div",{className:"post-single__tags"},i.a.createElement("ul",{className:"post-single__tags-list"},s&&s.map(function(t,e){return i.a.createElement("li",{className:"post-single__tags-list-item",key:t},i.a.createElement(c.Link,{to:t,className:"post-single__tags-list-item-link"},u.frontmatter.tags[e]))}))),d=i.a.createElement("div",null,i.a.createElement(y,{postNode:u,siteMetadata:this.props.data.site.siteMetadata})),h=n(u.frontmatter.date),g={en:"Published "+h.format("D MMM YYYY"),fr:"Publié le "+h.format("D MMM YYYY")}[e.lang];return i.a.createElement("div",null,l,i.a.createElement("div",{className:"post-single"},i.a.createElement("div",{className:"post-single__inner"},i.a.createElement("h1",{className:"post-single__title"},u.frontmatter.title),i.a.createElement("p",{className:"post-single__subtitle"},Object(p.a)(u.timeToRead,e.lang)),i.a.createElement("div",{className:"post-single__body",dangerouslySetInnerHTML:{__html:u.html}}),i.a.createElement("div",{className:"post-single__date"},i.a.createElement("em",null,g))),i.a.createElement("div",{className:"post-single__footer"},f,i.a.createElement("hr",null),i.a.createElement("div",{className:"post-single__footer-text"},a[e.lang],i.a.createElement(E,{lang:e.lang,author:o.twitter})),d)))},e}(i.a.Component)),N=Object(h.a)(_);n.d(e,"pageQuery",function(){return O});var k=function(t){function e(){return t.apply(this,arguments)||this}a()(e,t);var n=e.prototype;return n.componentDidMount=function(){void 0!==twttr.widgets&&twttr.widgets.load()},n.render=function(){var t=this.props.i18n,e=this.props.data.site.siteMetadata.subtitles,n=this.props.data.markdownRemark.frontmatter,r=n.title,a=n.description,o=null!==a?a:e[t.lang];return i.a.createElement(f.a,null,i.a.createElement("div",null,i.a.createElement(s.a,null,i.a.createElement("title",null,r),i.a.createElement("meta",{name:"description",content:o})),i.a.createElement(N,this.props)))},e}(i.a.Component),O=(e.default=Object(l.a)(k),"332876890")},166:function(t,e,n){"use strict";n(30),n(185);var r=n(0),a=n.n(r),o=n(200),i=n.n(o);e.a=function(t){return function(e){var n,r,o=e.location,u=i()(o,"pathname","/").startsWith("/fr")?"fr":"en";if("fr"===u){var s=i()(o,"pathname","/fr/"),l=s.startsWith("/fr/tags"),f=s.startsWith("/fr/categories");r=[{path:(n="/fr/"===s)?"/":l?"/tags":f?"/categories":s.slice(4),label:"🇬🇧 Switch to English"}]}else{var c=i()(o,"pathname","/"),d=c.startsWith("/tags"),m=c.startsWith("/categories");r=[{path:(n="/"===c)?"/fr/":d?"/fr/tags":m?"/fr/categories":"/fr"+c,label:"🇫🇷 Basculer en français"}]}var p={lang:u,switchLangMenu:r};return a.a.createElement(t,Object.assign({},e,{isHomePage:n,i18n:p}))}}},168:function(t,e,n){"use strict";var r=n(8),a=n.n(r),o=n(0),i=n.n(o),u=n(165),s=n.n(u),l=(n(186),function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t=this.props.children;return i.a.createElement("div",{className:"layout"},i.a.createElement(s.a,{defaultTitle:"@nicoespeon's blog"}),t)},e}(i.a.Component));e.a=l},170:function(t,e,n){var r=n(171),a=n(172),o=n(175),i=RegExp("['’]","g");t.exports=function(t){return function(e){return r(o(a(e).replace(i,"")),t,"")}}},171:function(t,e){t.exports=function(t,e,n,r){var a=-1,o=null==t?0:t.length;for(r&&o&&(n=t[++a]);++a<o;)n=e(n,t[a],a,t);return n}},172:function(t,e,n){var r=n(173),a=n(167),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=a(t))&&t.replace(o,r).replace(i,"")}},173:function(t,e,n){var r=n(174)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=r},174:function(t,e){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},175:function(t,e,n){var r=n(176),a=n(177),o=n(167),i=n(178);t.exports=function(t,e,n){return t=o(t),void 0===(e=n?void 0:e)?a(t)?i(t):r(t):t.match(e)||[]}},176:function(t,e){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(n)||[]}},177:function(t,e){var n=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return n.test(t)}},178:function(t,e){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",r="["+n+"]",a="\\d+",o="[\\u2700-\\u27bf]",i="[a-z\\xdf-\\xf6\\xf8-\\xff]",u="[^\\ud800-\\udfff"+n+a+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",s="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",f="[A-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:"+i+"|"+u+")",d="(?:"+f+"|"+u+")",m="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",p="[\\ufe0e\\ufe0f]?"+m+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",s,l].join("|")+")[\\ufe0e\\ufe0f]?"+m+")*"),h="(?:"+[o,s,l].join("|")+")"+p,g=RegExp([f+"?"+i+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[r,f,"$"].join("|")+")",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[r,f+c,"$"].join("|")+")",f+"?"+c+"+(?:['’](?:d|ll|m|re|s|t|ve))?",f+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)","\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)",a,h].join("|"),"g");t.exports=function(t){return t.match(g)||[]}},179:function(t,e,n){"use strict";n.d(e,"a",function(){return r});n(187);function r(t,e){var n=Math.round(t/5)||1,r=new Array(n).fill("☕").join("");return{en:r+" "+t+" min read",fr:r+" "+t+" min de lecture"}[e]}},180:function(t,e,n){"use strict";n(30);var r=n(0),a=n.n(r),o=n(184),i=n.n(o);n(188);e.a=function(t){return function(e){return a.a.createElement(t,Object.assign({},e,{localMoment:function(t){return i()(t).locale(e.i18n.lang)}}))}}},186:function(t,e,n){},196:function(t,e,n){"use strict";n(197);var r=n(8),a=n.n(r),o=n(0),i=n.n(o),u=(n(186),{light:"light",dark:"dark"});function s(t){return t===u.dark?u.light:u.dark}var l=function(t){function e(e){var n,r;return n=t.call(this,e)||this,r="undefined"!=typeof localStorage&&localStorage.getItem("theme")||u.light,n.state={theme:r},n}a()(e,t);var n=e.prototype;return n.componentDidMount=function(){"undefined"!=typeof document&&this.setThemeToHtmlOf(document)},n.componentDidUpdate=function(){"undefined"!=typeof document&&this.setThemeToHtmlOf(document),"undefined"!=typeof localStorage&&localStorage.setItem("theme",this.state.theme)},n.componentWillUnmount=function(){},n.setThemeToHtmlOf=function(t){var e=t.getElementsByTagName("html")[0];e&&e.setAttribute("data-theme",this.state.theme)},n.toggleTheme=function(){this.setState(function(t){return{theme:s(t.theme)}})},n.render=function(){var t,e,n=this.props.lang,r={en:(t={},t[u.dark]="dark",t[u.light]="light",t),fr:(e={},e[u.dark]="sombre",e[u.light]="clair",e)}[n][s(this.state.theme)];return this.props.children(r,this.toggleTheme.bind(this))},e}(i.a.Component);e.a=l},204:function(t,e){var n=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");t.exports=function(t){return n.test(t)}},262:function(t,e,n){var r=n(170),a=n(263),o=r(function(t,e,n){return t+(n?" ":"")+a(e)});t.exports=o},263:function(t,e,n){var r=n(264)("toUpperCase");t.exports=r},264:function(t,e,n){var r=n(265),a=n(204),o=n(267),i=n(167);t.exports=function(t){return function(e){e=i(e);var n=a(e)?o(e):void 0,u=n?n[0]:e.charAt(0),s=n?r(n,1).join(""):e.slice(1);return u[t]()+s}}},265:function(t,e,n){var r=n(266);t.exports=function(t,e,n){var a=t.length;return n=void 0===n?a:n,!e&&n>=a?t:r(t,e,n)}},266:function(t,e){t.exports=function(t,e,n){var r=-1,a=t.length;e<0&&(e=-e>a?0:a+e),(n=n>a?a:n)<0&&(n+=a),a=e>n?0:n-e>>>0,e>>>=0;for(var o=Array(a);++r<a;)o[r]=t[r+e];return o}},267:function(t,e,n){var r=n(268),a=n(204),o=n(269);t.exports=function(t){return a(t)?o(t):r(t)}},268:function(t,e){t.exports=function(t){return t.split("")}},269:function(t,e){var n="[\\ud800-\\udfff]",r="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",a="\\ud83c[\\udffb-\\udfff]",o="[^\\ud800-\\udfff]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",u="[\\ud800-\\udbff][\\udc00-\\udfff]",s="(?:"+r+"|"+a+")"+"?",l="[\\ufe0e\\ufe0f]?"+s+("(?:\\u200d(?:"+[o,i,u].join("|")+")[\\ufe0e\\ufe0f]?"+s+")*"),f="(?:"+[o+r+"?",r,i,u,n].join("|")+")",c=RegExp(a+"(?="+a+")|"+f+l,"g");t.exports=function(t){return t.match(c)||[]}},272:function(t,e,n){"use strict";t.exports=n(273)},273:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=u(n(0)),i=u(n(1));function u(t){return t&&t.__esModule?t:{default:t}}var s=["shortname","identifier","title","url","category_id","onNewComment","language"],l=!1;function f(t,e){var n=e.onNewComment,r=e.language,a=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(e,["onNewComment","language"]);for(var o in a)t.page[o]=a[o];t.language=r,n&&(t.callbacks={onNewComment:[n]})}var c=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.default.Component),a(e,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(t,e){return t.identifier!==this.props.identifier}},{key:"render",value:function(){var t=this,e=Object.keys(this.props).reduce(function(e,n){return s.some(function(t){return t===n})?e:r({},e,function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},n,t.props[n]))},{});return o.default.createElement("div",e,o.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!l){var t=this.disqus=document.createElement("script"),e=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];t.async=!0,t.type="text/javascript",t.src="//"+this.props.shortname+".disqus.com/embed.js",e.appendChild(t),l=!0}}},{key:"loadDisqus",value:function(){var t=this,e={};s.forEach(function(n){"shortname"!==n&&t.props[n]&&(e[n]=t.props[n])}),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){f(this,e),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){f(this,e)},this.addDisqusScript())}}]),e}();c.displayName="DisqusThread",c.propTypes={id:i.default.string,shortname:i.default.string.isRequired,identifier:i.default.string,title:i.default.string,url:i.default.string,category_id:i.default.string,onNewComment:i.default.func,language:i.default.string},c.defaultProps={url:"undefined"==typeof window?null:window.location.href},e.default=c},274:function(t,e,n){},275:function(t,e,n){}}]);
//# sourceMappingURL=component---src-templates-post-template-jsx-d767b053ec4c32f9e6f7.js.map