(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[1,5],{141:function(t,e,c){"use strict";var n=c(5),a=c.n(n),s=c(0),o=c(7),r=c(2);const l=s.forwardRef(((t,e)=>{const[{className:c,...n},{as:s="div",bsPrefix:l,spans:i}]=function(t){let{as:e,bsPrefix:c,className:n,...s}=t;c=Object(o.c)(c,"col");const r=Object(o.a)(),l=Object(o.b)(),i=[],f=[];return r.forEach((t=>{const e=s[t];let n,a,o;delete s[t],"object"===typeof e&&null!=e?({span:n,offset:a,order:o}=e):n=e;const r=t!==l?"-".concat(t):"";n&&i.push(!0===n?"".concat(c).concat(r):"".concat(c).concat(r,"-").concat(n)),null!=o&&f.push("order".concat(r,"-").concat(o)),null!=a&&f.push("offset".concat(r,"-").concat(a))})),[{...s,className:a()(n,...i,...f)},{as:e,bsPrefix:c,spans:i}]}(t);return Object(r.jsx)(s,{...n,ref:e,className:a()(c,!i.length&&l)})}));l.displayName="Col",e.a=l},142:function(t,e,c){"use strict";var n=c(5),a=c.n(n),s=c(0),o=c(7),r=c(2);const l=s.forwardRef(((t,e)=>{let{bsPrefix:c,className:n,as:s="div",...l}=t;const i=Object(o.c)(c,"row"),f=Object(o.a)(),j=Object(o.b)(),u="".concat(i,"-cols"),b=[];return f.forEach((t=>{const e=l[t];let c;delete l[t],null!=e&&"object"===typeof e?({cols:c}=e):c=e;const n=t!==j?"-".concat(t):"";null!=c&&b.push("".concat(u).concat(n,"-").concat(c))})),Object(r.jsx)(s,{ref:e,...l,className:a()(n,i,...b)})}));l.displayName="Row",e.a=l},76:function(t,e,c){"use strict";c.r(e);c(0),c(78);var n=c(2);e.default=function(t){const{title:e}=t;return Object(n.jsx)("div",{className:"header",children:e})}},80:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c(129),s=c(128),o=c(142),r=c(141),l=c(56),i=c(76),f=c(21),j=c(28),u=c(2);const b={introTextContainer:{margin:10,flexDirection:"column",whiteSpace:"pre-wrap",textAlign:"left",fontSize:"1.2em",fontWeight:500},introImageContainer:{margin:10,justifyContent:"center",alignItems:"center",display:"flex"},imageStyle:{margin:10,width:"500px",display:"flex"}};e.default=function(t){const{header:e}=t,[c,d]=Object(n.useState)(null);return Object(n.useEffect)((()=>{fetch(f.a.about,{method:"GET"}).then((t=>t.json())).then((t=>d(t))).catch((t=>t))}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(i.default,{title:e}),Object(u.jsx)("div",{className:"section-content-container",children:Object(u.jsx)(s.a,{children:c?Object(u.jsx)(l.a,{children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(r.a,{style:b.introTextContainer,children:(h=c.about,Object(u.jsx)(a.a,{children:h}))}),Object(u.jsx)(r.a,{style:b.introImageContainer,children:Object(u.jsx)("img",{src:null===c||void 0===c?void 0:c.imageSource,alt:"profile",style:b.imageStyle})})]})}):Object(u.jsx)(j.default,{})})})]});var h}}}]);
//# sourceMappingURL=1.4041138d.chunk.js.map