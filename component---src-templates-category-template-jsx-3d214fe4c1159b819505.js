(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{163:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),s=a(0),o=a.n(s),i=a(165),c=a.n(i),l=a(166),p=a(167),m=a(168),u=(a(86),a(87),a(172)),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this,t=[],a=this.props.pageContext.category;return this.props.data.allMarkdownRemark.edges.forEach(function(a){t.push(o.a.createElement(u.a,{data:a,key:a.node.fields.slug,i18n:e.props.i18n}))}),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"content__inner"},o.a.createElement("div",{className:"page"},o.a.createElement("h1",{className:"page__title"},a),o.a.createElement("div",{className:"page__body"},t))))},t}(o.a.Component);a.d(t,"pageQuery",function(){return _});var f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.pageContext.category;return o.a.createElement(p.a,null,o.a.createElement("div",null,o.a.createElement(c.a,{title:t+" - "+e}),o.a.createElement(m.a,this.props),o.a.createElement(d,this.props)))},t}(o.a.Component),_=(t.default=Object(l.a)(f),"2921536340")},170:function(e,t,a){"use strict";a.d(t,"a",function(){return n});a(186);function n(e,t){var a=Math.round(e/5)||1,n=new Array(a).fill("☕").join("");return{en:n+" "+e+" min read",fr:n+" "+e+" min de lecture"}[t]}},171:function(e,t,a){"use strict";a(30);var n=a(0),r=a.n(n),s=a(184),o=a.n(s);a(187);t.a=function(e){return function(t){return r.a.createElement(e,Object.assign({},t,{localMoment:function(e){return o()(e).locale(t.i18n.lang)}}))}}},172:function(e,t,a){"use strict";var n=a(8),r=a.n(n),s=a(0),o=a.n(s),i=a(40),c=a(170),l=a(171),p=(a(173),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.i18n,a=e.localMoment,n=this.props.data.node.timeToRead,r=this.props.data.node.frontmatter,s=r.title,l=r.date,p=r.category,m=r.description,u=this.props.data.node.fields,d=u.slug,f=u.categorySlug,_={en:"Read",fr:"Lire"}[t.lang];return o.a.createElement("div",{className:"post"},o.a.createElement("div",{className:"post__meta"},o.a.createElement("time",{className:"post__meta-time",dateTime:a(l).format("MMMM D, YYYY")},a(l).format("MMMM YYYY")),o.a.createElement("span",{className:"post__meta-divider"}),o.a.createElement("span",{className:"post__meta-category",key:f},o.a.createElement(i.Link,{to:f,className:"post__meta-category-link"},p)),o.a.createElement("span",{className:"post__meta-divider"}),o.a.createElement("small",null,Object(c.a)(n,t.lang))),o.a.createElement("h2",{className:"post__title"},o.a.createElement(i.Link,{className:"post__title-link",to:d},s)),o.a.createElement("p",{className:"post__description"},m),o.a.createElement(i.Link,{className:"post__readmore",to:d},_))},t}(o.a.Component));t.a=Object(l.a)(p)},173:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-category-template-jsx-3d214fe4c1159b819505.js.map