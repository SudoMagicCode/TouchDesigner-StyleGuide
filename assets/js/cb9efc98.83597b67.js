"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3484],{2474:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=r(4848),i=r(8453);const o={title:"Preferences",description:"An overview of TouchDesigner preferences",slug:"/SM-guide/preferences"},s="Recommended Preference Settings",a={id:"SM-guide/preference-settings",title:"Preferences",description:"An overview of TouchDesigner preferences",source:"@site/docs/SM-guide/002-preference-settings.md",sourceDirName:"SM-guide",slug:"/SM-guide/preferences",permalink:"/docs/SM-guide/preferences",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Preferences",description:"An overview of TouchDesigner preferences",slug:"/SM-guide/preferences"},sidebar:"tutorialSidebar",previous:{title:"SudoMagic Style Guide",permalink:"/docs/SM-guide"},next:{title:"Nodes",permalink:"/docs/SM-guide/nodes"}},d={},l=[{value:"Grid Snap",id:"grid-snap",level:2},{value:"Resize",id:"resize",level:2},{value:"External Editors",id:"external-editors",level:2},{value:"Links to Derivative&#39;s official docs",id:"links-to-derivatives-official-docs",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"recommended-preference-settings",children:"Recommended Preference Settings"})}),"\n",(0,n.jsx)(t.p,{children:"Preferences is a dialog for setting personal default settings for various TouchDesigner options. These preferences are found in the Edit menu under Preferences.... These options are saved so they apply to your next TouchDesigner session."}),"\n",(0,n.jsx)(t.p,{children:"From the Edit menu select the Preferences dialog box. Alternatively, you could use the keyboard short-cut Alt + p"}),"\n",(0,n.jsx)(t.p,{children:"Here you\u2019ll find a number of preferences for setting up your TouchDesigner environment. While many of these are the preview of the individual programmer there are some important recommendations worth considering when spending a significant amount of time developing in Touch. You may well find that you have a very specific set of preferences in your work, and that\u2019s great. But, before you get there here are a few good places to start."}),"\n",(0,n.jsx)(t.p,{children:"Alternatively, you can find the preference file located here:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Platform"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Path"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Windows"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"C:/Users/{username}/AppData/Local/Derivative/TouchDesigner/pref.txt"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"macOS"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"~Library/Application Support/Derivative/TouchDesigner</pref.txtcode>"})})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"grid-snap",children:"Grid Snap"}),"\n",(0,n.jsx)(t.p,{children:"By default the grid snap setting in TouchDesigner is set to course. Most of the networks you\u2019ll find in our repos have been set with a fine network grid, which means if you re-arrange an operator, it will be difficult to find your way back into alignment with the project. For this reason, it\u2019s worth changing your Snap to Grid to be fine."}),"\n",(0,n.jsx)(t.h2,{id:"resize",children:"Resize"}),"\n",(0,n.jsx)(t.p,{children:"For the sanity of other programmers, it\u2019s well worth turning off the resize TOP and COMP checkboxes in your Network preferences tab. This keeps a uniform look to all TOPs and COMPs unless you choose to specifically deviate from the normal size."}),"\n",(0,n.jsx)(t.p,{children:"This is often an area of spirited discussion, and programmers within the department often have very specific opinions about the right approach for sizing and network organization. That being said, it\u2019s worth remembering that a formal structure to the choices made in sizing and placement help make a TouchDesigner network more readable and navigable. First starting with normed sizes allows the programmer to make specific choices, rather than arbitrary ones \u2013 a common byproduct of the use of auto resizing. for both TOPs and COMPs."}),"\n",(0,n.jsx)(t.h2,{id:"external-editors",children:"External Editors"}),"\n",(0,n.jsx)(t.p,{children:"It\u2019s often desirable to have an external editor for text and table elements in touch. Many of us use Sublime Text thought there are a wide variety of text editors that you might choose. External editors allow for syntax highlighting, and a variety of advanced features for speeding up the process of writing code. To set an external editor you need to use the DATs tab of the preferences window. Here you\u2019ll find two fields where you can enter the paths to the executables for the applications you\u2019d like to use."}),"\n",(0,n.jsx)(t.p,{children:"An example preference file:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"dats.texteditor\tC:/Users/ragan/AppData/Local/Programs/Microsoft VS Code/Code.exe\nobj.adaptivehomedefault\t0\nchops.graphdisplay2\t6\nnetwork.fitpaneltotile\t0\ngeneral.inc\t0\nnetwork.zoomdelay\t0.19999999\nnetwork.gridsnapdiv\t2\nnetwork.fittoptotile\t0\nnetwork.zoomboost\t1.0000002\n"})}),"\n",(0,n.jsx)(t.h2,{id:"links-to-derivatives-official-docs",children:"Links to Derivative's official docs"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.derivative.ca/Dialogs:Preferences_Dialog",children:"Preference Dialog"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.derivative.ca/Preferences_Class",children:"Preference Class"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var n=r(6540);const i={},o=n.createContext(i);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);