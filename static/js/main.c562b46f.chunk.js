(this["webpackJsonpgo-books"]=this["webpackJsonpgo-books"]||[]).push([[0],{147:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),o=n.n(a),r=n(55),i=(n(69),n(19)),s=n(37),h=n(3),u=n(10),l=n(56),b=n.n(l),d=n(18),j=function(){var t=o.a.useContext(O),e=t.bookInfo,n=t.chapterInfo,a=t.next,r=t.prev,i=Object(d.b)("/books/".concat(null===e||void 0===e?void 0:e.path,"/").concat(null===n||void 0===n?void 0:n.path,".md")).data,s=void 0===i?"":i;return Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)(b.a,{allowDangerousHtml:!0,children:s}),Object(c.jsxs)("div",{className:"bottom_navigation",children:[r?Object(c.jsx)(u.b,{to:"/".concat(null===e||void 0===e?void 0:e.path,"/").concat(r.path),className:"bottom_navigation_prev",children:"\u2190 Ch\u01b0\u01a1ng tr\u01b0\u1edbc"}):Object(c.jsx)("span",{}),a?Object(c.jsx)(u.b,{to:"/".concat(null===e||void 0===e?void 0:e.path,"/").concat(a.path),className:"bottom_navigation_next",children:"Ch\u01b0\u01a1ng sau \u2192"}):Object(c.jsx)("span",{})]})]})},p=n(40),v=function(){var t=Object(h.e)().chapterPath,e=o.a.useContext(O),n=e.bookInfo,a=e.chapters,r=o.a.useCallback((function(e){return Object(c.jsx)("li",{children:Object(c.jsxs)("div",{children:[e.path?Object(c.jsx)(u.b,{to:"/".concat(null===n||void 0===n?void 0:n.path,"/").concat(e.path),className:t===e.path?"active":"",children:e.title}):e.title,e.subchapters&&e.subchapters.length>0&&Object(c.jsx)("ul",{children:e.subchapters.map(r)})]})},e.path+e.title)}),[null===n||void 0===n?void 0:n.path,t]);return Object(c.jsxs)("div",{className:"sidebar",children:[Object(c.jsx)("h2",{children:null===n||void 0===n?void 0:n.title}),Object(c.jsx)("ul",{children:null===a||void 0===a?void 0:a.map(r)})]})},f=n(58),O=o.a.createContext({bookInfo:void 0,chapterInfo:void 0}),x=function(){var t=Object(h.e)(),e=t.bookPath,n=t.chapterPath,a=o.a.useMemo((function(){return p.find((function(t){return t.path===e}))}),[e]),r=Object(d.b)(e?"/books/".concat(e,"/chapters.json"):null,{fetcher:function(t){return fetch(t).then((function(t){return t.json()}))}}).data,l=void 0===r?[]:r;console.log(l);var b=o.a.useCallback((function(t,e){if(""!==t){var n,c=Object(s.a)(e);try{for(c.s();!(n=c.n()).done;){var a=n.value;if(a.path===t)return a;if(a.subchapters&&a.subchapters.length>0){var o=b(t,a.subchapters);if(void 0!==o)return o}}}catch(r){c.e(r)}finally{c.f()}}}),[]),x=o.a.useCallback((function(t){var e,n=Object(s.a)(t);try{for(n.s();!(e=n.n()).done;){var c=e.value;if(c.path)return c;if(c.subchapters&&c.subchapters.length>0){var a=x(c.subchapters);if(void 0!==a)return a}}}catch(o){n.e(o)}finally{n.f()}}),[]),g=o.a.useMemo((function(){return b(n||"",l)||x(l)}),[n,l,b,x]),m=o.a.useCallback((function(t){return t.reduce((function(t,e){return e.path&&e.subchapters?[].concat(Object(i.a)(t),[e],Object(i.a)(m(e.subchapters))):e.path?[].concat(Object(i.a)(t),[e]):e.subchapters?[].concat(Object(i.a)(t),Object(i.a)(m(e.subchapters))):t}),[])}),[]),k=o.a.useMemo((function(){return m(l)}),[l,m]),C=o.a.useMemo((function(){return k.findIndex((function(t){return t.path===(null===g||void 0===g?void 0:g.path)}))}),[g,k]),y=o.a.useMemo((function(){return C<k.length-1?k[C+1]:null}),[C,k]),I=o.a.useMemo((function(){return C>0?k[C-1]:null}),[C,k]);return Object(c.jsxs)(O.Provider,{value:{bookInfo:a,chapterInfo:g,chapters:l,next:y,prev:I},children:[Object(c.jsx)(f.a,{children:Object(c.jsx)("title",{children:a?"".concat(a.title," | S\xe1ch c\u1edd v\xe2y ti\u1ebfng Vi\u1ec7t"):"S\xe1ch c\u1edd v\xe2y ti\u1ebfng Vi\u1ec7t"})}),Object(c.jsx)("div",{className:"App",children:e?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(v,{}),Object(c.jsx)(j,{})]}):Object(c.jsx)("div",{className:"book-list",children:p.map((function(t){return Object(c.jsx)("div",{className:"book-cover",children:Object(c.jsxs)(u.b,{to:"/".concat(t.path),children:[Object(c.jsx)("img",{src:t.cover,alt:t.title,width:"200px"}),t.title]},t.path)},t.path)}))})})]})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,148)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),o(t),r(t)}))};Object(r.render)(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(d.a,{value:{revalidateOnFocus:!1,fetcher:function(t){return fetch(t).then((function(t){return t.text()}))}},children:Object(c.jsx)(u.a,{children:Object(c.jsx)(h.a,{path:"/:bookPath?/:chapterPath?",children:Object(c.jsx)(x,{})})})})}),document.getElementById("root")),g()},40:function(t){t.exports=JSON.parse('[{"title":"H\u01b0\u1edbng d\u1eabn ch\u01a1i c\u1edd V\xe2y","path":"huong-dan-choi-co-vay","cover":"/books/huong-dan-choi-co-vay/assets/cover-front.jpg"}]')},69:function(t,e,n){}},[[147,1,2]]]);
//# sourceMappingURL=main.c562b46f.chunk.js.map