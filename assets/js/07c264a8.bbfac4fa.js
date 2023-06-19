"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9045],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(o),u=a,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return o?n.createElement(h,r(r({ref:t},d),{},{components:o})):n.createElement(h,r({ref:t},d))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=o[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},5288:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=o(7462),a=(o(7294),o(3905));const i={title:"Auto-Complete",sidebar_position:4,description:"An overview of Python autocomplete in VS Code"},r="Auto-Complete",l={unversionedId:"SM-guide/python-in-td/py-td-auto-complete",id:"SM-guide/python-in-td/py-td-auto-complete",title:"Auto-Complete",description:"An overview of Python autocomplete in VS Code",source:"@site/docs/SM-guide/python-in-td/py-td-auto-complete.md",sourceDirName:"SM-guide/python-in-td",slug:"/SM-guide/python-in-td/py-td-auto-complete",permalink:"/TouchDesigner-StyleGuide/docs/SM-guide/python-in-td/py-td-auto-complete",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SM-guide/python-in-td/py-td-auto-complete.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Auto-Complete",sidebar_position:4,description:"An overview of Python autocomplete in VS Code"},sidebar:"tutorialSidebar",previous:{title:"Local Modules",permalink:"/TouchDesigner-StyleGuide/docs/SM-guide/python-in-td/py-local"},next:{title:"GLSL",permalink:"/TouchDesigner-StyleGuide/docs/category/glsl"}},s={},p=[{value:"Your Code Editor and Python",id:"your-code-editor-and-python",level:2},{value:"Importing - back to the basics",id:"importing---back-to-the-basics",level:2},{value:"what is <code>import</code>",id:"what-is-import",level:3},{value:"Where does it come from?",id:"where-does-it-come-from",level:3},{value:"Writing our own Module",id:"writing-our-own-module",level:2},{value:"Using a module example",id:"using-a-module-example",level:3},{value:"Using a class example",id:"using-a-class-example",level:3},{value:"Back to TouchDesigner",id:"back-to-touchdesigner",level:2},{value:"An Extension Manager",id:"an-extension-manager",level:3},{value:"The Magic of Local Modules",id:"the-magic-of-local-modules",level:2},{value:"It&#39;s okay to be confused",id:"its-okay-to-be-confused",level:2},{value:"Sample Repo",id:"sample-repo",level:3}],d={toc:p},c="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"auto-complete"},"Auto-Complete"),(0,a.kt)("h2",{id:"your-code-editor-and-python"},"Your Code Editor and Python"),(0,a.kt)("p",null,"This short diversion is for TouchDesigner devs who don't have a strong Python background. The way we use Python in TouchDesigner is a little different than the development of a pure Python App. The description that is going to follow is a bit of a simplification of what's actually happening in exchange for brevity. If you're interested, it's worth diving into the complete description of the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.python.org/3/reference/import.html"},"Python import system"),"."),(0,a.kt)("p",null,"It's worth taking a moment to revisit these ideas, as having a deeper understanding of how your code editor understands and works with Python is going to impact our ability to have an autocomplete system in place. Our goal, in this exercise, is for our code editor to autocomplete the methods we author in our extensions and modules. This significantly increases our development speed, and reduces the opportunity for errors - but it does stand on understanding some of the deeper technical elements that Python stands on top of. "),(0,a.kt)("p",null,"For all of these examples and discussion we're working with ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code")," as a code editor."),(0,a.kt)("h2",{id:"importing---back-to-the-basics"},"Importing - back to the basics"),(0,a.kt)("p",null,"To start, we need to first visit some basics of the Python paradigm. "),(0,a.kt)("h3",{id:"what-is-import"},"what is ",(0,a.kt)("inlineCode",{parentName:"h3"},"import")),(0,a.kt)("p",null,'The import keyword is used to invoke the python import system. Broadly speaking, in many languages code is written in smaller modules or libraries that are then included in larger projects. This organizes code into smaller chunks that are both reusable and more easily maintained (developing smaller libraries that allow parallel development or management is sometimes referred to as "',(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Orthogonality_(programming)"},"orthogonal"),'" ).'),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," keyword tells Python that there\u2019s a set of functions outside of the default python tool set that are going to be accessed in any given module or library. As a best practice, import statements typically happen at the top of a module, and are outside of any functions so that their scope (your ability to use them) allows them to be used by any function in that module."),(0,a.kt)("p",null,"For example - this syntax is also completely functional:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def UpdateDateTimeBuffer( datetime_buffer ):\n    import datetime\n    datetime_buffer.clear()\n    datetime_object = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")\n    datetime_buffer.write(datetime_object)\n    return\n\ndef FetchDateAndTime():\n    import datetime \n    return datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")\n')),(0,a.kt)("p",null,"The above is just redundant - if we only import ",(0,a.kt)("inlineCode",{parentName:"p"},"dateteime")," in the local scope of function, no other function can use it, and we subsequently need to re-import in every function. This is why you typically see this instead:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import datetime\n\ndef UpdateDateTimeBuffer( datetime_buffer ):\n    datetime_buffer.clear()\n    datetime_object = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")\n    datetime_buffer.write(datetime_object)\n    return\n\ndef FetchDateAndTime():\n    return datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")\n')),(0,a.kt)("p",null,"The datetime library is available to all functions, which is typically what we want. As a final note, you can technically do this, but you shouldn't:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def UpdateDateTimeBuffer( datetime_buffer ):\n    datetime_buffer.clear()\n    datetime_object = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")\n    datetime_buffer.write(datetime_object)\n    return\n\nimport datetime\ndef FetchDateAndTime():\n    return datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")\n')),(0,a.kt)("p",null,"{: .warning}\nThis is considered bad form since it would be difficult for another developer to find that hidden import statement."),(0,a.kt)("h3",{id:"where-does-it-come-from"},"Where does it come from?"),(0,a.kt)("p",null,"To python, the import statement typically refers to a .py file or folder on your computer. datetime, for example can be found in your TouchDesigner installer folder, a typical installation location is: "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\Derivative\\TouchDesigner.2021.15240\\bin\\Lib")),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(5951).Z,width:"784",height:"151"})),(0,a.kt)("h2",{id:"writing-our-own-module"},"Writing our own Module"),(0,a.kt)("p",null,"We're going to do a pure Python review of importing. This assumes that you already have Python installed on your machine, and that you're comfortable with a code editor. It's okay if you're not there yet, just know this section may feel like it's leaving out smaller steps."),(0,a.kt)("h3",{id:"using-a-module-example"},"Using a module example"),(0,a.kt)("p",null,"Let's start by creating a directory called ",(0,a.kt)("inlineCode",{parentName:"p"},"python-import-example"),". In here we're going to create two files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"example-python-script.py")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"someMod.py"))),(0,a.kt)("p",null,"Let's open this directory with our code editor, and also open up the console. You should have something like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(471).Z,width:"1920",height:"1050"})),(0,a.kt)("p",null,"Next let's add a simple function to our ",(0,a.kt)("inlineCode",{parentName:"p"},"someMod.py")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def My_great_function(some_number:int) -> None:\n    print(some_number)\n")),(0,a.kt)("p",null,"Let's save that while we're at it, and we should now have something that looks like this in our code editor:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(2128).Z,width:"1920",height:"1050"})),(0,a.kt)("p",null,"Next let's head back to our ",(0,a.kt)("inlineCode",{parentName:"p"},"example-python-script.py")," file. At the top of this file we'll use the ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," keyword to the other code we just wrote as a module:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import someMod\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(7071).Z,width:"1920",height:"1050"})),(0,a.kt)("p",null,"VS Code knows we're using Python - and as such, it will now offer to autocomplete code for us. We can see this in action if we start by typing ",(0,a.kt)("inlineCode",{parentName:"p"},"someMod.")," - at this point we'll see a list of all the available functions that are in the module we've created:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(1931).Z,width:"1920",height:"1050"})),(0,a.kt)("p",null,"This is great, in part because it keeps us in this module, and not going back to try and remember what we wrote. If we have doc strings in our other module those will also appear for us in the autocomplete (a quick note, I went back and added a doc string so we could see this in action)."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(972).Z,width:"1920",height:"1050"})),(0,a.kt)("h3",{id:"using-a-class-example"},"Using a class example"),(0,a.kt)("p",null,"Let's keep moving forward from this idea, and instead of working with just a module, let's work with a class. In Object Oriented Programming, we think of class objects as templates for a specific instance of that item. When we think of a single instance of a class object, that design pattern is referred to a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Singleton_pattern"},"Singleton"),". Most of the extensions we write in TouchDesigner are Singletons, and when we're organizing our TouchDesigner networks into bigger components, like a ",(0,a.kt)("inlineCode",{parentName:"p"},"Communication")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Data")," base that severs our whole project, this is Singleton."),(0,a.kt)("p",null,"With that in mind let's look at how we we might write an import pattern for a Singleton. Let's start by adding a directory called ",(0,a.kt)("inlineCode",{parentName:"p"},"Foo")," to our folder. Next we're going to add the following files in that directory:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"__init__.py")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FooEXT.py"))),(0,a.kt)("p",null,"Next let's add a little bit of code to the ",(0,a.kt)("inlineCode",{parentName:"p"},"FooEXT.py")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class FooSingleton:\n    \n    def __init__(self):\n        print('Ground control to Major Foo')\n    \n    def Bar(self):\n        print('Sometimes you eat the bar, and sometimes the bar eats you')\n")),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"__init__.py")," file we can now add the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import FooEXT\n\nMyFoo = FooEXT.FooSingleton\n")),(0,a.kt)("p",null,"Here we import ",(0,a.kt)("inlineCode",{parentName:"p"},"FooEXT")," and then create a new variable ",(0,a.kt)("inlineCode",{parentName:"p"},"MyFoo")," that points to the ",(0,a.kt)("inlineCode",{parentName:"p"},"FooSingleton")," class object in ",(0,a.kt)("inlineCode",{parentName:"p"},"FooEXT"),"."),(0,a.kt)("p",null,"That means back in our ",(0,a.kt)("inlineCode",{parentName:"p"},"example-python-script.py")," file we can do the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import someMod\nimport Foo\n\nsomeMod.My_great_function(10)\nFoo.MyFoo.Bar()\n")),(0,a.kt)("p",null,"In VS Code, we now also get the autocomplete options from our Singleton:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(6289).Z,width:"1920",height:"1050"})),(0,a.kt)("h2",{id:"back-to-touchdesigner"},"Back to TouchDesigner"),(0,a.kt)("p",null,"In TouchDesigner this gets both complicated, and interesting. Where this becomes complicated is in relationship to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.derivative.ca/MOD_Class"},"MOD Class"),". The contents of any DAT can be treated as though they were a module. In TouchDesigner the ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," keyword operates on DATs, the way ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," works on files in pure Python. We can take advantage of both this so that we can both use extensions as you might in TouchDesigner, and get the advantages of autocomplete in VS Code. "),(0,a.kt)("p",null,"To get started, we have to make a few compromises. For this to work best, we need to first centralize where our extensions are going to live both in TouchDesigner and in our project's directory structure. We also have to commit to using external files for our extensions. "),(0,a.kt)("h3",{id:"an-extension-manager"},"An Extension Manager"),(0,a.kt)("p",null,"In TouchDesigner we're going to keep all of our extensions in an operator called ",(0,a.kt)("inlineCode",{parentName:"p"},"base_ext_manager"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(211).Z,width:"1920",height:"1050"})),(0,a.kt)("p",null,"In our extension manager we'll have all of our extensions in DATs whose names match their file names in python:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(7629).Z,width:"1920",height:"1050"})),(0,a.kt)("p",null,"In VS Code we'll see that we've created a new directory for each extension, and in that directory is an ",(0,a.kt)("inlineCode",{parentName:"p"},"__init__.py")," file and the extension file. The name space is important here, so take a moment to see the pattern we've created. "),(0,a.kt)("p",null,"Finally, we create one extra module called ",(0,a.kt)("inlineCode",{parentName:"p"},"lookup")," which is going to act as the bridge for both TouchDesigner and VS Code. Here we're going to perform a little magic trick that using type hinting (our ability to tell Python that an object is supposed to match an known object)."),(0,a.kt)("p",null,"Let's look at what's in ",(0,a.kt)("inlineCode",{parentName:"p"},"lookup"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from __future__ import annotations\n\ntry: \n    import Project\n    import Data\n    import Output\n\nexcept:\n    pass\n\nPROJECT:Project.Project = op.PROJECT\nDATA:Data.Data = op.DATA\nOUTPUT:Output.Output = op.OUTPUT\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"annotations")," let's us take advantage of a try and accept block that's only for VS Code. This let's VS Code interpret our import statement in order to offer us code completion. This let's us tell VS Code that our variable ",(0,a.kt)("inlineCode",{parentName:"p"},"PROJECT")," in code is actually a ",(0,a.kt)("inlineCode",{parentName:"p"},"Project.Project")," object (which is our extension Singleton), while TouchDesigner will see this variable as pointing to the global op shortcut ",(0,a.kt)("inlineCode",{parentName:"p"},"op.PROJECT"),". In this way, the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"PROJECT")," to TouchDesigner is the operator (which has a promoted extension), and to VS Code ",(0,a.kt)("inlineCode",{parentName:"p"},"PROJECT")," is a proper Python Object. "),(0,a.kt)("h2",{id:"the-magic-of-local-modules"},"The Magic of Local Modules"),(0,a.kt)("p",null,"This is all great for Extensions, but there is one other feature of the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.derivative.ca/MOD_Class"},"MOD Class")," that we can take advantage of in TouchDesigner. The MOD Class allows the use of two nested base COMPs ",(0,a.kt)("inlineCode",{parentName:"p"},"local/modules")," to hold the a collection of Python modules that are the first location TouchDesigner will search during import. We can use this to our advantage when building reusable libraries that we want to keep out of extensions."),(0,a.kt)("p",null,"Let's say, for example, that we want to have access to the ",(0,a.kt)("inlineCode",{parentName:"p"},"datetime")," module in our extensions. It would be redundant to import this into each extension. Instead we might create a collection of tools that follow a functional paradigm that we can then use from a single location. This reduces the likelihood that we'll repeat ourselves, and will help us keep a cleaner code base."),(0,a.kt)("p",null,"To do this let's first create a new directory in our ",(0,a.kt)("inlineCode",{parentName:"p"},"td-python")," directory called ",(0,a.kt)("inlineCode",{parentName:"p"},"projectTools"),". In this directory we'll create two files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"__init__.py")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MyTime.py"))),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"__init__.py")," file let's import our ",(0,a.kt)("inlineCode",{parentName:"p"},"MyTime.py")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import MyTime\n")),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"MyTime")," we can add a simple function for now:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import datetime\n\ndef TD_now():\n    return datetime.datetime.now()\n")),(0,a.kt)("p",null,"You should have something that looks like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(6426).Z,width:"1920",height:"1050"})),(0,a.kt)("p",null,"in TouchDesigner let's start by creating our base ops, let's next navigate into ",(0,a.kt)("inlineCode",{parentName:"p"},"local/modules")," and add two text DATs. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(2822).Z,width:"1920",height:"1050"})),(0,a.kt)("p",null,"We can now go back to our ",(0,a.kt)("inlineCode",{parentName:"p"},"Project")," extension and import ",(0,a.kt)("inlineCode",{parentName:"p"},"projectTools"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import lookup\nimport projectTools\n\nclass Project:\n\n    def __init__(self, owner_op):\n        self.Owner_op = owner_op\n        print(f'Project Init at | {projectTools.MyTime.TD_now()}')\n\n    def Touch_start(self):\n        print('Running Touch Start | Project')\n        lookup.DATA.Touch_start()\n        lookup.OUTPUT.Touch_start()\n\n    def Promoted_project_method(self):\n        ...\n")),(0,a.kt)("h2",{id:"its-okay-to-be-confused"},"It's okay to be confused"),(0,a.kt)("p",null,"This is a confusing concept - in part because of how extensions and modules work in TouchDesigner. The benefits here, however, are that we can now have a more seamless development workflow in VS Code. It also means that when collaborating with others, you can treat extensions  and modules much more like proper Python."),(0,a.kt)("h3",{id:"sample-repo"},"Sample Repo"),(0,a.kt)("p",null,"If you're still scratching your head, that's okay. Download this repo to see how these concepts work in action."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mir-lab/TouchDesigner-python-autocomplete-example"},"MIR Sample Autocomplete")))}m.isMDXComponent=!0},471:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/python-simple-example-01-89bc5f4ddace33822763a07a4ff86198.png"},2128:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/python-simple-example-02-504351d3f9a5dc2510397a9515bd84c0.png"},7071:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/python-simple-example-03-4880bb470f85dd0dfd2875503997ed4f.png"},1931:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/python-simple-example-04-fbaf88654e2826b1c794b5c85ee78343.png"},972:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/python-simple-example-05-15153c335308cafb2c5995519cc695c0.png"},6289:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/python-simple-example-06-29538af1a98f4badc2804887e33d8935.png"},211:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/python-simple-example-07-38aaa73dcb053a6a9c63c856a70a9a6b.png"},7629:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/python-simple-example-08-8496111f95c58aa6b74a830291bef222.png"},2822:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/python-simple-example-10-a7d796942dcdc2cc282fb233a75b2a98.png"},6426:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/python-simple-example-11-1d69d7bfa82d85cf65f998b44701aafc.png"},5951:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/python-standard-lib-b9f588b7ead07e7ef295e6070eae6597.png"}}]);