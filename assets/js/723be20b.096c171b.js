"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6344],{6917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=n(4848),o=n(8453);const a={title:"Externalizing TOX Files",description:"An examination of the use of TOX files when building your project",slug:"/SM-guide/external-tox-files"},s="A TOX Centric Approach",r={id:"SM-guide/externalizing-tox-files",title:"Externalizing TOX Files",description:"An examination of the use of TOX files when building your project",source:"@site/docs/SM-guide/008-externalizing-tox-files.md",sourceDirName:"SM-guide",slug:"/SM-guide/external-tox-files",permalink:"/docs/SM-guide/external-tox-files",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Externalizing TOX Files",description:"An examination of the use of TOX files when building your project",slug:"/SM-guide/external-tox-files"},sidebar:"tutorialSidebar",previous:{title:"Project Organization",permalink:"/docs/SM-guide/organization"},next:{title:"Comments",permalink:"/docs/SM-guide/network-comments"}},l={},d=[{value:"Directories and Saving",id:"directories-and-saving",level:2},{value:"Node Naming Conventions",id:"node-naming-conventions",level:2},{value:"Notable Exceptions to this Rule",id:"notable-exceptions-to-this-rule",level:3}];function c(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"a-tox-centric-approach",children:"A TOX Centric Approach"}),"\n",(0,i.jsx)(t.p,{children:"In our current general networking building strategy, as many elements as possible are externalized. The strategy of externalizing the contents of a network helps:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"reduce toe file size"}),"\n",(0,i.jsx)(t.li,{children:"focus on modular design - this focus helps us think of modules that could be interchangeable provided that we land on a standard method of building in and out communication standards."}),"\n",(0,i.jsx)(t.li,{children:"allow for better git tracking - tox and toe files are binary, which makes it nearly impossible to use the same git process as you might with a different code base. By externalizing modules, we can easily see when a tox has changed, roll back to previous tox files, and in other ways wrangle the complex challenges of ensuring for comprehensive version tracking during development."}),"\n",(0,i.jsx)(t.li,{children:"allow for multiple developer contributions via git - by focusing on individual tox files as the epicenter of change, multiple developers can be writing and re-writing networks without fear of merge conflicts - provided that they aren\u2019t editing the same tox at the same time."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"directories-and-saving",children:"Directories and Saving"}),"\n",(0,i.jsx)(t.p,{children:"Structurally, we build our repo directories to match our toe file directories. If a given base is located in /software_project_name/base_communication, then it\u2019s tox file should be saved at a repo location that matches. The thinking here is to build parallel structures between networks and directories. Why? You might ask. Mirroring directory structures can help other programmers locate your work. This conventionalized method of locating files, means that if you know where a given module lives in a network, you should also be able to locate that file in the reop. For any frustration this may cause during building, it solves an innumerable number of problems during debugging and code exchange."}),"\n",(0,i.jsx)(t.h2,{id:"node-naming-conventions",children:"Node Naming Conventions"}),"\n",(0,i.jsx)(t.p,{children:"Clear namespace use is essential to any project. If you\u2019re familiar with the Zen of Python, you might remember two essential ideas:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Explicit is better than implicit"}),"\n",(0,i.jsx)(t.li,{children:"Namespaces are one honking great idea \u2014 let\u2019s do more of those!"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"What does this have to do with naming contentions? It\u2019s easy to find yourself navigating another programmers network trying to discern what they were attempting to do \u2013 even trying on how they might have been thinking about a given project or idea. For this very reason we\u2019ve landed on the explicit prefixing of unique node names in a TouchDesigner network with the operators\u2019 type. For example, a null TOP used as a background element might have the name \u201cnull_bg\u201d. While this makes for longer operator names, it also allows other programmers the opportunity to see, at a glance, what operators are in a given network or process. While this may initially feel cumbersome, this convention is ultimately about making your code as parse-able and readable for another programmer as possible. This is also about creating code for your future self - coming back to a project in 2, 5, or 10 months means you\u2019ll likely want as many breadcrumbs as possible in order to understand what your past self was trying to do."}),"\n",(0,i.jsx)(t.h3,{id:"notable-exceptions-to-this-rule",children:"Notable Exceptions to this Rule"}),"\n",(0,i.jsx)(t.p,{children:"The most apparent exceptions to this rule are found in local/modules. Mods have the benefit of being accessible with the short hand:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"mod.textDATname.functionName"})}),"\n",(0,i.jsx)(t.p,{children:"This excellent feature can be ham-stringed by long text DAT names. As an example, we might imagine that we have a module we\u2019d like to use with the mod. shorthand. THat module\u2019s name might easily be something like \u201ctext_system_configuration\u201d when using our standard naming convention, inside of this module we might want to use a function called \u201cstart_up\u201d. This would mean that we\u2019d need to write something akin to:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"mod.text_system_configuration.start_up()"})}),"\n",(0,i.jsxs)(t.p,{children:["in order to call this function. The shortening of this by the prefix ",(0,i.jsx)(t.code,{children:"text_"})," may not be a huge number of characters, but it helps provide a little bit of clarity in the reading a of the expression:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"mod.system_configuration.start_up()"})}),"\n",(0,i.jsx)(t.p,{children:"This also helps distinguish our module - which is essentially being accessed as a library - and a regular text DAT."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var i=n(6540);const o={},a=i.createContext(o);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);