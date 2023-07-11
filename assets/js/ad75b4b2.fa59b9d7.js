"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1539],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return n?i.createElement(h,r(r({ref:t},u),{},{components:n})):i.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<a;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(7462),o=(n(7294),n(3905));const a={title:"Nodes",description:"Working with Nodes",slug:"/SM-guide/nodes"},r="Nodes",l={unversionedId:"SM-guide/nodes",id:"SM-guide/nodes",title:"Nodes",description:"Working with Nodes",source:"@site/docs/SM-guide/003-nodes.md",sourceDirName:"SM-guide",slug:"/SM-guide/nodes",permalink:"/docs/SM-guide/nodes",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Nodes",description:"Working with Nodes",slug:"/SM-guide/nodes"},sidebar:"tutorialSidebar",previous:{title:"Preferences",permalink:"/docs/SM-guide/preferences"},next:{title:"Network Organization",permalink:"/docs/SM-guide/network-organization"}},s={},d=[{value:"Notable Exceptions",id:"notable-exceptions",level:2},{value:"Sizing",id:"sizing",level:2},{value:"Do",id:"do",level:3},{value:"Don\u2019t",id:"dont",level:3},{value:"Wires",id:"wires",level:2},{value:"Animation",id:"animation",level:2},{value:"Links",id:"links",level:2},{value:"Docked",id:"docked",level:2},{value:"Do",id:"do-1",level:3},{value:"Don\u2019t",id:"dont-1",level:3},{value:"Links to Derivative&#39;s official docs",id:"links-to-derivatives-official-docs",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nodes"},"Nodes"),(0,o.kt)("p",null,"This section stands as an expansion on the above naming convention style guide. After much discussion, the current practice for operator naming follows the python style guide of using underscores rather than camel case. This appears in a number of various locations in your network, and requires special attention when it comes to renaming nodes. When renaming an operator or when terminating with a null the following naming convention should be used: ",(0,o.kt)("inlineCode",{parentName:"p"},"{operator}_{descriptor}_{name}{#}")),(0,o.kt)("p",null,"The above can be decoded:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Element"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"operator")),(0,o.kt)("td",{parentName:"tr",align:"left"},"the operator type, e.g. ",(0,o.kt)("inlineCode",{parentName:"td"},"moviefilein"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"descriptor_name")),(0,o.kt)("td",{parentName:"tr",align:"left"},"whatever descriptor is used for the node, using underscores in place of spaces")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"#")),(0,o.kt)("td",{parentName:"tr",align:"left"},"any digit that might be associated with the node")))),(0,o.kt)("p",null,"A few examples as reference:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"base_com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"base_data")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"script_inst_data1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"script_inst_data2"))),(0,o.kt)("p",null,"At the end of a rendering chain a null is added inside of a base:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"null_final")),(0,o.kt)("p",null,"A movie player uses two movie file in TOPs in order to facilitate seamless switching between videos. The two movie file in TOPs might be renamed in order to specify that they are the A or B deck:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"moviefilein_a")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"moviefilein_b"))),(0,o.kt)("p",null,"A series of TOP chains are used in order to composite a variety of thumbnails used for instancing geometry. Each TOP chain terminates in a null, and needs to be differentiated with a digit to allow for texture instancing:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"null_ui_thumbnail1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"null_ui_thumbnail2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"null_ui_thumbnail3")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"null_ui_thumbnail4"))),(0,o.kt)("p",null,"TOX Components should also follow this naming convention"),(0,o.kt)("h2",{id:"notable-exceptions"},"Notable Exceptions"),(0,o.kt)("p",null,"The most apparent exceptions to this rule are found in local/modules. Mods have the benefit of being accessible with the short hand:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mod.textDATname.functionName")),(0,o.kt)("p",null,"This excellent feature can be ham-stringed by long text DAT names. As an example, we might imagine that we have a module we\u2019d like to use with the mod. shorthand. THat module\u2019s name might easily be something like \u201ctext_system_configuration\u201d when using our standard naming convention, inside of this module we might want to use a function called \u201cstart_up\u201d. This would mean that we\u2019d need to write something akin to:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mod.text_system_configuration.start_up()")),(0,o.kt)("p",null,"in order to call this function. The shortening of this by the prefix \u201ctext_\u201d may not be a huge number of characters, but it helps provide a little bit of clarity in the reading a of the expression:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mod.system_configuration.start_up()")),(0,o.kt)("p",null,"This also helps distinguish our module \u2013 which is essentially being accessed as a library \u2013 and a regular text DAT."),(0,o.kt)("h2",{id:"sizing"},"Sizing"),(0,o.kt)("p",null,"Like in any paradigm, programmers have strong feelings about the best way to format their programming space. With something like TouchDesigner, the spatialized element of this development platform creates another layer of potential meaning making and organizational space. This also creates opportunities for messy and disorganized habits to crop up. Touch makes it easier to quickly change the size of node to better see it \u2013 you might find yourself doing this for comments, rendering elements, control panels, chop channels, geometry \u2013 just about anything in fact. While there is some great utility in this, and you may find that you\u2019re able to create abstract art pieces with your network, if possible you should avoid unnecessary resizing. Why?! Perhaps the most important consideration is how multiple sizes change the legibility of your network. While it\u2019s not uncommon that you may find yourself enlarging elements in your network to better see them, it changes your ability to see the network from at a glance \u2013 to read the flow of the network without unhindered by an imposed frame of importance. Your decision to enlarge a particular TOP or DAT may have been in response to a pragmatic need \u2013 to an outsider, however, this choice reads \u2013 visually \u2013 as an indicator of significance. This injection of priority can undermine your fellow programmers ability to unbiasedly read the flow of information in your network \u2013 because they\u2019re trying to decode the implied meaning what may well be perceived as a indication of significance."),(0,o.kt)("p",null,"Sometimes, however, you may find that you want to change the size of an operator for that very reason. What then are you to do? Consider using a command to set the size of your node \u2013 this can ensure consistent sizes that can be standardized across your networks. This is accessible from the op class:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"op( 'opName' ).nodeHeight = int"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"op( 'opName' ).nodeWidth = int")),(0,o.kt)("p",null,"Height and width are expressed as network editor units. One square on the network is equal to 100 network editor units."),(0,o.kt)("h3",{id:"do"},"Do"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use consistent spacing, sizing, and clear organizational flows."),(0,o.kt)("li",{parentName:"ul"},"Rely on the default sizes of nodes as a starting point"),(0,o.kt)("li",{parentName:"ul"},"Consider turning off the adaptive sizing for nodes in the options dialogue box"),(0,o.kt)("li",{parentName:"ul"},"Group operations together and consider when you might create modules for a * particular process in your network")),(0,o.kt)("h3",{id:"dont"},"Don\u2019t"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Resize your nodes willy nilly (sorry Willy)"),(0,o.kt)("li",{parentName:"ul"},"Use multiple sizes in your organization structure without providing a key to your viewer or fellow programmers"),(0,o.kt)("li",{parentName:"ul"},"Use extremely large sized nodes. If another programmer resets your node sizes to better read your network, they\u2019ll be placed at great network distances from one another, making the first step in debugging your code an act of organization"),(0,o.kt)("li",{parentName:"ul"},"Forget that your network is something someone else will invariably see, interact with, and need to understand \u2013 be nice to your future self, or to those that will come after you.")),(0,o.kt)("h2",{id:"wires"},"Wires"),(0,o.kt)("p",null,"Curved, straight, dotted, moving, static \u2013 the wires in TouchDesigner are a delight, some kind of series of mad scientists spaghetti code it\u2019s easy to fall in love with them, and easier still to make a mess of them. There are a few important features of wires to keep in mind when working."),(0,o.kt)("h2",{id:"animation"},"Animation"),(0,o.kt)("p",null,"Animated wires help you see, at a glance, that something is cooking. This is a visual reminder that a portion of your network is being processed right before your very eyes. This is often helpful in understanding how to debug a portion of your network as it allows you to find unnecessary cycles visually rather than with print statements."),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("p",null,"The dotted lines that connect ops are refereed to as links, not wires. Wires are inter-operator connections between data types (families), links, on the other hand, bridge between operator types and between data types. These are often used to drive parameters, or animate some portion of the network. Just like with wires, animated links are an indicator that a process is cooking. This is another important visual debugging mechanism when working on a project."),(0,o.kt)("h2",{id:"docked"},"Docked"),(0,o.kt)("p",null,"Docked ops have a straight line, similar to a link in color, that connects an operator to another. Docking an operator keeps it at an established x and y offset from its partner."),(0,o.kt)("p",null,"While there isn\u2019t a defined flow, there is an implied western bias in a left to right flow in networks. While you certainly can organize your networks right to left, it will make for some backwards flipping lines. Similarly, organizing top to bottom will creating hard snaking S curves in your networks. While none of these things are inherently bad, they can make it difficult for another programmer to interpret your intentions. Top to bottom or bottom to top is perhaps the most dangerous. This particular arrangement makes it difficult to see, at a glance, the intended flow of operations."),(0,o.kt)("h3",{id:"do-1"},"Do"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Think carefully about your node arrangement and how this will affect your wires \u2013 what will you cross, obscure, or hide?"),(0,o.kt)("li",{parentName:"ul"},"Leave room for clear paths and flows in your network. A little more empty spaces is generally better than too little."),(0,o.kt)("li",{parentName:"ul"},"Think about the proximity of export nodes to their targets \u2013 are you creating long or confusing export paths that will be difficult to understand visually?")),(0,o.kt)("h3",{id:"dont-1"},"Don\u2019t"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reverse order in node connections"),(0,o.kt)("li",{parentName:"ul"},"Vertically stack operators and connect them with S-curves."),(0,o.kt)("li",{parentName:"ul"},"Dock and hide important nodes \u2013 scripts, notes, shaders, are all examples of acceptable items. NEVER dock and hide essential network elements. By hiding an essential part of your network, you make it exponentially more difficult for another programmer to debug your network, or understand your process."),(0,o.kt)("li",{parentName:"ul"},"Arrange your nodes haphazardly")),(0,o.kt)("h2",{id:"links-to-derivatives-official-docs"},"Links to Derivative's official docs"))}c.isMDXComponent=!0}}]);