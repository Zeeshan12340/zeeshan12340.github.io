(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[2,5],{144:function(e,t,o){},76:function(e,t,o){"use strict";o.r(t);o(0),o(78);var n=o(2);t.default=function(e){const{title:t}=e;return Object(n.jsx)("div",{className:"header",children:t})}},81:function(e,t,o){"use strict";o.r(t);var n=o(0),i=o(143),c=o(128),r=o(56),d=o(22),l=o(21),a=o(76),s=o(28),h=(o(144),o(2));t.default=function(e){const t=Object(n.useContext)(d.a),{header:o}=e,[u,j]=Object(n.useState)(null),[v,w]=Object(n.useState)("50vw"),[b,m]=Object(n.useState)("VERTICAL_ALTERNATING");return Object(n.useEffect)((()=>{var e,t,o,n,i,c;fetch(l.a.education,{method:"GET"}).then((e=>e.json())).then((e=>j(e))).catch((e=>e)),(null===(e=window)||void 0===e?void 0:e.innerWidth)<576&&m("VERTICAL"),(null===(t=window)||void 0===t?void 0:t.innerWidth)<576||(null===(o=window)||void 0===o?void 0:o.innerWidth)>=576&&(null===(n=window)||void 0===n?void 0:n.innerWidth)<768?w("90vw"):(null===(i=window)||void 0===i?void 0:i.innerWidth)>=768&&(null===(c=window)||void 0===c?void 0:c.innerWidth)<1024?w("75vw"):w("50vw")}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(a.default,{title:o}),u?Object(h.jsx)(r.a,{children:Object(h.jsx)("div",{style:{width:v},className:"section-content-container",children:Object(h.jsx)(c.a,{children:Object(h.jsx)(i.a,{hideControls:!0,allowDynamicUpdate:!0,useReadMore:!1,items:u.education,cardHeight:250,mode:b,theme:{primary:t.accentColor,secondary:t.accentColor,cardBgColor:t.chronoTheme.cardBgColor,cardForeColor:t.chronoTheme.cardForeColor,titleColor:t.chronoTheme.titleColor},children:Object(h.jsx)("div",{className:"chrono-icons",children:u.education.map((e=>e.icon?Object(h.jsx)("img",{src:e.icon.src,alt:e.icon.alt},e.icon.src):null))})})})})}):Object(h.jsx)(s.default,{})]})}}}]);
//# sourceMappingURL=2.16cf5ce6.chunk.js.map