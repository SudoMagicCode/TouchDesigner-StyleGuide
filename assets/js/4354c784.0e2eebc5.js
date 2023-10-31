"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7533],{2091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=n(5893),o=n(1151),s=n(2991);const r={title:"Python in TD",sidebar_position:5,description:"Python modules in TouchDesigner",slug:"/SM-guide/python-in-td"},c=void 0,a={id:"SM-guide/python-in-td/python-in-td",title:"Python in TD",description:"Python modules in TouchDesigner",source:"@site/docs/SM-guide/python-in-td/python-in-td.mdx",sourceDirName:"SM-guide/python-in-td",slug:"/SM-guide/python-in-td",permalink:"/docs/SM-guide/python-in-td",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Python in TD",sidebar_position:5,description:"Python modules in TouchDesigner",slug:"/SM-guide/python-in-td"},sidebar:"tutorialSidebar",previous:{title:"Network Organization",permalink:"/docs/SM-guide/network-organization"},next:{title:"Modules",permalink:"/docs/SM-guide/python-in-td/modules"}},d={},l=[];function u(e){const t={hr:"hr",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Python in TouchDesigner certainly has it's own set of quirks - some of these behaviors stem from the Python, others from TouchDesigner, and finally from the integration between the two. Python's use in TouchDesigner is one of the most powerful ways to both customize TouchDesigner and build complex stand alone systems."}),"\n",(0,i.jsx)(t.p,{children:"Having a nuanced understanding of how to best leverage Python in TouchDesigner unlocks a nearly limitless set of possibilities. This section is devoted to how SudoMagic has standardized it's Python practice for work with TouchDesigner."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(s.Z,{})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},2991:(e,t,n)=>{n.d(t,{Z:()=>y});n(7294);var i=n(6010),o=n(2802),s=n(9960),r=n(3919),c=n(5999),a=n(2503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(5893);function u(e){let{href:t,children:n}=e;return(0,l.jsx)(s.Z,{href:t,className:(0,i.Z)("card padding--lg",d.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:o,description:s}=e;return(0,l.jsxs)(u,{href:t,children:[(0,l.jsxs)(a.Z,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:o,children:[n," ",o]}),s&&(0,l.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e;const n=(0,o.LM)(t);return n?(0,l.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const n=(0,r.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(t.docId??void 0);return(0,l.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(m,{item:t});case"category":return(0,l.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,o.jA)();return(0,l.jsx)(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return(0,l.jsx)(g,{...e});const s=(0,o.MN)(t);return(0,l.jsx)("section",{className:(0,i.Z)("row",n),children:s.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(f,{item:e})},t)))})}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var i=n(7294);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);