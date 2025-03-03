"use strict";(self.webpackChunkportfolio_app=self.webpackChunkportfolio_app||[]).push([[69,621,660],{3069:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var r=a(5043),s=a(4282),o=a(9),i=a(8190),n=a(7660),l=a(8621),d=a(4331);const c=JSON.parse('{"projects":[{"image":"images/projects/obscure.png","title":"Obscure CTF","bodyText":"- A Capture the Flag style vulnerable machine.\\n -  Involves a Web CVE in Odoo, docker escape and ret2libc attack.\\n - Published on TryHackMe.\\n - Multiple writeups/walkthroughs.\\n","links":[{"text":"Writeup","href":"https://github.com/Zeeshan12340/writeups/blob/main/obscure.md"},{"text":"link","href":"https://tryhackme.com/room/obscured"}],"tags":["CTF","Web","Pwn"]},{"image":"images/projects/pwncollege.png","title":"PyPwnCollege","bodyText":"- A Python library and CLI(command line interface)\\n - Used to interact with pwncollege and also to automate.\\n - Published on pypi.\\n -  Open Source at Github\\n","links":[{"text":"PyPi","href":"https://pypi.org/project/PyPwnCollege/"},{"text":"Github","href":"https://github.com/zeeshan12340/pypwncollege"}],"tags":["python","pip","pwncollege"]},{"image":"images/projects/revworks.png","title":"RevWorks","bodyText":"- Ruby on Rails Web Application with some basic functionality.\\n - Has a Web Race condition and used in a CTF I hosted. \\n - Has Docker image and live heroku demo.\\n","links":[{"text":"demo","href":"https://revworks-4e7c9d83d182.herokuapp.com/"},{"text":"Github","href":"https://github.com/zeeshan12340/revworks"},{"text":"thm room","href":"https://tryhackme.com/jr/revworks"}],"tags":["ruby","rails","CTF","webapp"]},{"image":"images/projects/rust.png","title":"RustC2","bodyText":"- Proof of Concept Command and Control Framework written in Rust\\n - Has basic features such as reverse shell handling and management, file upload/download, portscan. \\n - Open Source at Github","links":[{"text":"Github","href":"https://github.com/zeeshan12340/rustc2"}],"tags":["rust","C2"]},{"image":"images/projects/twitter.png","title":"Twitter-Clone","bodyText":"- Simple Twitter clone with only posts/profile/like/reply functionality.\\n - Google oauth2 is setup allowing direct sign-in using google account\\n- MongoDB database is used along with S3 bucket for images.\\n - Open Source at Github","links":[{"text":"live","href":"https://twitter-clone-five-psi-76.vercel.app/"},{"text":"Github","href":"https://github.com/zeeshan12340/twitter-clone"}],"tags":["social","web app"]},{"image":"images/projects/event.png","title":"Event-Dashboard","bodyText":"- Event Dashboard for finding events\\n - Fully interactive with event modal, category popper, event list expansion/collapse.\\n- Built with typescript, tailwind and redux.\\n - Open Source at Github","links":[{"text":"live","href":"https://event-dashboard-one.vercel.app/"},{"text":"Github","href":"https://github.com/zeeshan12340/event-dashboard"}],"tags":["typescript","web app"]}]}');var p=a(7424),h=a(7410),m=a(4945),u=a(579);const b={rowStyle:{justifyContent:"center"},showMoreStyle:{margin:25}},g=e=>{var t;const a=(0,r.useContext)(o.Dx),{header:g}=e,[f,x]=(0,r.useState)(null),[y,v]=(0,r.useState)(!1),[w,j]=(0,r.useState)(!1);(0,r.useEffect)((()=>{x(c),w||(0,h.iC)((async e=>{await(0,m.G)(e)})).then((()=>{j(!0)}))}),[w]);const N=y&&f?f.length:6;return(0,u.jsxs)("div",{children:[w&&(0,u.jsx)(h.Ay,{options:p}),(0,u.jsx)(n.default,{title:g}),f?(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:"projects-container",children:null===(t=f.projects)||void 0===t?void 0:t.slice(0,N).map((e=>(0,u.jsx)(i.zW,{children:(0,u.jsx)(l.default,{project:e})},e.title)))}),(0,u.jsx)("div",{children:!y&&(0,u.jsx)(s.A,{style:b.showMoreStyle,variant:a.bsSecondaryVariant,onClick:()=>v(!0),children:"show more"})})]}):(0,u.jsx)(d.default,{})]})}},4063:(e,t,a)=>{a.d(t,{A:()=>d});var r=a(8139),s=a.n(r),o=a(5043),i=a(7852),n=a(579);const l=o.forwardRef(((e,t)=>{let{bsPrefix:a,bg:r="primary",pill:o=!1,text:l,className:d,as:c="span",...p}=e;const h=(0,i.oU)(a,"badge");return(0,n.jsx)(c,{ref:t,...p,className:s()(d,h,o&&"rounded-pill",l&&`text-${l}`,r&&`bg-${r}`)})}));l.displayName="Badge";const d=l},4282:(e,t,a)=>{a.d(t,{A:()=>c});var r=a(8139),s=a.n(r),o=a(5043),i=a(4140),n=a(7852),l=a(579);const d=o.forwardRef(((e,t)=>{let{as:a,bsPrefix:r,variant:o="primary",size:d,active:c=!1,disabled:p=!1,className:h,...m}=e;const u=(0,n.oU)(r,"btn"),[b,{tagName:g}]=(0,i.Am)({tagName:a,disabled:p,...m}),f=g;return(0,l.jsx)(f,{...b,...m,ref:t,disabled:p,className:s()(h,u,c&&"active",o&&`${u}-${o}`,d&&`${u}-${d}`,m.href&&p&&"disabled")})}));d.displayName="Button";const c=d},7660:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});a(5043),a(9555);var r=a(579);const s=function(e){const{title:t}=e;return(0,r.jsx)("div",{className:"header",children:t})}},8621:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var r=a(5043),s=a(8628),o=a(4282),i=a(4063),n=a(9),l=a(4574),d=a(579);const c={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}},p=e=>{var t;const a=(0,r.useContext)(n.Dx),{project:p}=e;return(0,d.jsx)("div",{children:(0,d.jsxs)(s.A,{style:{borderRadius:10,backgroundColor:a.cardBackground,borderColor:a.cardBorderColor,borderWidth:3,width:350,marginLeft:100,marginRight:100,marginBottom:50},text:a.bsSecondaryVariant,children:[(0,d.jsx)(s.A.Img,{variant:"top",src:null===p||void 0===p?void 0:p.image,style:{height:200}}),(0,d.jsxs)(s.A.Body,{children:[(0,d.jsx)(s.A.Title,{style:c.cardTitleStyle,children:p.title}),(0,d.jsx)(s.A.Text,{style:c.cardTextStyle,as:"div",children:(0,d.jsx)(l.$,{children:p.bodyText})})]}),(0,d.jsx)(s.A.Body,{children:null===p||void 0===p||null===(t=p.links)||void 0===t?void 0:t.map((e=>(0,d.jsx)(o.A,{style:c.buttonStyle,variant:"outline-"+a.bsSecondaryVariant,onClick:()=>window.open(e.href,"_blank"),children:e.text},e.href)))}),p.tags&&(0,d.jsx)(s.A.Footer,{style:{backgroundColor:a.cardFooterBackground},children:p.tags.map((e=>(0,d.jsx)(i.A,{pill:!0,bg:a.bsSecondaryVariant,text:a.bsPrimaryVariant,style:c.badgeStyle,children:e},e)))})]})})}},8628:(e,t,a)=>{a.d(t,{A:()=>B});var r=a(8139),s=a.n(r),o=a(5043),i=a(7852),n=a(579);const l=o.forwardRef(((e,t)=>{let{className:a,bsPrefix:r,as:o="div",...l}=e;return r=(0,i.oU)(r,"card-body"),(0,n.jsx)(o,{ref:t,className:s()(a,r),...l})}));l.displayName="CardBody";const d=l,c=o.forwardRef(((e,t)=>{let{className:a,bsPrefix:r,as:o="div",...l}=e;return r=(0,i.oU)(r,"card-footer"),(0,n.jsx)(o,{ref:t,className:s()(a,r),...l})}));c.displayName="CardFooter";const p=c;var h=a(1778);const m=o.forwardRef(((e,t)=>{let{bsPrefix:a,className:r,as:l="div",...d}=e;const c=(0,i.oU)(a,"card-header"),p=(0,o.useMemo)((()=>({cardHeaderBsPrefix:c})),[c]);return(0,n.jsx)(h.A.Provider,{value:p,children:(0,n.jsx)(l,{ref:t,...d,className:s()(r,c)})})}));m.displayName="CardHeader";const u=m,b=o.forwardRef(((e,t)=>{let{bsPrefix:a,className:r,variant:o,as:l="img",...d}=e;const c=(0,i.oU)(a,"card-img");return(0,n.jsx)(l,{ref:t,className:s()(o?`${c}-${o}`:c,r),...d})}));b.displayName="CardImg";const g=b,f=o.forwardRef(((e,t)=>{let{className:a,bsPrefix:r,as:o="div",...l}=e;return r=(0,i.oU)(r,"card-img-overlay"),(0,n.jsx)(o,{ref:t,className:s()(a,r),...l})}));f.displayName="CardImgOverlay";const x=f,y=o.forwardRef(((e,t)=>{let{className:a,bsPrefix:r,as:o="a",...l}=e;return r=(0,i.oU)(r,"card-link"),(0,n.jsx)(o,{ref:t,className:s()(a,r),...l})}));y.displayName="CardLink";const v=y;var w=a(4488);const j=(0,w.A)("h6"),N=o.forwardRef(((e,t)=>{let{className:a,bsPrefix:r,as:o=j,...l}=e;return r=(0,i.oU)(r,"card-subtitle"),(0,n.jsx)(o,{ref:t,className:s()(a,r),...l})}));N.displayName="CardSubtitle";const k=N,C=o.forwardRef(((e,t)=>{let{className:a,bsPrefix:r,as:o="p",...l}=e;return r=(0,i.oU)(r,"card-text"),(0,n.jsx)(o,{ref:t,className:s()(a,r),...l})}));C.displayName="CardText";const S=C,P=(0,w.A)("h5"),T=o.forwardRef(((e,t)=>{let{className:a,bsPrefix:r,as:o=P,...l}=e;return r=(0,i.oU)(r,"card-title"),(0,n.jsx)(o,{ref:t,className:s()(a,r),...l})}));T.displayName="CardTitle";const A=T,R=o.forwardRef(((e,t)=>{let{bsPrefix:a,className:r,bg:o,text:l,border:c,body:p=!1,children:h,as:m="div",...u}=e;const b=(0,i.oU)(a,"card");return(0,n.jsx)(m,{ref:t,...u,className:s()(r,b,o&&`bg-${o}`,l&&`text-${l}`,c&&`border-${c}`),children:p?(0,n.jsx)(d,{children:h}):h})}));R.displayName="Card";const B=Object.assign(R,{Img:g,Title:A,Subtitle:k,Body:d,Link:v,Text:S,Header:u,Footer:p,ImgOverlay:x})}}]);
//# sourceMappingURL=69.e601e83c.chunk.js.map