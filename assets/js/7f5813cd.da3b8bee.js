"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[606],{9573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(4848),i=n(8453),s=n(4074);const o={layout:"default",title:"SudoMagic Style Guide",sidebar_position:2,slug:"/SM-guide"},a="SudoMagic Style Guide",c={id:"SM-guide/SM-guide",title:"SudoMagic Style Guide",description:"Style and voice are different. Style is standard conventions of writing. Voice is the distinct way an individual puts words together. All good writers have a near-uniform understanding of style but a voice all their own.",source:"@site/docs/SM-guide/SM-guide.mdx",sourceDirName:"SM-guide",slug:"/SM-guide",permalink:"/docs/SM-guide",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{layout:"default",title:"SudoMagic Style Guide",sidebar_position:2,slug:"/SM-guide"},sidebar:"tutorialSidebar",previous:{title:"A Simple Disclaimer",permalink:"/docs/intro"},next:{title:"Preferences",permalink:"/docs/SM-guide/preferences"}},l={},d=[];function u(e){const t={a:"a",blockquote:"blockquote",em:"em",h1:"h1",header:"header",hr:"hr",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"sudomagic-style-guide",children:"SudoMagic Style Guide"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Style and voice are different. Style is standard conventions of writing. Voice is the distinct way an individual puts words together. All good writers have a near-uniform understanding of style but a voice all their own."})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["\u2015 Naveed Saleh, ",(0,r.jsx)(t.a,{href:"https://www.goodreads.com/work/quotes/24692593-the-complete-guide-to-article-writing-how-to-write-successful-articles",children:"The Complete Guide to Article Writing: How to Write Successful Articles for Online and Print Markets"})]}),"\n",(0,r.jsx)(t.p,{children:"There are as many ways to use TouchDesigner as there are developers and artists that use TouchDesigner. To that end, the aim of a style guide is to provide standards and conventions that we agree upon as a working schema. This has a number of benefits:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"it ensures networks follow patterns that are easier for developers to quickly navigate and read"}),"\n",(0,r.jsx)(t.li,{children:"it reduces the cognitive energy required for moving between projects (shared project architectures create reliability and consistency)"}),"\n",(0,r.jsx)(t.li,{children:"it allows for easier code review and discussion between developers"}),"\n",(0,r.jsx)(t.li,{children:"it allows us to work with other developers and artists by using an established and reliable structure"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"This style guide aims to capture our working standards at SudoMagic, both for network set-up, project structure, and for the use of Python and GLSL in the context of TouchDesigner."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(s.A,{})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},4074:(e,t,n)=>{n.d(t,{A:()=>M});var r=n(6540),i=n(8215),s=n(1054),o=n(4783),a=n(7639);const c=["zero","one","two","few","many","other"];function l(e){return c.filter((t=>e.includes(t)))}const d={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),d}}),[e])}function h(){const e=u();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),s=n.pluralForms.indexOf(i);return r[Math.min(s,r.length-1)]}(n,t,e)}}var f=n(877),m=n(3230),p=n(5225);const g={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var w=n(4848);function x(e){let{href:t,children:n}=e;return(0,w.jsx)(o.A,{href:t,className:(0,i.A)("card padding--lg",g.cardContainer),children:n})}function y(e){let{href:t,icon:n,title:r,description:s}=e;return(0,w.jsxs)(x,{href:t,children:[(0,w.jsxs)(p.A,{as:"h2",className:(0,i.A)("text--truncate",g.cardTitle),title:r,children:[n," ",r]}),s&&(0,w.jsx)("p",{className:(0,i.A)("text--truncate",g.cardDescription),title:s,children:s})]})}function j(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=h();return t=>e(t,(0,m.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,w.jsx)(y,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function v(e){let{item:t}=e;const n=(0,f.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,w.jsx)(y,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function S(e){let{item:t}=e;switch(t.type){case"link":return(0,w.jsx)(v,{item:t});case"category":return(0,w.jsx)(j,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,s.$S)();return(0,w.jsx)(M,{items:n.items,className:t})}function M(e){const{items:t,className:n}=e;if(!t)return(0,w.jsx)(b,{...e});const r=(0,s.d1)(t);return(0,w.jsx)("section",{className:(0,i.A)("row",n),children:r.map(((e,t)=>(0,w.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,w.jsx)(S,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(6540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);