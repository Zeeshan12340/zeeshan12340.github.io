(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[2,5,6],{135:function(e,t,a){"use strict";var r=a(4),s=a.n(r),c=a(0),i=a(30),n=a(6),o=a(2);const l=c.forwardRef(((e,t)=>{let{as:a,bsPrefix:r,variant:c="primary",size:l,active:d=!1,disabled:b=!1,className:u,...p}=e;const j=Object(n.c)(r,"btn"),[m,{tagName:h}]=Object(i.b)({tagName:a,disabled:b,...p}),f=h;return Object(o.jsx)(f,{...m,...p,ref:t,disabled:b,className:s()(u,j,d&&"active",c&&"".concat(j,"-").concat(c),l&&"".concat(j,"-").concat(l),p.href&&b&&"disabled")})}));l.displayName="Button",t.a=l},136:function(e){e.exports=JSON.parse('{"projects":[{"image":"images/projects/obscure.png","title":"Obscure CTF","bodyText":"- A Capture the Flag style vulnerable machine.\\n -  Involves a Web CVE in Odoo, docker escape and ret2libc attack.\\n - Published on TryHackMe.\\n - Multiple writeups/walkthroughs.\\n","links":[{"text":"Writeup","href":"https://github.com/Zeeshan12340/writeups/blob/main/obscure.md"},{"text":"link","href":"https://tryhackme.com/room/obscured"}],"tags":["CTF","Web","Pwn"]},{"image":"images/projects/pwncollege.png","title":"PyPwnCollege","bodyText":"- A Python library and CLI(command line interface)\\n - Used to interact with pwncollege and also to automate.\\n - Published on pypi.\\n -  Open Source at Github\\n","links":[{"text":"PyPi","href":"https://pypi.org/project/PyPwnCollege/"},{"text":"Github","href":"https://github.com/zeeshan12340/pypwncollege"}],"tags":["python","pip","pwncollege"]},{"image":"images/projects/revworks.png","title":"RevWorks","bodyText":"- Ruby on Rails Web Application with some basic functionality.\\n - Has a Web Race condition and used in a CTF I hosted. \\n - Has Docker image and live heroku demo.\\n","links":[{"text":"demo","href":"https://revworks-4e7c9d83d182.herokuapp.com/"},{"text":"Github","href":"https://github.com/zeeshan12340/revworks"},{"text":"thm room","href":"https://tryhackme.com/jr/revworks"}],"tags":["ruby","rails","CTF","webapp"]},{"image":"images/projects/rust.png","title":"RustC2","bodyText":"- Proof of Concept Command and Control Framework written in Rust\\n - Has basic features such as reverse shell handling and management, file upload/download, portscan. \\n - Open Source at Github","links":[{"text":"Github","href":"https://github.com/zeeshan12340/rustc2"}],"tags":["rust","C2"]},{"image":"images/projects/twitter.png","title":"Twitter-Clone","bodyText":"- Simple Twitter clone with only posts/profile/like/reply functionality.\\n - Google oauth2 is setup allowing direct sign-in using google account\\n- MongoDB database is used along with S3 bucket for images.\\n - Open Source at Github","links":[{"text":"live","href":"https://twitter-clone-five-psi-76.vercel.app/"},{"text":"Github","href":"https://github.com/zeeshan12340/twitter-clone"}],"tags":["rust","C2"]}]}')},71:function(e,t,a){"use strict";a.r(t);a(0),a(73);var r=a(2);t.default=function(e){const{title:t}=e;return Object(r.jsx)("div",{className:"header",children:t})}},74:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a(4),c=a.n(s),i=a(6),n=a(2);const o=r.forwardRef(((e,t)=>{let{className:a,bsPrefix:r,as:s="div",...o}=e;return r=Object(i.c)(r,"card-body"),Object(n.jsx)(s,{ref:t,className:c()(a,r),...o})}));o.displayName="CardBody";var l=o;const d=r.forwardRef(((e,t)=>{let{className:a,bsPrefix:r,as:s="div",...o}=e;return r=Object(i.c)(r,"card-footer"),Object(n.jsx)(s,{ref:t,className:c()(a,r),...o})}));d.displayName="CardFooter";var b=d,u=a(51);const p=r.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,as:o="div",...l}=e;const d=Object(i.c)(a,"card-header"),b=Object(r.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return Object(n.jsx)(u.a.Provider,{value:b,children:Object(n.jsx)(o,{ref:t,...l,className:c()(s,d)})})}));p.displayName="CardHeader";var j=p;const m=r.forwardRef(((e,t)=>{let{bsPrefix:a,className:r,variant:s,as:o="img",...l}=e;const d=Object(i.c)(a,"card-img");return Object(n.jsx)(o,{ref:t,className:c()(s?"".concat(d,"-").concat(s):d,r),...l})}));m.displayName="CardImg";var h=m;const f=r.forwardRef(((e,t)=>{let{className:a,bsPrefix:r,as:s="div",...o}=e;return r=Object(i.c)(r,"card-img-overlay"),Object(n.jsx)(s,{ref:t,className:c()(a,r),...o})}));f.displayName="CardImgOverlay";var g=f;const x=r.forwardRef(((e,t)=>{let{className:a,bsPrefix:r,as:s="a",...o}=e;return r=Object(i.c)(r,"card-link"),Object(n.jsx)(s,{ref:t,className:c()(a,r),...o})}));x.displayName="CardLink";var y=x,O=a(49);const v=Object(O.a)("h6"),w=r.forwardRef(((e,t)=>{let{className:a,bsPrefix:r,as:s=v,...o}=e;return r=Object(i.c)(r,"card-subtitle"),Object(n.jsx)(s,{ref:t,className:c()(a,r),...o})}));w.displayName="CardSubtitle";var N=w;const k=r.forwardRef(((e,t)=>{let{className:a,bsPrefix:r,as:s="p",...o}=e;return r=Object(i.c)(r,"card-text"),Object(n.jsx)(s,{ref:t,className:c()(a,r),...o})}));k.displayName="CardText";var C=k;const S=Object(O.a)("h5"),P=r.forwardRef(((e,t)=>{let{className:a,bsPrefix:r,as:s=S,...o}=e;return r=Object(i.c)(r,"card-title"),Object(n.jsx)(s,{ref:t,className:c()(a,r),...o})}));P.displayName="CardTitle";var T=P;const R=r.forwardRef(((e,t)=>{let{bsPrefix:a,className:r,bg:s,text:o,border:d,body:b=!1,children:u,as:p="div",...j}=e;const m=Object(i.c)(a,"card");return Object(n.jsx)(p,{ref:t,...j,className:c()(r,m,s&&"bg-".concat(s),o&&"text-".concat(o),d&&"border-".concat(d)),children:b?Object(n.jsx)(l,{children:u}):u})}));R.displayName="Card";var B=Object.assign(R,{Img:h,Title:T,Subtitle:N,Body:l,Link:y,Text:C,Header:j,Footer:b,ImgOverlay:g}),F=a(135);const G=r.forwardRef(((e,t)=>{let{bsPrefix:a,bg:r="primary",pill:s=!1,text:o,className:l,as:d="span",...b}=e;const u=Object(i.c)(a,"badge");return Object(n.jsx)(d,{ref:t,...b,className:c()(l,u,s&&"rounded-pill",o&&"text-".concat(o),r&&"bg-".concat(r))})}));G.displayName="Badge";var I=G,W=a(20),H=a(147);const z={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}};t.default=e=>{var t;const a=Object(r.useContext)(W.a),{project:s}=e;return Object(n.jsx)("div",{children:Object(n.jsxs)(B,{style:{borderRadius:10,backgroundColor:a.cardBackground,borderColor:a.cardBorderColor,borderWidth:3,width:350,marginLeft:100,marginRight:100,marginBottom:50},text:a.bsSecondaryVariant,children:[Object(n.jsx)(B.Img,{variant:"top",src:null===s||void 0===s?void 0:s.image,style:{height:200}}),Object(n.jsxs)(B.Body,{children:[Object(n.jsx)(B.Title,{style:z.cardTitleStyle,children:s.title}),Object(n.jsx)(B.Text,{style:z.cardTextStyle,as:"div",children:Object(n.jsx)(H.a,{children:s.bodyText})})]}),Object(n.jsx)(B.Body,{children:null===s||void 0===s||null===(t=s.links)||void 0===t?void 0:t.map((e=>Object(n.jsx)(F.a,{style:z.buttonStyle,variant:"outline-"+a.bsSecondaryVariant,onClick:()=>window.open(e.href,"_blank"),children:e.text},e.href)))}),s.tags&&Object(n.jsx)(B.Footer,{style:{backgroundColor:a.cardFooterBackground},children:s.tags.map((e=>Object(n.jsx)(I,{pill:!0,bg:a.bsSecondaryVariant,text:a.bsPrimaryVariant,style:z.badgeStyle,children:e},e)))})]})})}},76:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a(135),c=a(20),i=a(50),n=a(71),o=a(74),l=a(25),d=a(136),b=a(2);const u={rowStyle:{justifyContent:"center"},showMoreStyle:{margin:25}};t.default=e=>{var t;const a=Object(r.useContext)(c.a),{header:p}=e,[j,m]=Object(r.useState)(null),[h,f]=Object(r.useState)(!1);Object(r.useEffect)((()=>{m(d)}),[]);const g=h&&j?j.length:6;return Object(b.jsxs)("div",{children:[Object(b.jsx)(n.default,{title:p}),j?Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"projects-container",children:null===(t=j.projects)||void 0===t?void 0:t.slice(0,g).map((e=>Object(b.jsx)(i.a,{children:Object(b.jsx)(o.default,{project:e})},e.title)))}),Object(b.jsx)("div",{children:!h&&Object(b.jsx)(s.a,{style:u.showMoreStyle,variant:a.bsSecondaryVariant,onClick:()=>f(!0),children:"show more"})})]}):Object(b.jsx)(l.default,{})]})}}}]);
//# sourceMappingURL=2.a5ae801f.chunk.js.map