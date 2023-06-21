"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8100],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3274:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1,slug:"/intro"},i="A Simple Disclaimer",s={unversionedId:"intro",id:"intro",title:"A Simple Disclaimer",description:"---",source:"@site/docs/001-intro.md",sourceDirName:".",slug:"/intro",permalink:"/TouchDesigner-StyleGuide/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/intro"},sidebar:"tutorialSidebar",next:{title:"SudoMagic Style Guide",permalink:"/TouchDesigner-StyleGuide/docs/SM-guide"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"a-simple-disclaimer"},"A Simple Disclaimer"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"A style guide is opinionated, on purpose. "),(0,a.kt)("p",null,"While many people perceive the act of writing code as logical and un-biased, any developer who has seen their share of spaghetti understands first hand that code is mostly (for now at least",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),") written by humans - and humans are deeply opinionated. For those coming to ",(0,a.kt)("a",{parentName:"p",href:"https://derivative.ca/"},"TouchDesigner")," from other text based languages, you're probably familiar the idea of a Style Guide. In other languages these often provide anchoring ideas about the best practice for a particular project or how an organization writes its code. Many are familiar with conventions found in the ",(0,a.kt)("a",{parentName:"p",href:"https://google.github.io/styleguide/"},"Google Style Guides")," or in ",(0,a.kt)("a",{parentName:"p",href:"https://peps.python.org/pep-0008/"},"PEP 8")," - this resource makes no assumptions of importance, but does recognize the value of strong anchors for developers when they're writing code or connecting nodes."),(0,a.kt)("p",null,"Style guides are just that, guides. The suggestions outlined here aren\u2019t hard and fast rules, but form and style conventions from people who have tried lots of different approaches, and made plenty of mistakes of their own. For any standard there are likely to be exceptions, challenges, and issues. Code the way you want to code, but also remember that you\u2019re making something that other programmers (your future self included",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),") are going to return to, pull apart, question, interrogate, curse, praise, and judge. Your act of fixing an idea in an operational structure is both a creative act, as well as a measured and considered one. TouchDesigner networks are challenging to share and collaborate in \u2013 they are sprawling, nested, multi-layered collections of signal flows. That is to say that they are already challenging to decode \u2013 you don\u2019t have to use this standard, but cultivate and implement one for your own sake, and for the sake of your collaborators."),(0,a.kt)("hr",null),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"It's currently 2023, and TikTok cannot stop talking about how chatGPT will write all code in the near future... maybe even travel back from the future and  write all the code in a LLM ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/DMC_DeLorean"},"DeLorean"),".",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},(0,a.kt)("a",{parentName:"li",href:"https://xkcd.com/1421/"},"There's an xkcd for everything"),(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);