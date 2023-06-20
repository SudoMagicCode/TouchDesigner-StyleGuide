"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5290],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,h=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return r?n.createElement(h,a(a({ref:t},d),{},{components:r})):n.createElement(h,a({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={title:"Preferences",description:"An overview of TouchDesigner preferences",sidebar_position:1},a="Recommended Preference Settings",s={unversionedId:"SM-guide/preference-settings",id:"SM-guide/preference-settings",title:"Preferences",description:"An overview of TouchDesigner preferences",source:"@site/docs/SM-guide/preference-settings.md",sourceDirName:"SM-guide",slug:"/SM-guide/preference-settings",permalink:"/TouchDesigner-StyleGuide/docs/SM-guide/preference-settings",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SM-guide/preference-settings.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Preferences",description:"An overview of TouchDesigner preferences",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"SudoMagic Style Guide",permalink:"/TouchDesigner-StyleGuide/docs/SM-guide/"},next:{title:"Nodes",permalink:"/TouchDesigner-StyleGuide/docs/SM-guide/nodes"}},l={},c=[{value:"Grid Snap",id:"grid-snap",level:2},{value:"Resize",id:"resize",level:2},{value:"External Editors",id:"external-editors",level:2},{value:"Links to the official docs",id:"links-to-the-official-docs",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"recommended-preference-settings"},"Recommended Preference Settings"),(0,o.kt)("p",null,"Preferences is a dialog for setting personal default settings for various TouchDesigner options. These preferences are found in the Edit menu under Preferences.... These options are saved so they apply to your next TouchDesigner session.\n{: .fs-6 .fw-300 }"),(0,o.kt)("p",null,"From the Edit menu select the Preferences dialog box. Alternatively, you could use the keyboard short-cut Alt + p"),(0,o.kt)("p",null,"Here you\u2019ll find a number of preferences for setting up your TouchDesigner environment. While many of these are the preview of the individual programmer there are some important recommendations worth considering when spending a significant amount of time developing in Touch. You may well find that you have a very specific set of preferences in your work, and that\u2019s great. But, before you get there here are a few good places to start."),(0,o.kt)("p",null,"Alternatively, you can find the preference file located here:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Platform"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Path"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Windows"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"C:/Users/{username}/AppData/Local/Derivative/TouchDesigner/pref.txt"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"macOS"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"~Library/Application Support/Derivative/TouchDesigner</pref.txtcode>"))))),(0,o.kt)("h2",{id:"grid-snap"},"Grid Snap"),(0,o.kt)("p",null,"By default the grid snap setting in TouchDesigner is set to course. Most of the networks you\u2019ll find in our repos have been set with a fine network grid, which means if you re-arrange an operator, it will be difficult to find your way back into alignment with the project. For this reason, it\u2019s worth changing your Snap to Grid to be fine."),(0,o.kt)("h2",{id:"resize"},"Resize"),(0,o.kt)("p",null,"For the sanity of other programmers, it\u2019s well worth turning off the resize TOP and COMP checkboxes in your Network preferences tab. This keeps a uniform look to all TOPs and COMPs unless you choose to specifically deviate from the normal size."),(0,o.kt)("p",null,"This is often an area of spirited discussion, and programmers within the department often have very specific opinions about the right approach for sizing and network organization. That being said, it\u2019s worth remembering that a formal structure to the choices made in sizing and placement help make a TouchDesigner network more readable and navigable. First starting with normed sizes allows the programmer to make specific choices, rather than arbitrary ones \u2013 a common byproduct of the use of auto resizing. for both TOPs and COMPs."),(0,o.kt)("h2",{id:"external-editors"},"External Editors"),(0,o.kt)("p",null,"It\u2019s often desirable to have an external editor for text and table elements in touch. Many of us use Sublime Text thought there are a wide variety of text editors that you might choose. External editors allow for syntax highlighting, and a variety of advanced features for speeding up the process of writing code. To set an external editor you need to use the DATs tab of the preferences window. Here you\u2019ll find two fields where you can enter the paths to the executables for the applications you\u2019d like to use."),(0,o.kt)("p",null,"An example preference file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dats.texteditor C:/Users/ragan/AppData/Local/Programs/Microsoft VS Code/Code.exe\nobj.adaptivehomedefault 0\nchops.graphdisplay2 6\nnetwork.fitpaneltotile  0\ngeneral.inc 0\nnetwork.zoomdelay   0.19999999\nnetwork.gridsnapdiv 2\nnetwork.fittoptotile    0\nnetwork.zoomboost   1.0000002\n")),(0,o.kt)("h2",{id:"links-to-the-official-docs"},"Links to the official docs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.derivative.ca/Dialogs:Preferences_Dialog"},"Preference Dialog")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.derivative.ca/Preferences_Class"},"Preference Class"))))}u.isMDXComponent=!0}}]);