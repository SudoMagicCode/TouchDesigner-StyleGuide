"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1510],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(7294),i=r(6010),a=r(2802),o=r(9960),c=r(3919),s=r(5999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",l.cardContainer)},r)}function d(e){let{href:t,icon:r,title:a,description:o}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",l.cardTitle),title:a},r," ",a),o&&n.createElement("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:o},o))}function p(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const o=(0,a.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},7737:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),i=(r(7294),r(3905)),a=r(2991);const o={layout:"default",title:"SudoMagic Style Guide",sidebar_position:2,slug:"/SM-guide"},c="SudoMagic Style Guide",s={unversionedId:"SM-guide/SM-guide",id:"SM-guide/SM-guide",title:"SudoMagic Style Guide",description:"Style and voice are different. Style is standard conventions of writing. Voice is the distinct way an individual puts words together. All good writers have a near-uniform understanding of style but a voice all their own.",source:"@site/docs/SM-guide/SM-guide.mdx",sourceDirName:"SM-guide",slug:"/SM-guide",permalink:"/docs/SM-guide",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{layout:"default",title:"SudoMagic Style Guide",sidebar_position:2,slug:"/SM-guide"},sidebar:"tutorialSidebar",previous:{title:"A Simple Disclaimer",permalink:"/docs/intro"},next:{title:"Preferences",permalink:"/docs/SM-guide/preferences"}},l={},u=[],d={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sudomagic-style-guide"},"SudoMagic Style Guide"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Style and voice are different. Style is standard conventions of writing. Voice is the distinct way an individual puts words together. All good writers have a near-uniform understanding of style but a voice all their own."))),(0,i.kt)("p",null,"\u2015 Naveed Saleh, ",(0,i.kt)("a",{parentName:"p",href:"https://www.goodreads.com/work/quotes/24692593-the-complete-guide-to-article-writing-how-to-write-successful-articles"},"The Complete Guide to Article Writing: How to Write Successful Articles for Online and Print Markets")),(0,i.kt)("p",null,"There are as many ways to use TouchDesigner as there are developers and artists that use TouchDesigner. To that end, the aim of a style guide is to provide standards and conventions that we agree upon as a working schema. This has a number of benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"it ensures networks follow patterns that are easier for developers to quickly navigate and read "),(0,i.kt)("li",{parentName:"ul"},"it reduces the cognitive energy required for moving between projects (shared project architectures create reliability and consistency)"),(0,i.kt)("li",{parentName:"ul"},"it allows for easier code review and discussion between developers"),(0,i.kt)("li",{parentName:"ul"},"it allows us to work with other developers and artists by using an established and reliable structure")),(0,i.kt)("p",null,"This style guide aims to capture our working standards at SudoMagic, both for network set-up, project structure, and for the use of Python and GLSL in the context of TouchDesigner."),(0,i.kt)("hr",null),(0,i.kt)(a.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);