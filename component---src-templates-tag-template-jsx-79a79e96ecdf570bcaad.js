(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{153:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),i=a(0),o=a.n(i),s=a(165),l=a.n(s),c=a(168),p=a(166),m=a(171),u=a(170),d=(a(191),a(83),a(57),a(186)),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.i18n,t=this.props.data.allMarkdownRemark.edges.filter(function(t){return(t.node.fields.slug.startsWith("/fr/")?"fr":"en")===e.lang}).map(function(t){return o.a.createElement(d.a,{data:t,key:t.node.fields.slug,i18n:e})}),a=this.props.pageContext.tag,n={en:'All posts tagged as "'+a+'"',fr:'Tous les articles tagués "'+a+'"'}[e.lang];return o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"content__inner"},o.a.createElement("div",{className:"page"},o.a.createElement("h1",{className:"page__title"},n),o.a.createElement("div",{className:"page__body"},t))))},t}(o.a.Component);a.d(t,"pageQuery",function(){return h});var f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.pageContext.tag,a=this.props.i18n.lang,n='Tag "'+t+'" - '+e,r={en:'All my posts tagged as "'+t+'".',fr:'Tous mes articles avec l’étiquette "'+t+'".'}[a];return o.a.createElement(p.a,null,o.a.createElement("div",null,o.a.createElement(l.a,{title:n}),o.a.createElement(u.a,{title:n,description:r,slug:this.props.location.pathname,lang:a}),o.a.createElement(m.a,this.props),o.a.createElement(g,this.props)))},t}(o.a.Component),h=(t.default=Object(c.a)(f),"2558544558")},169:function(e){e.exports={data:{site:{siteMetadata:{title:"@nicoespeon's blog",subtitles:{en:"I write about VS Code, web development and life in general.",fr:"J’écris à propos de VS Code, du développement web et de la vie en général."},url:"https://www.nicoespeon.com",author:{twitter:"nicoespeon"}}}}}},170:function(e,t,a){"use strict";a(30);var n=a(169),r=a(0),i=a.n(r),o=a(165),s=a.n(o),l=a(40),c=a(183),p=a.n(c),m="3867784087";t.a=function(e){var t=e.meta,a=void 0===t?[]:t,r=e.title,o=void 0===r?"":r,c=e.slug,u=void 0===c?"":c,d=e.lang,g=void 0===d?"en":d,f=e.image,h=void 0===f?p.a:f,v=e.description;return i.a.createElement(l.StaticQuery,{query:m,render:function(e){var t=e.site.siteMetadata,n=v||t.subtitles[g],r=""+t.url+h,l=""+t.url+u;return i.a.createElement(s.a,Object.assign({htmlAttributes:{lang:g}},o?{titleTemplate:"%s — "+t.title,title:o}:{title:t.title},{meta:[{name:"description",content:n},{property:"og:url",content:l},{property:"og:title",content:o||t.title},{property:"og:description",content:n},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:"@"+t.author.twitter},{name:"twitter:title",content:o||t.title},{name:"twitter:description",content:n}].concat(r?[{property:"og:image",content:r},{name:"twitter:image",content:r}]:[]).concat(a)}))},data:n})}},172:function(e,t,a){"use strict";a(30);var n=a(0),r=a.n(n),i=a(187),o=a.n(i);a(188);t.a=function(e){return function(t){return r.a.createElement(e,Object.assign({},t,{localMoment:function(e){return o()(e).locale(t.i18n.lang)}}))}}},173:function(e,t,a){"use strict";a.d(t,"a",function(){return n});a(189);function n(e,t){var a=Math.round(e/5)||1,n=new Array(a).fill("☕").join("");return{en:n+" "+e+" min read",fr:n+" "+e+" min de lecture"}[t]}},185:function(e,t,a){},186:function(e,t,a){"use strict";var n=a(8),r=a.n(n),i=a(0),o=a.n(i),s=a(40),l=a(173),c=a(172),p=(a(185),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.i18n,a=e.localMoment,n=this.props.data.node.timeToRead,r=this.props.data.node.frontmatter,i=r.title,c=r.date,p=r.category,m=r.description,u=this.props.data.node.fields,d=u.slug,g=u.categorySlug,f={en:"Read",fr:"Lire"}[t.lang];return o.a.createElement("div",{className:"post"},o.a.createElement("h2",{className:"post__title"},o.a.createElement(s.Link,{className:"post__title-link",to:d},i)),o.a.createElement("div",{className:"post__meta"},o.a.createElement("time",{className:"post__meta-time",dateTime:a(c).format("MMMM D, YYYY")},a(c).format("MMMM YYYY")),o.a.createElement("span",{className:"post__meta-divider"}),o.a.createElement("small",{className:"post__meta-readtime"},Object(l.a)(n,t.lang)),o.a.createElement("span",{className:"post__meta-divider"}),o.a.createElement("span",{className:"post__meta-category",key:g},o.a.createElement(s.Link,{to:g,className:"post__meta-category-link"},"#",p))),o.a.createElement("p",{className:"post__description"},m),o.a.createElement(s.Link,{className:"post__readmore link-underlined",to:d},f))},t}(o.a.Component));t.a=Object(c.a)(p)}}]);
//# sourceMappingURL=component---src-templates-tag-template-jsx-79a79e96ecdf570bcaad.js.map