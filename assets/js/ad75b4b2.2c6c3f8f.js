"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3302],{7233:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=i(4848),o=i(8453);const s={title:"Nodes",description:"Working with Nodes",slug:"/SM-guide/nodes"},r="Nodes",a={id:"SM-guide/nodes",title:"Nodes",description:"Working with Nodes",source:"@site/docs/SM-guide/003-nodes.md",sourceDirName:"SM-guide",slug:"/SM-guide/nodes",permalink:"/docs/SM-guide/nodes",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Nodes",description:"Working with Nodes",slug:"/SM-guide/nodes"},sidebar:"tutorialSidebar",previous:{title:"Preferences",permalink:"/docs/SM-guide/preferences"},next:{title:"Network Organization",permalink:"/docs/SM-guide/network-organization"}},l={},d=[{value:"Naming Patterns",id:"naming-patterns",level:2},{value:"Notable Exceptions",id:"notable-exceptions",level:3},{value:"Sizing",id:"sizing",level:2},{value:"Wires",id:"wires",level:2},{value:"Visual Debugging",id:"visual-debugging",level:2},{value:"Animation",id:"animation",level:3},{value:"Links",id:"links",level:3},{value:"Docked",id:"docked",level:3},{value:"Links to Derivative&#39;s official docs",id:"links-to-derivatives-official-docs",level:2}];function h(e){const n={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"nodes",children:"Nodes"}),"\n",(0,t.jsx)(n.h2,{id:"naming-patterns",children:"Naming Patterns"}),"\n",(0,t.jsxs)(n.p,{children:["This section stands as an expansion on the above naming convention style guide. After much discussion, the current practice for operator naming follows the python style guide of using underscores rather than camel case. This appears in a number of various locations in your network, and requires special attention when it comes to renaming nodes. When renaming an operator or when terminating with a null the following naming convention should be used: ",(0,t.jsx)(n.code,{children:"{operator}_{descriptor}_{name}{#}"})]}),"\n",(0,t.jsx)(n.p,{children:"The above can be decoded:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Element"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"operator"})}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:["the operator type, e.g. ",(0,t.jsx)(n.code,{children:"moviefilein"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"descriptor_name"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"whatever descriptor is used for the node, using underscores in place of spaces"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"#"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"any digit that might be associated with the node"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"A few examples as reference:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"base_com"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"base_data"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"script_inst_data1"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"script_inst_data2"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"At the end of a rendering chain a null is added inside of a base:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"null_final"})}),"\n",(0,t.jsx)(n.p,{children:"A movie player uses two movie file in TOPs in order to facilitate seamless switching between videos. The two movie file in TOPs might be renamed in order to specify that they are the A or B deck:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"moviefilein_a"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"moviefilein_b"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"A series of TOP chains are used in order to composite a variety of thumbnails used for instancing geometry. Each TOP chain terminates in a null, and needs to be differentiated with a digit to allow for texture instancing:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"null_ui_thumbnail1"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"null_ui_thumbnail2"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"null_ui_thumbnail3"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"null_ui_thumbnail4"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"TOX Components should also follow this naming convention"}),"\n",(0,t.jsx)(n.h3,{id:"notable-exceptions",children:"Notable Exceptions"}),"\n",(0,t.jsx)(n.p,{children:"The most apparent exceptions to this rule are found in local/modules. Mods have the benefit of being accessible with the short hand:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"mod.textDATname.functionName"})}),"\n",(0,t.jsx)(n.p,{children:"This excellent feature can be ham-stringed by long text DAT names. As an example, we might imagine that we have a module we\u2019d like to use with the mod. shorthand. THat module\u2019s name might easily be something like \u201ctext_system_configuration\u201d when using our standard naming convention, inside of this module we might want to use a function called \u201cstart_up\u201d. This would mean that we\u2019d need to write something akin to:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"mod.text_system_configuration.start_up()"})}),"\n",(0,t.jsx)(n.p,{children:"in order to call this function. The shortening of this by the prefix \u201ctext_\u201d may not be a huge number of characters, but it helps provide a little bit of clarity in the reading a of the expression:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"mod.system_configuration.start_up()"})}),"\n",(0,t.jsx)(n.p,{children:"This also helps distinguish our module \u2013 which is essentially being accessed as a library \u2013 and a regular text DAT."}),"\n",(0,t.jsx)(n.h2,{id:"sizing",children:"Sizing"}),"\n",(0,t.jsx)(n.p,{children:"Like in any paradigm, programmers have strong feelings about the best way to format their programming space. With something like TouchDesigner, the spatialized element of this development platform creates another layer of potential meaning making and organizational space. This also creates opportunities for messy and disorganized habits to crop up. Touch makes it easier to quickly change the size of node to better see it \u2013 you might find yourself doing this for comments, rendering elements, control panels, chop channels, geometry \u2013 just about anything in fact. While there is some great utility in this, and you may find that you\u2019re able to create abstract art pieces with your network, if possible you should avoid unnecessary resizing. Why?! Perhaps the most important consideration is how multiple sizes change the legibility of your network. While it\u2019s not uncommon that you may find yourself enlarging elements in your network to better see them, it changes your ability to see the network from at a glance \u2013 to read the flow of the network without unhindered by an imposed frame of importance. Your decision to enlarge a particular TOP or DAT may have been in response to a pragmatic need \u2013 to an outsider, however, this choice reads \u2013 visually \u2013 as an indicator of significance. This injection of priority can undermine your fellow programmers ability to unbiasedly read the flow of information in your network \u2013 because they\u2019re trying to decode the implied meaning what may well be perceived as a indication of significance."}),"\n",(0,t.jsx)(n.p,{children:"Sometimes, however, you may find that you want to change the size of an operator for that very reason. What then are you to do? Consider using a command to set the size of your node \u2013 this can ensure consistent sizes that can be standardized across your networks. This is accessible from the op class:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"op( 'opName' ).nodeHeight = int"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"op( 'opName' ).nodeWidth = int"})]}),"\n",(0,t.jsx)(n.p,{children:"Height and width are expressed as network editor units. One square on the network is equal to 100 network editor units."}),"\n",(0,t.jsxs)(n.admonition,{title:"Do",type:"tip",children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Use consistent spacing, sizing, and clear organizational flows."}),"\n",(0,t.jsx)(n.li,{children:"Rely on the default sizes of nodes as a starting point"}),"\n",(0,t.jsx)(n.li,{children:"Consider turning off the adaptive sizing for nodes in the options dialogue box"}),"\n",(0,t.jsx)(n.li,{children:"Group operations together and consider when you might create modules for a * particular process in your network"}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(2007).A+"",width:"3840",height:"2306"})})]}),"\n",(0,t.jsxs)(n.admonition,{title:"Don\u2019t",type:"danger",children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Resize your nodes willy nilly"}),"\n",(0,t.jsx)(n.li,{children:"Use multiple sizes in your organization structure without providing a key to your viewer or fellow programmers"}),"\n",(0,t.jsx)(n.li,{children:"Use extremely large sized nodes. If another programmer resets your node sizes to better read your network, they\u2019ll be placed at great network distances from one another, making the first step in debugging your code an act of organization"}),"\n",(0,t.jsx)(n.li,{children:"Forget that your network is something someone else will invariably see, interact with, and need to understand \u2013 be nice to your future self, or to those that will come after you."}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(2534).A+"",width:"3840",height:"2318"})})]}),"\n",(0,t.jsx)(n.h2,{id:"wires",children:"Wires"}),"\n",(0,t.jsx)(n.p,{children:"Curved, straight, dotted, moving, static \u2013 the wires in TouchDesigner are a delight, some kind of series of mad scientists spaghetti code it\u2019s easy to fall in love with them, and easier still to make a mess of them. There are a few important features of wires to keep in mind when working."}),"\n",(0,t.jsxs)(n.admonition,{title:"Do",type:"tip",children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Think carefully about your node arrangement and how this will affect your wires \u2013 what will you cross, obscure, or hide?"}),"\n",(0,t.jsx)(n.li,{children:"Leave room for clear paths and flows in your network. A little more empty spaces is generally better than too little."}),"\n",(0,t.jsx)(n.li,{children:"Think about the proximity of export nodes to their targets \u2013 are you creating long or confusing export paths that will be difficult to understand visually?"}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(334).A+"",width:"3840",height:"2318"})})]}),"\n",(0,t.jsxs)(n.admonition,{title:"Don\u2019t",type:"danger",children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Reverse order in node connections"}),"\n",(0,t.jsx)(n.li,{children:"Vertically stack operators and connect them with S-curves."}),"\n",(0,t.jsx)(n.li,{children:"Dock and hide important nodes \u2013 scripts, notes, shaders, are all examples of acceptable items. NEVER dock and hide essential network elements. By hiding an essential part of your network, you make it exponentially more difficult for another programmer to debug your network, or understand your process."}),"\n",(0,t.jsx)(n.li,{children:"Arrange your nodes haphazardly"}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(1072).A+"",width:"3840",height:"2318"})})]}),"\n",(0,t.jsx)(n.h2,{id:"visual-debugging",children:"Visual Debugging"}),"\n",(0,t.jsx)(n.h3,{id:"animation",children:"Animation"}),"\n",(0,t.jsx)(n.p,{children:"Animated wires help you see, at a glance, that something is cooking. This is a visual reminder that a portion of your network is being processed right before your very eyes. This is often helpful in understanding how to debug a portion of your network as it allows you to find unnecessary cycles visually rather than with print statements."}),"\n",(0,t.jsx)(n.h3,{id:"links",children:"Links"}),"\n",(0,t.jsx)(n.p,{children:"The dotted lines that connect ops are refereed to as links, not wires. Wires are inter-operator connections between data types (families), links, on the other hand, bridge between operator types and between data types. These are often used to drive parameters, or animate some portion of the network. Just like with wires, animated links are an indicator that a process is cooking. This is another important visual debugging mechanism when working on a project."}),"\n",(0,t.jsx)(n.h3,{id:"docked",children:"Docked"}),"\n",(0,t.jsx)(n.p,{children:"Docked ops have a straight line, similar to a link in color, that connects an operator to another. Docking an operator keeps it at an established x and y offset from its partner."}),"\n",(0,t.jsx)(n.p,{children:"While there isn\u2019t a defined flow, there is an implied western bias in a left to right flow in networks. While you certainly can organize your networks right to left, it will make for some backwards flipping lines. Similarly, organizing top to bottom will creating hard snaking S curves in your networks. While none of these things are inherently bad, they can make it difficult for another programmer to interpret your intentions. Top to bottom or bottom to top is perhaps the most dangerous. This particular arrangement makes it difficult to see, at a glance, the intended flow of operations."}),"\n",(0,t.jsx)(n.h2,{id:"links-to-derivatives-official-docs",children:"Links to Derivative's official docs"})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},2007:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/consistence-sizees-7ae6dfe4eb40fc70a500313a5d15cf55.png"},334:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/do-wire-arrangment-8f907e9a3ca0ab3a87400be041b4a432.png"},1072:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/dont-wire-arrangment-831e601668d3e8b8ff8ecce8750c39f7.png"},2534:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/inconsistence-sizees-f2ba08f719b657acc3f42f69f43cf307.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(6540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);