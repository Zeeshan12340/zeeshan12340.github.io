(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[3,8],{139:function(e,t,r){"use strict";var n=r(4),a=r.n(n),c=r(0),o=r(6),i=r(2);const s=c.forwardRef(((e,t)=>{let{bsPrefix:r,bg:n="primary",pill:c=!1,text:s,className:l,as:u="span",...f}=e;const d=Object(o.c)(r,"badge");return Object(i.jsx)(u,{ref:t,...f,className:a()(l,d,c&&"rounded-pill",s&&"text-".concat(s),n&&"bg-".concat(n))})}));s.displayName="Badge",t.a=s},140:function(e,t,r){"use strict";var n=r(4),a=r.n(n),c=r(0),o=r(6),i=r(2);const s=c.forwardRef(((e,t)=>{let{className:r,bsPrefix:n,as:c="div",...s}=e;return n=Object(o.c)(n,"card-body"),Object(i.jsx)(c,{ref:t,className:a()(r,n),...s})}));s.displayName="CardBody";var l=s;const u=c.forwardRef(((e,t)=>{let{className:r,bsPrefix:n,as:c="div",...s}=e;return n=Object(o.c)(n,"card-footer"),Object(i.jsx)(c,{ref:t,className:a()(r,n),...s})}));u.displayName="CardFooter";var f=u,d=r(50);const b=c.forwardRef(((e,t)=>{let{bsPrefix:r,className:n,as:s="div",...l}=e;const u=Object(o.c)(r,"card-header"),f=Object(c.useMemo)((()=>({cardHeaderBsPrefix:u})),[u]);return Object(i.jsx)(d.a.Provider,{value:f,children:Object(i.jsx)(s,{ref:t,...l,className:a()(n,u)})})}));b.displayName="CardHeader";var p=b;const m=c.forwardRef(((e,t)=>{let{bsPrefix:r,className:n,variant:c,as:s="img",...l}=e;const u=Object(o.c)(r,"card-img");return Object(i.jsx)(s,{ref:t,className:a()(c?"".concat(u,"-").concat(c):u,n),...l})}));m.displayName="CardImg";var h=m;const j=c.forwardRef(((e,t)=>{let{className:r,bsPrefix:n,as:c="div",...s}=e;return n=Object(o.c)(n,"card-img-overlay"),Object(i.jsx)(c,{ref:t,className:a()(r,n),...s})}));j.displayName="CardImgOverlay";var y=j;const g=c.forwardRef(((e,t)=>{let{className:r,bsPrefix:n,as:c="a",...s}=e;return n=Object(o.c)(n,"card-link"),Object(i.jsx)(c,{ref:t,className:a()(r,n),...s})}));g.displayName="CardLink";var v=g,O=r(49);const x=Object(O.a)("h6"),P=c.forwardRef(((e,t)=>{let{className:r,bsPrefix:n,as:c=x,...s}=e;return n=Object(o.c)(n,"card-subtitle"),Object(i.jsx)(c,{ref:t,className:a()(r,n),...s})}));P.displayName="CardSubtitle";var R=P;const N=c.forwardRef(((e,t)=>{let{className:r,bsPrefix:n,as:c="p",...s}=e;return n=Object(o.c)(n,"card-text"),Object(i.jsx)(c,{ref:t,className:a()(r,n),...s})}));N.displayName="CardText";var w=N;const C=Object(O.a)("h5"),S=c.forwardRef(((e,t)=>{let{className:r,bsPrefix:n,as:c=C,...s}=e;return n=Object(o.c)(n,"card-title"),Object(i.jsx)(c,{ref:t,className:a()(r,n),...s})}));S.displayName="CardTitle";var k=S;const T=c.forwardRef(((e,t)=>{let{bsPrefix:r,className:n,bg:c,text:s,border:u,body:f=!1,children:d,as:b="div",...p}=e;const m=Object(o.c)(r,"card");return Object(i.jsx)(b,{ref:t,...p,className:a()(n,m,c&&"bg-".concat(c),s&&"text-".concat(s),u&&"border-".concat(u)),children:f?Object(i.jsx)(l,{children:d}):d})}));T.displayName="Card";t.a=Object.assign(T,{Img:h,Title:k,Subtitle:R,Body:l,Link:v,Text:w,Header:p,Footer:f,ImgOverlay:y})},460:function(e){e.exports=JSON.parse('{"posts":[{"image":"images/blog/pwncollege.jpeg","title":"How I pwned pwn.college","bodyText":"This post is about the time I found a Cross Site Scripting vulnerability in pwn.college, going into the motivations and how I discovered it along with the remediation.","tags":["XSS","CTF","pwn.college"]},{"image":"images/projects/obscure.png","title":"Writeup for my machine: Obscured","bodyText":"This post is a writeup for the machine Obscured on tryhackme, which was created by me. It was the first fully fledged machine I created and I learned a lot from the process.","tags":["Web","CTF","TryHackMe"]}]}')},461:function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var a=r(7),c=n(r(0)),o=r(10);r(11),r(53);var i=n(r(13));function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){e.prototype=Object.create(t.prototype),u(e.prototype.constructor=e,t)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],0<=t.indexOf(r)||(a[r]=e[r]);return a}var d=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).history=o.createBrowserHistory(t.props),t}return l(t,e),t.prototype.render=function(){return c.createElement(a.Router,{history:this.history,children:this.props.children})},t}(c.Component),b=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).history=o.createHashHistory(t.props),t}return l(t,e),t.prototype.render=function(){return c.createElement(a.Router,{history:this.history,children:this.props.children})},t}(c.Component),p=function(e,t){return"function"==typeof e?e(t):e},m=function(e,t){return"string"==typeof e?o.createLocation(e,null,null,t):e},h=function(e){return e},j=c.forwardRef;void 0===j&&(j=h);var y=j((function(e,t){var r=e.innerRef,n=e.navigate,a=e.onClick,o=f(e,["innerRef","navigate","onClick"]),i=o.target,l=s({},o,{onClick:function(t){try{a&&a(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||i&&"_self"!==i||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t)||(t.preventDefault(),n())}});return l.ref=h!==j&&t||r,c.createElement("a",l)})),g=j((function(e,t){var r=e.component,n=void 0===r?y:r,l=e.replace,u=e.to,d=e.innerRef,b=f(e,["component","replace","to","innerRef"]);return c.createElement(a.__RouterContext.Consumer,null,(function(e){e||i(!1);var r=e.history,a=m(p(u,e.location),e.location),f=a?r.createHref(a):"",y=s({},b,{href:f,navigate:function(){var t=p(u,e.location),n=o.createPath(e.location)===o.createPath(m(t));(l||n?r.replace:r.push)(t)}});return h!==j?y.ref=t||d:y.innerRef=d,c.createElement(n,y)}))})),v=function(e){return e},O=c.forwardRef;void 0===O&&(O=v);var x=O((function(e,t){var r=e["aria-current"],n=void 0===r?"page":r,o=e.activeClassName,l=void 0===o?"active":o,u=e.activeStyle,d=e.className,b=e.exact,h=e.isActive,j=e.location,y=e.sensitive,x=e.strict,P=e.style,R=e.to,N=e.innerRef,w=f(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return c.createElement(a.__RouterContext.Consumer,null,(function(e){e||i(!1);var r=j||e.location,o=m(p(R,r),r),f=o.pathname,C=f&&f.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),S=C?a.matchPath(r.pathname,{path:C,exact:b,sensitive:y,strict:x}):null,k=!!(h?h(S,r):S),T="function"==typeof d?d(k):d,H="function"==typeof P?P(k):P;k&&(T=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return e})).join(" ")}(T,l),H=s({},H,u));var B=s({"aria-current":k&&n||null,className:T,style:H,to:o},w);return v!==O?B.ref=t||N:B.innerRef=N,c.createElement(g,B)}))}));Object.defineProperty(t,"MemoryRouter",{enumerable:!0,get:function(){return a.MemoryRouter}}),Object.defineProperty(t,"Prompt",{enumerable:!0,get:function(){return a.Prompt}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return a.Redirect}}),Object.defineProperty(t,"Route",{enumerable:!0,get:function(){return a.Route}}),Object.defineProperty(t,"Router",{enumerable:!0,get:function(){return a.Router}}),Object.defineProperty(t,"StaticRouter",{enumerable:!0,get:function(){return a.StaticRouter}}),Object.defineProperty(t,"Switch",{enumerable:!0,get:function(){return a.Switch}}),Object.defineProperty(t,"generatePath",{enumerable:!0,get:function(){return a.generatePath}}),Object.defineProperty(t,"matchPath",{enumerable:!0,get:function(){return a.matchPath}}),Object.defineProperty(t,"useHistory",{enumerable:!0,get:function(){return a.useHistory}}),Object.defineProperty(t,"useLocation",{enumerable:!0,get:function(){return a.useLocation}}),Object.defineProperty(t,"useParams",{enumerable:!0,get:function(){return a.useParams}}),Object.defineProperty(t,"useRouteMatch",{enumerable:!0,get:function(){return a.useRouteMatch}}),Object.defineProperty(t,"withRouter",{enumerable:!0,get:function(){return a.withRouter}}),t.BrowserRouter=d,t.HashRouter=b,t.Link=g,t.NavLink=x},53:function(e,t,r){"use strict";r.r(t);t.default=function(e,t){}},74:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(140),c=r(139),o=r(20),i=r(478),s=r(2);const l={cardTitleStyle:{fontSize:24,fontWeight:700,marginBottom:10},buttonStyle:{margin:5}};t.default=e=>{const t=Object(n.useContext)(o.a),{post:r}=e;return Object(s.jsx)("div",{children:Object(s.jsxs)(a.a,{style:{borderRadius:10,backgroundColor:t.cardBackground,borderColor:t.cardBorderColor,width:500,height:325,marginLeft:50,marginRight:50,marginBottom:50},text:t.bsSecondaryVariant,children:[Object(s.jsx)(a.a.Img,{variant:"top",src:null===r||void 0===r?void 0:r.image,style:{height:175}}),Object(s.jsxs)(a.a.Body,{style:{minHeight:"150px"},children:[Object(s.jsx)(a.a.Title,{style:l.cardTitleStyle,children:r.title}),Object(s.jsx)(a.a.Text,{style:{textAlign:"left"},as:"div",children:Object(s.jsx)(i.a,{children:r.bodyText})})]}),r.tags&&Object(s.jsx)(a.a.Footer,{style:{backgroundColor:t.cardFooterBackground},children:r.tags.map((e=>Object(s.jsx)(c.a,{pill:!0,bg:t.bsSecondaryVariant,text:t.bsPrimaryVariant,style:{marginRight:5,marginLeft:5},children:e},e)))})]})})}},77:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return f}));var n=r(0),a=r(74),c=r(51),o=r(42),i=r(52),s=(r(73),r(461)),l=r(460),u=r(2);function f(){const[e,t]=Object(n.useState)(!1);return Object(n.useEffect)((()=>{e||Object(o.b)((async e=>{await Object(i.a)(e)})).then((()=>{t(!0)}))}),[e]),Object(u.jsxs)("div",{children:[e&&Object(u.jsx)(o.a,{options:c}),Object(u.jsx)("h1",{className:"mt-4 mb-6 header",children:"Posts"}),Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"posts-container",children:l.posts.map(((e,t)=>Object(u.jsx)(s.Link,{to:"/posts/".concat(t+1),style:{textDecoration:"none"},children:Object(u.jsx)(a.default,{post:e},t)},t)))})})]})}}}]);
//# sourceMappingURL=3.b6f3ea19.chunk.js.map