(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{154:function(t,e,n){"use strict";n.r(e);var a=n(8),r=n.n(a),i=n(0),o=n.n(i),l=n(165),c=n.n(l),s=n(168),p=n(166),u=n(170),m=n(171),d=(n(225),function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark;return o.a.createElement("div",null,o.a.createElement(m.a,this.props),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"content__inner"},o.a.createElement("div",{className:"page with-links"},o.a.createElement("h1",{className:"page__title"},t.frontmatter.title),o.a.createElement("div",{className:"page__body",dangerouslySetInnerHTML:{__html:t.html}})))))},e}(o.a.Component));n.d(e,"pageQuery",function(){return w});var g=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.i18n,e=this.props.data.site.siteMetadata,n=e.title,a=e.subtitles,r=this.props.data.markdownRemark,i=r.frontmatter,l=i.title,s=i.description,m=null!==s?s:a[t.lang];return o.a.createElement(p.a,null,o.a.createElement("div",null,o.a.createElement(c.a,null,o.a.createElement("title",null,l+" - "+n),o.a.createElement("meta",{name:"description",content:m})),o.a.createElement(u.a,{title:l+" - "+n,description:m,slug:r.fields.slug}),o.a.createElement(d,this.props)))},e}(o.a.Component),w=(e.default=Object(s.a)(g),"3150674504")},169:function(t){t.exports={data:{site:{siteMetadata:{title:"@nicoespeon's blog",subtitles:{en:"I write about VS Code, web development and life in general.",fr:"J’écris à propos de VS Code, du développement web et de la vie en général."},url:"https://www.nicoespeon.com",author:{twitter:"nicoespeon"}}}}}},170:function(t,e,n){"use strict";n(30);var a=n(169),r=n(0),i=n.n(r),o=n(165),l=n.n(o),c=n(40),s=n(183),p=n.n(s),u="3867784087";e.a=function(t){var e=t.meta,n=void 0===e?[]:e,r=t.title,o=void 0===r?"":r,s=t.slug,m=void 0===s?"":s,d=t.lang,g=void 0===d?"en":d,w=t.image,v=void 0===w?p.a:w,f=t.description;return i.a.createElement(c.StaticQuery,{query:u,render:function(t){var e=t.site.siteMetadata,a=f||e.subtitles[g],r=""+e.url+v,c=""+e.url+m;return i.a.createElement(l.a,Object.assign({htmlAttributes:{lang:g}},o?{titleTemplate:"%s — "+e.title,title:o}:{title:e.title},{meta:[{name:"description",content:a},{property:"og:url",content:c},{property:"og:title",content:o||e.title},{property:"og:description",content:a},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:"@"+e.author.twitter},{name:"twitter:title",content:o||e.title},{name:"twitter:description",content:a}].concat(r?[{property:"og:image",content:r},{name:"twitter:image",content:r}]:[]).concat(n)}))},data:a})}},225:function(t,e,n){}}]);
//# sourceMappingURL=component---src-templates-page-template-jsx-b6d890f6fc5be99d9249.js.map