"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[210],{6091:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=n(4848),t=n(8453);const i={title:"Local Modules",sidebar_position:3,description:"A special case for Python modules in TouchDesigner",slug:"/SM-guide/python-in-td/local-modules"},c="Local Modules",l={id:"SM-guide/python-in-td/py-local",title:"Local Modules",description:"A special case for Python modules in TouchDesigner",source:"@site/docs/SM-guide/python-in-td/003-py-local.md",sourceDirName:"SM-guide/python-in-td",slug:"/SM-guide/python-in-td/local-modules",permalink:"/docs/SM-guide/python-in-td/local-modules",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Local Modules",sidebar_position:3,description:"A special case for Python modules in TouchDesigner",slug:"/SM-guide/python-in-td/local-modules"},sidebar:"tutorialSidebar",previous:{title:"Extensions",permalink:"/docs/SM-guide/python-in-td/extensions"},next:{title:"Auto-Complete",permalink:"/docs/SM-guide/python-in-td/py-td-auto-complete"}},a={},d=[{value:"The Magical Local/Modules",id:"the-magical-localmodules",level:2},{value:"Project Specific",id:"project-specific",level:3},{value:"Links to Derivative&#39;s official docs",id:"links-to-derivatives-official-docs",level:2}];function r(e){const o={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"local-modules",children:"Local Modules"}),"\n",(0,s.jsxs)(o.p,{children:["The ",(0,s.jsx)(o.a,{href:"https://docs.derivative.ca/MOD_Class",children:"MOD Class"})," performs some convince functions for users in TouchDesigner, especially when using local -> Modules. This allows the ",(0,s.jsx)(o.code,{children:"import"})," keyword in Python to easily locate a Text DAT so it can be used as a Python module on demand."]}),"\n",(0,s.jsxs)(o.p,{children:["According to the TouchDesigner Wiki, the hierarchy for the Python search path during ",(0,s.jsx)(o.code,{children:"import"})," behaves as follows:"]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Search Path"}),(0,s.jsx)(o.br,{}),"\n","The current component is searched first.",(0,s.jsx)(o.br,{}),"\n","If the DAT is not found, the local/modules component of the current component is then searched.",(0,s.jsx)(o.br,{}),"\n","Next the local/modules component of each parent is successively searched.",(0,s.jsx)(o.br,{}),"\n","If the DAT is still not found, None is returned."]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["This means that when developing a reusable library, if you place your Text DAT in a base called ",(0,s.jsx)(o.code,{children:"modules"})," located in a base called ",(0,s.jsx)(o.code,{children:"local"})," you can then access that module only by using the ",(0,s.jsx)(o.code,{children:"import"})," keyword from any child component."]}),"\n",(0,s.jsx)(o.admonition,{title:"How to Use Local Modules",type:"tip",children:(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-txt",children:"local\n    \u2514\u2500\u2500 modules\n        \u2514\u2500\u2500 anyTextDAT\n"})})}),"\n",(0,s.jsx)(o.h2,{id:"the-magical-localmodules",children:"The Magical Local/Modules"}),"\n",(0,s.jsxs)(o.p,{children:["At SudoMagic we take advantage of this feature in two locations in a typical project. At the root of a project the ",(0,s.jsx)(o.code,{children:"SudoMagic"})," library is located in ",(0,s.jsx)(o.code,{children:"base_scaffold/local/modules/SudoMagic"}),". This ensures that our library of reusable functions is available throughout the entire project."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"base_scaffold\n    \u2514\u2500\u2500 local\n        \u2514\u2500\u2500 modules\n            \u2514\u2500\u2500 SudoMagic\n"})}),"\n",(0,s.jsx)(o.h3,{id:"project-specific",children:"Project Specific"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{children:"base_scaffold\n    \u251c\u2500\u2500 base_icon_ui\n    \u251c\u2500\u2500 local\n    \u2502    \u2514\u2500\u2500 modules\n    \u2502        \u2514\u2500\u2500SudoMagic\n    \u2502\n    \u2514\u2500\u2500 base_project\n        \u2514\u2500\u2500 local\n            \u2514\u2500\u2500 modules\n                \u2514\u2500\u2500 projectSpecificModules\n"})}),"\n",(0,s.jsx)(o.h2,{id:"links-to-derivatives-official-docs",children:"Links to Derivative's official docs"})]})}function u(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>c,x:()=>l});var s=n(6540);const t={},i=s.createContext(t);function c(e){const o=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:o},e.children)}}}]);