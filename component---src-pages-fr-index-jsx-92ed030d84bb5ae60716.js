(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return g});n(187),n(83),n(57);var a=n(8),r=n.n(a),i=n(0),o=n.n(i),s=n(165),l=n.n(s),c=n(166),m=n(168),p=n(183),u=n(171),d=n(169),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.i18n,t=this.props.data.site.siteMetadata,n=t.title,a=t.subtitles,r=this.props.data.allMarkdownRemark.edges.filter(function(e){return e.node.fields.slug.startsWith("/fr/")}).map(function(t){return o.a.createElement(p.a,{data:t,key:t.node.fields.slug,i18n:e})});return o.a.createElement(m.a,null,o.a.createElement("div",null,o.a.createElement(l.a,null,o.a.createElement("title",null,n),o.a.createElement("meta",{name:"description",content:a[e.lang]})),o.a.createElement(d.a,{lang:"fr"}),o.a.createElement(u.a,this.props),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"content__inner"},r))))},t}(o.a.Component);t.default=Object(c.a)(f);var g="2056271091"},169:function(e,t,n){"use strict";n(30);var a=n(170),r=n(0),i=n.n(r),o=n(165),s=n.n(o),l=n(40),c="3867784087";t.a=function(e){var t=e.meta,n=void 0===t?[]:t,r=e.title,o=void 0===r?"":r,m=e.slug,p=void 0===m?"":m,u=e.lang,d=void 0===u?"en":u,f=e.image,g=e.description;return i.a.createElement(l.StaticQuery,{query:c,render:function(e){var t=e.site.siteMetadata,a=g||t.subtitles[d],r=f?t.url+"/"+f:null,l=""+t.url+p;return i.a.createElement(s.a,Object.assign({htmlAttributes:{lang:d}},o?{titleTemplate:"%s — "+t.title,title:o}:{title:t.title},{meta:[{name:"description",content:a},{property:"og:url",content:l},{property:"og:title",content:o||t.title},{property:"og:description",content:a},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:"@"+t.author.twitter},{name:"twitter:title",content:o||t.title},{name:"twitter:description",content:a}].concat(r?[{property:"og:image",content:r},{name:"twitter:image",content:r}]:[]).concat(n)}))},data:a})}},170:function(e){e.exports={data:{site:{siteMetadata:{title:"@nicoespeon's blog",subtitles:{en:"I write about web development, agile practices and personal organization.",fr:"J’écris sur le développement web, les pratiques agiles et l’organisation personnelle."},url:"https://www.nicoespeon.com",author:{twitter:"nicoespeon"}}}}}},181:function(e,t,n){"use strict";n.d(t,"a",function(){return a});n(189);function a(e,t){var n=Math.round(e/5)||1,a=new Array(n).fill("☕").join("");return{en:a+" "+e+" min read",fr:a+" "+e+" min de lecture"}[t]}},182:function(e,t,n){"use strict";n(30);var a=n(0),r=n.n(a),i=n(186),o=n.n(i);n(190);t.a=function(e){return function(t){return r.a.createElement(e,Object.assign({},t,{localMoment:function(e){return o()(e).locale(t.i18n.lang)}}))}}},183:function(e,t,n){"use strict";var a=n(8),r=n.n(a),i=n(0),o=n.n(i),s=n(40),l=n(181),c=n(182),m=(n(184),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.i18n,n=e.localMoment,a=this.props.data.node.timeToRead,r=this.props.data.node.frontmatter,i=r.title,c=r.date,m=r.category,p=r.description,u=this.props.data.node.fields,d=u.slug,f=u.categorySlug,g={en:"Read",fr:"Lire"}[t.lang];return o.a.createElement("div",{className:"post"},o.a.createElement("h2",{className:"post__title"},o.a.createElement(s.Link,{className:"post__title-link",to:d},i)),o.a.createElement("div",{className:"post__meta"},o.a.createElement("time",{className:"post__meta-time",dateTime:n(c).format("MMMM D, YYYY")},n(c).format("MMMM YYYY")),o.a.createElement("span",{className:"post__meta-divider"}),o.a.createElement("small",{className:"post__meta-readtime"},Object(l.a)(a,t.lang)),o.a.createElement("span",{className:"post__meta-divider"}),o.a.createElement("span",{className:"post__meta-category",key:f},o.a.createElement(s.Link,{to:f,className:"post__meta-category-link"},"#",m))),o.a.createElement("p",{className:"post__description"},p),o.a.createElement(s.Link,{className:"post__readmore link-underlined",to:d},g))},t}(o.a.Component));t.a=Object(c.a)(m)},184:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-fr-index-jsx-92ed030d84bb5ae60716.js.map