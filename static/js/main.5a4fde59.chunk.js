(this["webpackJsonpgo-books"]=this["webpackJsonpgo-books"]||[]).push([[0],{147:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c(0),o=c.n(a),r=c(55),i=(c(69),c(19)),s=c(37),l=c(3),h=c(10),u=c(56),b=c.n(u),j=c(18),d=function(){var t=o.a.useContext(O),e=t.bookInfo,c=t.chapterInfo,a=t.next,r=t.prev,i=Object(j.b)("/books/".concat(null===e||void 0===e?void 0:e.path,"/").concat(null===c||void 0===c?void 0:c.path,".md")).data;return o.a.useEffect((function(){return window.scrollTo(0,0)}),[c]),Object(n.jsx)("div",{className:"content",children:i?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b.a,{allowDangerousHtml:!0,children:i}),Object(n.jsxs)("div",{className:"bottom_navigation",children:[r?Object(n.jsx)(h.b,{to:"/".concat(null===e||void 0===e?void 0:e.path,"/").concat(r.path),className:"bottom_navigation_prev",children:"\u2190 Ch\u01b0\u01a1ng tr\u01b0\u1edbc"}):Object(n.jsx)("span",{}),a?Object(n.jsx)(h.b,{to:"/".concat(null===e||void 0===e?void 0:e.path,"/").concat(a.path),className:"bottom_navigation_next",children:"Ch\u01b0\u01a1ng sau \u2192"}):Object(n.jsx)("span",{})]})]}):Object(n.jsx)("div",{style:{textAlign:"center",marginTop:"10vh"},children:Object(n.jsxs)("div",{className:"lds-ellipsis",children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})})})},v=c(40),p=function(){var t=Object(l.e)().chapterPath,e=o.a.useContext(O),c=e.bookInfo,a=e.chapters,r=o.a.useCallback((function(e){return Object(n.jsx)("li",{children:Object(n.jsxs)("div",{children:[e.path?Object(n.jsx)(h.b,{to:"/".concat(null===c||void 0===c?void 0:c.path,"/").concat(e.path),className:t===e.path?"active":"",children:e.title}):e.title,e.subchapters&&e.subchapters.length>0&&Object(n.jsx)("ul",{children:e.subchapters.map(r)})]})},e.path+e.title)}),[null===c||void 0===c?void 0:c.path,t]);return Object(n.jsxs)("div",{className:"sidebar",children:[Object(n.jsx)("h2",{children:null===c||void 0===c?void 0:c.title}),Object(n.jsx)("ul",{children:null===a||void 0===a?void 0:a.map(r)})]})},f=c(58),O=o.a.createContext({bookInfo:void 0,chapterInfo:void 0}),x=function(){var t=Object(l.e)(),e=t.bookPath,c=t.chapterPath,a=o.a.useMemo((function(){return v.find((function(t){return t.path===e}))}),[e]),r=Object(j.b)(e?"/books/".concat(e,"/chapters.json"):null,{fetcher:function(t){return fetch(t).then((function(t){return t.json()}))}}).data,u=void 0===r?[]:r;console.log(u);var b=o.a.useCallback((function(t,e){if(""!==t){var c,n=Object(s.a)(e);try{for(n.s();!(c=n.n()).done;){var a=c.value;if(a.path===t)return a;if(a.subchapters&&a.subchapters.length>0){var o=b(t,a.subchapters);if(void 0!==o)return o}}}catch(r){n.e(r)}finally{n.f()}}}),[]),x=o.a.useCallback((function(t){var e,c=Object(s.a)(t);try{for(c.s();!(e=c.n()).done;){var n=e.value;if(n.path)return n;if(n.subchapters&&n.subchapters.length>0){var a=x(n.subchapters);if(void 0!==a)return a}}}catch(o){c.e(o)}finally{c.f()}}),[]),g=o.a.useMemo((function(){return b(c||"",u)||x(u)}),[c,u,b,x]),m=o.a.useCallback((function(t){return t.reduce((function(t,e){return e.path&&e.subchapters?[].concat(Object(i.a)(t),[e],Object(i.a)(m(e.subchapters))):e.path?[].concat(Object(i.a)(t),[e]):e.subchapters?[].concat(Object(i.a)(t),Object(i.a)(m(e.subchapters))):t}),[])}),[]),k=o.a.useMemo((function(){return m(u)}),[u,m]),C=o.a.useMemo((function(){return k.findIndex((function(t){return t.path===(null===g||void 0===g?void 0:g.path)}))}),[g,k]),y=o.a.useMemo((function(){return C<k.length-1?k[C+1]:null}),[C,k]),N=o.a.useMemo((function(){return C>0?k[C-1]:null}),[C,k]);return Object(n.jsxs)(O.Provider,{value:{bookInfo:a,chapterInfo:g,chapters:u,next:y,prev:N},children:[Object(n.jsx)(f.a,{children:Object(n.jsx)("title",{children:a?"".concat(a.title," | S\xe1ch c\u1edd v\xe2y ti\u1ebfng Vi\u1ec7t"):"S\xe1ch c\u1edd v\xe2y ti\u1ebfng Vi\u1ec7t"})}),Object(n.jsx)("div",{className:"App",children:e?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(p,{}),Object(n.jsx)(d,{})]}):Object(n.jsx)("div",{className:"book-list",children:v.map((function(t){return Object(n.jsx)("div",{className:"book-cover",children:Object(n.jsxs)(h.b,{to:"/".concat(t.path),children:[Object(n.jsx)("img",{src:t.cover,alt:t.title,width:"200px"}),t.title]},t.path)},t.path)}))})})]})},g=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,148)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;c(t),n(t),a(t),o(t),r(t)}))};Object(r.render)(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(j.a,{value:{revalidateOnFocus:!1,fetcher:function(t){return fetch(t).then((function(t){return t.text()}))}},children:Object(n.jsx)(h.a,{children:Object(n.jsx)(l.a,{path:"/:bookPath?/:chapterPath?",children:Object(n.jsx)(x,{})})})})}),document.getElementById("root")),g()},40:function(t){t.exports=JSON.parse('[{"title":"H\u01b0\u1edbng d\u1eabn ch\u01a1i c\u1edd V\xe2y","path":"huong-dan-choi-co-vay","cover":"/books/huong-dan-choi-co-vay/assets/cover-front.jpg"}]')},69:function(t,e,c){}},[[147,1,2]]]);
//# sourceMappingURL=main.5a4fde59.chunk.js.map