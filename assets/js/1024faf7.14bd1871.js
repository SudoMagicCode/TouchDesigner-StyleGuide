"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9322],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(o),p=r,h=m["".concat(l,".").concat(p)]||m[p]||d[p]||a;return o?n.createElement(h,i(i({ref:t},u),{},{components:o})):n.createElement(h,i({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},3428:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const a={title:"Comments",description:"In network documentation",slug:"/SM-guide/network-comments"},i="Comments",s={unversionedId:"SM-guide/comments",id:"SM-guide/comments",title:"Comments",description:"In network documentation",source:"@site/docs/SM-guide/009-comments.md",sourceDirName:"SM-guide",slug:"/SM-guide/network-comments",permalink:"/docs/SM-guide/network-comments",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Comments",description:"In network documentation",slug:"/SM-guide/network-comments"},sidebar:"tutorialSidebar",previous:{title:"Externalizing TOX Files",permalink:"/docs/SM-guide/external-tox-files"},next:{title:"Logging",permalink:"/docs/SM-guide/logging"}},l={},c=[{value:"Do",id:"do",level:3},{value:"Don\u2019t",id:"dont",level:3},{value:"Links to Derivative&#39;s official docs",id:"links-to-derivatives-official-docs",level:2}],u={toc:c},m="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"comments"},"Comments"),(0,r.kt)("p",null,"Comments are an essential part of any project. While it may often feel like the time it takes to leave a comment in your network slows down the flow of the project, leaving yourself a trail of breadcrumbs can help you find your way back to what you were thinking when you were first working. Comments are not only for the other programmers that you\u2019re collaborating with, they\u2019re also for your future self. At some point you\u2019re bound to come back to a project and need to decode what you were originally thinking. The more time has elapsed between your last commit, and opening your project again, the more likely you are to feel lost and enraged at what you find. Good documentation is always the best case scenario, but not always feasible. At the very least, you should always strive to leave at least a few bullet points about how your network functions, and the the logic behind your approach."),(0,r.kt)("p",null,"Commenting in TouchDesigner is notoriously frustrating. Unlike other visual programming environments, Touch does not have the same kind of resolution dependent fielding options you might find in something like Max/MSP. Instead, right now the best commenting options that exist are to use Text DATs in your network. This can often become unwieldy, however, so there are some important things you might keep in mind."),(0,r.kt)("p",null,"First and foremost, please consider adding a readme DAT to any major component. A read me can act as an overview for your entire module \u2013 this is an excellent place for a little more narrative about what a particular element does, and what problems it\u2019s striving to solve. A TOX called base_network_documentation lives in the repo od.tools.sharedtox. Dropping this into your project makes adding read me and comments as easy as alt + n. It loads a light weight interface that allows you a quick and easy way to add comments to your network in a standardized format."),(0,r.kt)("p",null,"Unlike a readme, comments should focus on a particular element in your network. Avoid the temptation to write one large text DAT with all of your thoughts as bullet points. While this may initially seem efficient, it divorces your thoughts and explanations form the nodes which they refer to. Instead consider a multiple text DATs with comments close to their relevant procedures. It\u2019s also important to include a name, contact solution, and a date in your comments. Knowing who and when a particular idea or approach came from is often helpful in understanding a given network \u2013 it also gives you a person to ask about how a particular problem was solved if you\u2019re confused about what\u2019s happening in a given project. It\u2019s also worth considering a color schema for your comments. This makes it easy to scan a network for nodes immediately recognizable as comments \u2013 another programmer new to your network can quickly scan for nodes with a non standard color coding in order to get a sense of what\u2019s happening. Finally, for comments and readme text DATs make sure you\u2019ve turned on word wrap in your text DAT \u2013 this located on the common page in the ops parameters."),(0,r.kt)("h3",{id:"do"},"Do"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Color code your comments to make them easier to find"),(0,r.kt)("li",{parentName:"ul"},"Use a standard format for your comments \u2013 make sure to include your name, a way to contact you, and a time stamp.\nUse a text friendly formatting approach. Avoid using something like Word or google docs to write your comments \u2013 you\u2019ll end up with non standard characters that won\u2019t display correctly."),(0,r.kt)("li",{parentName:"ul"},"Place your thoughts close to the relevant portion of the network."),(0,r.kt)("li",{parentName:"ul"},"Use the word wrap feature on text DATs.")),(0,r.kt)("h3",{id:"dont"},"Don\u2019t"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Take all of your notes in a single DAT \u2013 this can make it difficult to connect your thoughts with your network."),(0,r.kt)("li",{parentName:"ul"},"Make your text DAT in largely disproportionately sized from your other operators."),(0,r.kt)("li",{parentName:"ul"},"Make no comments at all \u2013 always write something. Any hint at what you were thinking and doing is better than having nothing at all.")),(0,r.kt)("h2",{id:"links-to-derivatives-official-docs"},"Links to Derivative's official docs"))}d.isMDXComponent=!0}}]);