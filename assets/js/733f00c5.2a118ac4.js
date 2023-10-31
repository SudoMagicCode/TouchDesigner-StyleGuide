"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6451],{9744:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=t(5893),s=t(1151);const o={title:"Modules",sidebar_position:1,description:"Python modules in TouchDesigner",slug:"/SM-guide/python-in-td/modules"},a="Modules",r={id:"SM-guide/python-in-td/py-mods",title:"Modules",description:"Python modules in TouchDesigner",source:"@site/docs/SM-guide/python-in-td/001-py-mods.md",sourceDirName:"SM-guide/python-in-td",slug:"/SM-guide/python-in-td/modules",permalink:"/docs/SM-guide/python-in-td/modules",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Modules",sidebar_position:1,description:"Python modules in TouchDesigner",slug:"/SM-guide/python-in-td/modules"},sidebar:"tutorialSidebar",previous:{title:"Python in TD",permalink:"/docs/SM-guide/python-in-td"},next:{title:"Extensions",permalink:"/docs/SM-guide/python-in-td/extensions"}},d={},c=[{value:"Namespace Collisions",id:"namespace-collisions",level:2},{value:"When to use Modules",id:"when-to-use-modules",level:2},{value:"Links to Derivative&#39;s official docs",id:"links-to-derivatives-official-docs",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",section:"section",sup:"sup",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"modules",children:"Modules"}),"\n",(0,i.jsxs)(n.p,{children:["Python in TouchDesigner shares many of the characteristics of a pure Python development experience, but also has some distinct differences. Inside of TouchDesigner Text DATs behave as though they are text files. This allows us the flexability of writing generic Python functions in one DAT, and then calling that function in another - for example with a CHOP Execute DAT. The mechanics of this are defined in the ",(0,i.jsx)(n.a,{href:"https://docs.derivative.ca/MOD_Class",children:"MOD Class"})," wiki page, and cover three different ways you might import modules whose code is inside of DATs."]}),"\n",(0,i.jsx)(n.p,{children:"This does, however, make for some interesting challenges and considerations. Specifically, committing to a defined paradigm for your namespace is critical when importing modules from Text DATs."}),"\n",(0,i.jsx)(n.h2,{id:"namespace-collisions",children:"Namespace Collisions"}),"\n",(0,i.jsxs)(n.p,{children:["Consider the following scenario - in your project you want write a wrapper for the python ",(0,i.jsx)(n.code,{children:"datetime"})," library. It's not uncommon to want to modify standard libraries so they are a better fit for the TouchDesigner workflow, and writing a wrapper around a library like ",(0,i.jsx)(n.code,{children:"datetime"})," is something you might do. Feeling clever, you decide to change the name of your Text DAT to ",(0,i.jsx)(n.code,{children:"datetime"})," - since it is your new datetime library."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(1130).Z+"",width:"1381",height:"1008"})}),"\n",(0,i.jsxs)(n.p,{children:["What's not to love about this? Next you want to call your new functions from another DAT. You add another DAT to your network and ",(0,i.jsx)(n.code,{children:"import datetime"})," and call the functions you've just written."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(7618).Z+"",width:"2742",height:"965"})}),"\n",(0,i.jsxs)(n.p,{children:["At this point everything is coming up roses",(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),". There is, however, a catch to this approach - what happens if we try to access the pure Python ",(0,i.jsx)(n.code,{children:"datetime"})," library from our ",(0,i.jsx)(n.code,{children:"text1"})," DAT?"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(4602).Z+"",width:"1887",height:"1872"})}),"\n",(0,i.jsxs)(n.p,{children:["Errors abound. We've now created a complicated namespace - we are both importing the standard Python library called ",(0,i.jsx)(n.code,{children:"datetime"})," and naming a Text DAT ",(0,i.jsx)(n.code,{children:"datetime"})," which we are importing in the context of TouchDesigner as ",(0,i.jsx)(n.code,{children:"datetime"}),". That means that only in our TextDAT version of ",(0,i.jsx)(n.code,{children:"datetime"})," can we access any of the other functions in this library - which is deeply confusing. Said another way, we've overridden the standard library with our own module and created a namespace mess. For this reason, it's worth adopting a naming schema that helps ensure that these types of collisions are less likely to occur."]}),"\n",(0,i.jsxs)(n.p,{children:["Generally speaking, we append ",(0,i.jsx)(n.code,{children:"MOD"})," to the end of any Text DAT that's treated as a module on demand. In our case that would mean naming our ",(0,i.jsx)(n.code,{children:"datetime"})," wrapper ",(0,i.jsx)(n.code,{children:"datetimeMOD"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"when-to-use-modules",children:"When to use Modules"}),"\n",(0,i.jsxs)(n.p,{children:["The use of the ",(0,i.jsx)(n.code,{children:"mod"})," class, and the ability to import Text DATs as modules on demand started with some of the earliest implementation of Python in TouchDesigner. This opened up a number of different avenues for working with Python, and also created spaces to define reusable code in Text DATs that could be used by many different execute Ops. This can be hugely beneficial with respect to maintaining a library of code that's used multiple places. That's a hugely powerful idea, especially in TouchDesigner, but it does have some limitations. One in particular being that it's difficult to maintain a persistent object or variable between executions."]}),"\n",(0,i.jsxs)(n.p,{children:["Any given Text DAT has an independent scope - which means that the ",(0,i.jsx)(n.code,{children:"my_int"})," of ",(0,i.jsx)(n.code,{children:"text1"})," isn't easily accessed by ",(0,i.jsx)(n.code,{children:"text2"}),". It is possible to declare a variable globally from within a DAT, but that's often messier than it might seem - when using global variables in Python the opportunity for namespace collisions is very high, especially when working in an environment like TouchDesigner."]}),"\n",(0,i.jsx)(n.admonition,{title:"SudoMagic Practice",type:"danger",children:(0,i.jsx)(n.p,{children:"Our general practice is to avoid using global Python variables in any project code."})}),"\n",(0,i.jsx)(n.h2,{id:"links-to-derivatives-official-docs",children:"Links to Derivative's official docs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.derivative.ca/MOD_Class",children:"MOD Class"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://derivative.ca/UserGuide/Python_Classes_and_Modules",children:"Python Classes and Modules"})}),"\n"]}),"\n",(0,i.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,i.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{id:"user-content-fn-1",children:["\n",(0,i.jsxs)(n.p,{children:["For those unfamiliar, Ethel Merman's performance of ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=s62MrU8mHx4&ab_channel=dougster2810",children:"Everything's Coming Up Roses"})," once was the bee's knees. ",(0,i.jsx)(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1130:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/python-modules-01-352c7f2de6ad53343574d722d070b2b2.png"},7618:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/python-modules-02-02bb5175ca9821455e4678e5f1840cd6.png"},4602:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/python-modules-03-96b31e40d7e6c59140ae8ff74e0b33ad.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var i=t(7294);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);