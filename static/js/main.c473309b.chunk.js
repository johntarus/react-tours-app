(this.webpackJsonptours=this.webpackJsonptours||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(6),i=c.n(s),a=c(4),o=c.n(a),j=c(7),u=c(2),l=(c(13),c(5)),b=c(0),d=function(e){var t=e.id,c=e.image,r=e.info,s=e.name,i=e.price,a=e.removeTour,o=Object(n.useState)(!1),j=Object(u.a)(o,2),l=j[0],d=j[1];return Object(b.jsxs)("article",{className:"single-tour",children:[Object(b.jsx)("img",{src:c,alt:s}),Object(b.jsxs)("footer",{children:[Object(b.jsxs)("div",{className:"tour-info",children:[Object(b.jsx)("h4",{children:s}),Object(b.jsxs)("h4",{className:"tour-price",children:["$",i]})]}),Object(b.jsxs)("p",{children:[l?r:"".concat(r.substring(0,200),"..."),Object(b.jsx)("button",{onClick:function(){return d(!l)},children:l?"show less":"  read more"})]}),Object(b.jsx)("button",{className:"delete-btn",onClick:function(){return a(t)},children:"not interested"})]})]})},O=function(e){var t=e.tours,c=e.removeTour;return Object(b.jsxs)("section",{children:[Object(b.jsxs)("div",{className:"title",children:[Object(b.jsx)("h2",{children:"our tours"}),Object(b.jsx)("div",{className:"underline"})]}),Object(b.jsx)("div",{children:t.map((function(e){return Object(b.jsx)(d,Object(l.a)(Object(l.a)({},e),{},{removeTour:c}),e.id)}))})]})},h=function(){return Object(b.jsx)("div",{className:"loading",children:Object(b.jsx)("h1",{children:"loading..."})})};var x=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),i=Object(u.a)(s,2),a=i[0],l=i[1],d=function(){var e=Object(j.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,fetch("https://course-api.com/react-tours-project");case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,r(!1),l(c),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),r(!1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){d()}),[]),c?Object(b.jsx)("main",{children:Object(b.jsx)(h,{loading:c})}):Object(b.jsx)("main",{children:Object(b.jsx)(O,{tours:a})})};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c473309b.chunk.js.map