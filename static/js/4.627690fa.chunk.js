(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[4,5],{76:function(t,e,i){"use strict";i.r(e);i(0),i(78);var c=i(2);e.default=function(t){const{title:e}=t;return Object(c.jsx)("div",{className:"header",children:e})}},83:function(t,e,i){"use strict";i.r(e);var c=i(0),n=i(129),s=i(56),l=i(128),r=i(76),a=i(21),j=i(28),o=i(2);const h={iconStyle:{height:75,width:75,margin:10,marginBottom:0},introTextContainer:{whiteSpace:"pre-wrap"}};e.default=function(t){var e;const{header:i}=t,[d,b]=Object(c.useState)(null);return Object(c.useEffect)((()=>{fetch(a.a.skills,{method:"GET"}).then((t=>t.json())).then((t=>b(t))).catch((t=>t))}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(r.default,{title:i}),d?Object(o.jsx)(s.a,{children:Object(o.jsx)("div",{className:"section-content-container",children:Object(o.jsxs)(l.a,{children:[(p=d.intro,Object(o.jsx)("h4",{style:h.introTextContainer,children:Object(o.jsx)(n.a,{children:p})})),null===(e=d.skills)||void 0===e?void 0:e.map((t=>Object(o.jsxs)("div",{children:[Object(o.jsx)("br",{}),Object(o.jsx)("h3",{children:t.title}),t.items.map((t=>Object(o.jsxs)("div",{style:{display:"inline-block"},children:[Object(o.jsx)("img",{style:h.iconStyle,src:t.icon,alt:t.title}),Object(o.jsx)("p",{children:t.title})]},t.title)))]},t.title)))]})})}):Object(o.jsx)(j.default,{})]});var p}}}]);
//# sourceMappingURL=4.627690fa.chunk.js.map