(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[5],{135:function(e,a,t){"use strict";var r=t(4),c=t.n(r),s=t(0),d=t(30),l=t(6),i=t(2);const o=s.forwardRef(((e,a)=>{let{as:t,bsPrefix:r,variant:s="primary",size:o,active:n=!1,disabled:b=!1,className:j,...f}=e;const m=Object(l.c)(r,"btn"),[x,{tagName:O}]=Object(d.b)({tagName:t,disabled:b,...f}),y=O;return Object(i.jsx)(y,{...x,...f,ref:a,disabled:b,className:c()(j,m,n&&"active",s&&"".concat(m,"-").concat(s),o&&"".concat(m,"-").concat(o),f.href&&b&&"disabled")})}));o.displayName="Button",a.a=o},74:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t(4),s=t.n(c),d=t(6),l=t(2);const i=r.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:c="div",...i}=e;return r=Object(d.c)(r,"card-body"),Object(l.jsx)(c,{ref:a,className:s()(t,r),...i})}));i.displayName="CardBody";var o=i;const n=r.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:c="div",...i}=e;return r=Object(d.c)(r,"card-footer"),Object(l.jsx)(c,{ref:a,className:s()(t,r),...i})}));n.displayName="CardFooter";var b=n,j=t(51);const f=r.forwardRef(((e,a)=>{let{bsPrefix:t,className:c,as:i="div",...o}=e;const n=Object(d.c)(t,"card-header"),b=Object(r.useMemo)((()=>({cardHeaderBsPrefix:n})),[n]);return Object(l.jsx)(j.a.Provider,{value:b,children:Object(l.jsx)(i,{ref:a,...o,className:s()(c,n)})})}));f.displayName="CardHeader";var m=f;const x=r.forwardRef(((e,a)=>{let{bsPrefix:t,className:r,variant:c,as:i="img",...o}=e;const n=Object(d.c)(t,"card-img");return Object(l.jsx)(i,{ref:a,className:s()(c?"".concat(n,"-").concat(c):n,r),...o})}));x.displayName="CardImg";var O=x;const y=r.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:c="div",...i}=e;return r=Object(d.c)(r,"card-img-overlay"),Object(l.jsx)(c,{ref:a,className:s()(t,r),...i})}));y.displayName="CardImgOverlay";var p=y;const g=r.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:c="a",...i}=e;return r=Object(d.c)(r,"card-link"),Object(l.jsx)(c,{ref:a,className:s()(t,r),...i})}));g.displayName="CardLink";var u=g,N=t(49);const v=Object(N.a)("h6"),h=r.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:c=v,...i}=e;return r=Object(d.c)(r,"card-subtitle"),Object(l.jsx)(c,{ref:a,className:s()(t,r),...i})}));h.displayName="CardSubtitle";var w=h;const C=r.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:c="p",...i}=e;return r=Object(d.c)(r,"card-text"),Object(l.jsx)(c,{ref:a,className:s()(t,r),...i})}));C.displayName="CardText";var P=C;const S=Object(N.a)("h5"),R=r.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:c=S,...i}=e;return r=Object(d.c)(r,"card-title"),Object(l.jsx)(c,{ref:a,className:s()(t,r),...i})}));R.displayName="CardTitle";var k=R;const T=r.forwardRef(((e,a)=>{let{bsPrefix:t,className:r,bg:c,text:i,border:n,body:b=!1,children:j,as:f="div",...m}=e;const x=Object(d.c)(t,"card");return Object(l.jsx)(f,{ref:a,...m,className:s()(r,x,c&&"bg-".concat(c),i&&"text-".concat(i),n&&"border-".concat(n)),children:b?Object(l.jsx)(o,{children:j}):j})}));T.displayName="Card";var B=Object.assign(T,{Img:O,Title:k,Subtitle:w,Body:o,Link:u,Text:P,Header:m,Footer:b,ImgOverlay:p}),I=t(135);const F=r.forwardRef(((e,a)=>{let{bsPrefix:t,bg:r="primary",pill:c=!1,text:i,className:o,as:n="span",...b}=e;const j=Object(d.c)(t,"badge");return Object(l.jsx)(n,{ref:a,...b,className:s()(o,j,c&&"rounded-pill",i&&"text-".concat(i),r&&"bg-".concat(r))})}));F.displayName="Badge";var V=F,H=t(20),L=t(147);const z={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}};a.default=e=>{var a;const t=Object(r.useContext)(H.a),{project:c}=e;return Object(l.jsx)("div",{children:Object(l.jsxs)(B,{style:{borderRadius:10,backgroundColor:t.cardBackground,borderColor:t.cardBorderColor,borderWidth:3,width:350,margin:100},text:t.bsSecondaryVariant,children:[Object(l.jsx)(B.Img,{variant:"top",src:null===c||void 0===c?void 0:c.image,style:{height:200}}),Object(l.jsxs)(B.Body,{children:[Object(l.jsx)(B.Title,{style:z.cardTitleStyle,children:c.title}),Object(l.jsx)(B.Text,{style:z.cardTextStyle,as:"div",children:Object(l.jsx)(L.a,{children:c.bodyText})})]}),Object(l.jsx)(B.Body,{children:null===c||void 0===c||null===(a=c.links)||void 0===a?void 0:a.map((e=>Object(l.jsx)(I.a,{style:z.buttonStyle,variant:"outline-"+t.bsSecondaryVariant,onClick:()=>window.open(e.href,"_blank"),children:e.text},e.href)))}),c.tags&&Object(l.jsx)(B.Footer,{style:{backgroundColor:t.cardFooterBackground},children:c.tags.map((e=>Object(l.jsx)(V,{pill:!0,bg:t.bsSecondaryVariant,text:t.bsPrimaryVariant,style:z.badgeStyle,children:e},e)))})]})})}}}]);
//# sourceMappingURL=5.6b482ac6.chunk.js.map