(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[5],{139:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));var s=n(0),l=(n(75),n(139),n(2));function c(e){let{value:t,onSquareClick:n,highlight:s}=e;return Object(l.jsx)("button",{className:"square",...s?{style:{backgroundColor:"cyan"}}:{},onClick:n,children:t})}function o(e){let{xIsNext:t,squares:n,onPlay:s}=e;function o(e){if(n[e])return;const l=n.slice();l[e]=t?"X":"0",s(l)}const r=function(e){const t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let n=0;n<t.length;n++){const[s,l,c]=t[n];if(e[s]&&e[s]===e[l]&&e[s]===e[c])return t[n]}return null}(n);let a="Draw: No one won.";for(let l=0;l<n.length;l++)null==n[l]&&(a=null);r?a="Winner: "+n[r[0]]:a||(a="Next Player: "+(t?"X":"O"));const i=[];for(let u=0;u<3;u++){const e=[];for(let t=0;t<3;t++){const s=3*u+t;e.push(Object(l.jsx)(c,{value:n[s],onSquareClick:()=>o(s),highlight:r&&r.includes(s)},s))}i.push(Object(l.jsx)("div",{className:"board-row",children:e},u))}return Object(l.jsxs)("div",{className:"board",children:[Object(l.jsx)("div",{className:"status"+(a.includes("Winner")?" alert alert-success":""),style:{position:"absolute",top:a.includes("Winner")?70:100,left:0,right:0,zIndex:999},children:a}),i]})}function r(){const[e,t]=Object(s.useState)([Array(9).fill(null)]),[n,c]=Object(s.useState)(0),r=n%2===0,a=e[n];const i=e.map(((e,t)=>{let s;return t===n?(s="You are at move #"+t,Object(l.jsx)("li",{className:"move",children:s},t)):(s=t>0?"Go to move #"+t:"Go to game start",Object(l.jsx)("li",{className:"mt-1",children:Object(l.jsx)("button",{className:"border border-info rounded-pill px-2",onClick:()=>{c(t)},children:s})},t))}));return Object(l.jsxs)("div",{className:"game",children:[Object(l.jsx)("button",{className:"btn btn-primary mb-2",onClick:()=>(t([Array(9).fill(null)]),void c(0)),children:"New Game"}),Object(l.jsx)("div",{className:"break"}),Object(l.jsx)("div",{className:"game-board",children:Object(l.jsx)(o,{xIsNext:r,squares:a,onPlay:function(s){const l=[...e.slice(0,n+1),s];t(l),c(l.length-1)}})}),Object(l.jsx)("div",{className:"game-info",children:Object(l.jsx)("ol",{children:i})})]})}}}]);
//# sourceMappingURL=5.59fea4fb.chunk.js.map