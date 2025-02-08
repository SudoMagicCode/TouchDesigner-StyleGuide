"use strict";(self.webpackChunktdStyleGuide=self.webpackChunktdStyleGuide||[]).push([[8468],{6093:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"SM-guide/python-in-td/py-td-auto-complete","title":"Auto-Complete","description":"An overview of Python autocomplete in VS Code","source":"@site/docs/SM-guide/python-in-td/004-py-td-auto-complete.md","sourceDirName":"SM-guide/python-in-td","slug":"/SM-guide/python-in-td/py-td-auto-complete","permalink":"/docs/SM-guide/python-in-td/py-td-auto-complete","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Auto-Complete","sidebar_position":4,"description":"An overview of Python autocomplete in VS Code"},"sidebar":"tutorialSidebar","previous":{"title":"Local Modules","permalink":"/docs/SM-guide/python-in-td/local-modules"},"next":{"title":"Python Doc Strings","permalink":"/docs/SM-guide/python-in-td/py-td-doc-strings"}}');var i=o(4848),s=o(8453);const a={title:"Auto-Complete",sidebar_position:4,description:"An overview of Python autocomplete in VS Code"},r="Auto-Complete",d={},l=[{value:"Your Code Editor and Python",id:"your-code-editor-and-python",level:2},{value:"Importing - back to the basics",id:"importing---back-to-the-basics",level:2},{value:"what is <code>import</code>",id:"what-is-import",level:3},{value:"Where does it come from?",id:"where-does-it-come-from",level:3},{value:"Writing our own Module",id:"writing-our-own-module",level:2},{value:"Using a module example",id:"using-a-module-example",level:3},{value:"Using a class example",id:"using-a-class-example",level:3},{value:"Back to TouchDesigner",id:"back-to-touchdesigner",level:2},{value:"An Extension Manager",id:"an-extension-manager",level:3},{value:"The Magic of Local Modules",id:"the-magic-of-local-modules",level:2},{value:"It&#39;s okay to be confused",id:"its-okay-to-be-confused",level:2},{value:"Sample Repo",id:"sample-repo",level:3},{value:"Links to Derivative&#39;s official docs",id:"links-to-derivatives-official-docs",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"auto-complete",children:"Auto-Complete"})}),"\n",(0,i.jsx)(t.h2,{id:"your-code-editor-and-python",children:"Your Code Editor and Python"}),"\n",(0,i.jsxs)(t.p,{children:["This short diversion is for TouchDesigner devs who don't have a strong Python background. The way we use Python in TouchDesigner is a little different than the development of a pure Python App. The description that is going to follow is a bit of a simplification of what's actually happening in exchange for brevity. If you're interested, it's worth diving into the complete description of the ",(0,i.jsx)(t.a,{href:"https://docs.python.org/3/reference/import.html",children:"Python import system"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"It's worth taking a moment to revisit these ideas, as having a deeper understanding of how your code editor understands and works with Python is going to impact our ability to have an autocomplete system in place. Our goal, in this exercise, is for our code editor to autocomplete the methods we author in our extensions and modules. This significantly increases our development speed, and reduces the opportunity for errors - but it does stand on understanding some of the deeper technical elements that Python stands on top of."}),"\n",(0,i.jsxs)(t.p,{children:["For all of these examples and discussion we're working with ",(0,i.jsx)(t.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"})," as a code editor."]}),"\n",(0,i.jsx)(t.h2,{id:"importing---back-to-the-basics",children:"Importing - back to the basics"}),"\n",(0,i.jsx)(t.p,{children:"To start, we need to first visit some basics of the Python paradigm."}),"\n",(0,i.jsxs)(t.h3,{id:"what-is-import",children:["what is ",(0,i.jsx)(t.code,{children:"import"})]}),"\n",(0,i.jsxs)(t.p,{children:['The import keyword is used to invoke the python import system. Broadly speaking, in many languages code is written in smaller modules or libraries that are then included in larger projects. This organizes code into smaller chunks that are both reusable and more easily maintained (developing smaller libraries that allow parallel development or management is sometimes referred to as "',(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Orthogonality_(programming)",children:"orthogonal"}),'" ).']}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"import"})," keyword tells Python that there\u2019s a set of functions outside of the default python tool set that are going to be accessed in any given module or library. As a best practice, import statements typically happen at the top of a module, and are outside of any functions so that their scope (your ability to use them) allows them to be used by any function in that module."]}),"\n",(0,i.jsx)(t.p,{children:"For example - this syntax is also completely functional:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'def UpdateDateTimeBuffer( datetime_buffer ):\n    import datetime\n    datetime_buffer.clear()\n    datetime_object = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")\n    datetime_buffer.write(datetime_object)\n    return\n\ndef FetchDateAndTime():\n    import datetime\t\n    return datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The above is just redundant - if we only import ",(0,i.jsx)(t.code,{children:"dateteime"})," in the local scope of function, no other function can use it, and we subsequently need to re-import in every function. This is why you typically see this instead:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'import datetime\n\ndef UpdateDateTimeBuffer( datetime_buffer ):\n    datetime_buffer.clear()\n    datetime_object = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")\n    datetime_buffer.write(datetime_object)\n    return\n\ndef FetchDateAndTime():\n    return datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")\n'})}),"\n",(0,i.jsx)(t.p,{children:"The datetime library is available to all functions, which is typically what we want. As a final note, you can technically do this, but you shouldn't:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'def UpdateDateTimeBuffer( datetime_buffer ):\n    datetime_buffer.clear()\n    datetime_object = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")\n    datetime_buffer.write(datetime_object)\n    return\n\nimport datetime\ndef FetchDateAndTime():\n    return datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"This is considered bad form since it would be difficult for another developer to find that hidden import statement."})}),"\n",(0,i.jsx)(t.h3,{id:"where-does-it-come-from",children:"Where does it come from?"}),"\n",(0,i.jsx)(t.p,{children:"To python, the import statement typically refers to a .py file or folder on your computer. datetime, for example can be found in your TouchDesigner installer folder, a typical installation location is:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"C:\\Program Files\\Derivative\\TouchDesigner.2021.15240\\bin\\Lib"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:o(1856).A+"",width:"784",height:"151"})}),"\n",(0,i.jsx)(t.h2,{id:"writing-our-own-module",children:"Writing our own Module"}),"\n",(0,i.jsx)(t.p,{children:"We're going to do a pure Python review of importing. This assumes that you already have Python installed on your machine, and that you're comfortable with a code editor. It's okay if you're not there yet, just know this section may feel like it's leaving out smaller steps."}),"\n",(0,i.jsx)(t.h3,{id:"using-a-module-example",children:"Using a module example"}),"\n",(0,i.jsxs)(t.p,{children:["Let's start by creating a directory called ",(0,i.jsx)(t.code,{children:"python-import-example"}),". In here we're going to create two files:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"example-python-script.py"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"someMod.py"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Let's open this directory with our code editor, and also open up the console. You should have something like this:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:o(7776).A+"",width:"1920",height:"1050"})}),"\n",(0,i.jsxs)(t.p,{children:["Next let's add a simple function to our ",(0,i.jsx)(t.code,{children:"someMod.py"})," file."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"def My_great_function(some_number:int) -> None:\n    print(some_number)\n"})}),"\n",(0,i.jsx)(t.p,{children:"Let's save that while we're at it, and we should now have something that looks like this in our code editor:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:o(7627).A+"",width:"1920",height:"1050"})}),"\n",(0,i.jsxs)(t.p,{children:["Next let's head back to our ",(0,i.jsx)(t.code,{children:"example-python-script.py"})," file. At the top of this file we'll use the ",(0,i.jsx)(t.code,{children:"import"})," keyword to the other code we just wrote as a module:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"import someMod\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:o(6498).A+"",width:"1920",height:"1050"})}),"\n",(0,i.jsxs)(t.p,{children:["VS Code knows we're using Python - and as such, it will now offer to autocomplete code for us. We can see this in action if we start by typing ",(0,i.jsx)(t.code,{children:"someMod."})," - at this point we'll see a list of all the available functions that are in the module we've created:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:o(2845).A+"",width:"1920",height:"1050"})}),"\n",(0,i.jsx)(t.p,{children:"This is great, in part because it keeps us in this module, and not going back to try and remember what we wrote. If we have doc strings in our other module those will also appear for us in the autocomplete (a quick note, I went back and added a doc string so we could see this in action)."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:o(1716).A+"",width:"1920",height:"1050"})}),"\n",(0,i.jsx)(t.h3,{id:"using-a-class-example",children:"Using a class example"}),"\n",(0,i.jsxs)(t.p,{children:["Let's keep moving forward from this idea, and instead of working with just a module, let's work with a class. In Object Oriented Programming, we think of class objects as templates for a specific instance of that item. When we think of a single instance of a class object, that design pattern is referred to a ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Singleton_pattern",children:"Singleton"}),". Most of the extensions we write in TouchDesigner are Singletons, and when we're organizing our TouchDesigner networks into bigger components, like a ",(0,i.jsx)(t.code,{children:"Communication"})," or ",(0,i.jsx)(t.code,{children:"Data"})," base that severs our whole project, this is Singleton."]}),"\n",(0,i.jsxs)(t.p,{children:["With that in mind let's look at how we we might write an import pattern for a Singleton. Let's start by adding a directory called ",(0,i.jsx)(t.code,{children:"Foo"})," to our folder. Next we're going to add the following files in that directory:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"__init__.py"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"FooEXT.py"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Next let's add a little bit of code to the ",(0,i.jsx)(t.code,{children:"FooEXT.py"})," file:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"class FooSingleton:\n    \n    def __init__(self):\n        print('Ground control to Major Foo')\n    \n    def Bar(self):\n        print('Sometimes you eat the bar, and sometimes the bar eats you')\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.code,{children:"__init__.py"})," file we can now add the following:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"import FooEXT\n\nMyFoo = FooEXT.FooSingleton\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Here we import ",(0,i.jsx)(t.code,{children:"FooEXT"})," and then create a new variable ",(0,i.jsx)(t.code,{children:"MyFoo"})," that points to the ",(0,i.jsx)(t.code,{children:"FooSingleton"})," class object in ",(0,i.jsx)(t.code,{children:"FooEXT"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["That means back in our ",(0,i.jsx)(t.code,{children:"example-python-script.py"})," file we can do the following:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"import someMod\nimport Foo\n\nsomeMod.My_great_function(10)\nFoo.MyFoo.Bar()\n"})}),"\n",(0,i.jsx)(t.p,{children:"In VS Code, we now also get the autocomplete options from our Singleton:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:o(623).A+"",width:"1920",height:"1050"})}),"\n",(0,i.jsx)(t.h2,{id:"back-to-touchdesigner",children:"Back to TouchDesigner"}),"\n",(0,i.jsxs)(t.p,{children:["In TouchDesigner this gets both complicated, and interesting. Where this becomes complicated is in relationship to the ",(0,i.jsx)(t.a,{href:"https://docs.derivative.ca/MOD_Class",children:"MOD Class"}),". The contents of any DAT can be treated as though they were a module. In TouchDesigner the ",(0,i.jsx)(t.code,{children:"import"})," keyword operates on DATs, the way ",(0,i.jsx)(t.code,{children:"import"})," works on files in pure Python. We can take advantage of both this so that we can both use extensions as you might in TouchDesigner, and get the advantages of autocomplete in VS Code."]}),"\n",(0,i.jsx)(t.p,{children:"To get started, we have to make a few compromises. For this to work best, we need to first centralize where our extensions are going to live both in TouchDesigner and in our project's directory structure. We also have to commit to using external files for our extensions."}),"\n",(0,i.jsx)(t.h3,{id:"an-extension-manager",children:"An Extension Manager"}),"\n",(0,i.jsxs)(t.p,{children:["In TouchDesigner we're going to keep all of our extensions in an operator called ",(0,i.jsx)(t.code,{children:"base_ext_manager"}),":"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:o(1606).A+"",width:"1920",height:"1050"})}),"\n",(0,i.jsx)(t.p,{children:"In our extension manager we'll have all of our extensions in DATs whose names match their file names in python:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:o(7761).A+"",width:"1920",height:"1050"})}),"\n",(0,i.jsxs)(t.p,{children:["In VS Code we'll see that we've created a new directory for each extension, and in that directory is an ",(0,i.jsx)(t.code,{children:"__init__.py"})," file and the extension file. The name space is important here, so take a moment to see the pattern we've created."]}),"\n",(0,i.jsxs)(t.p,{children:["Finally, we create one extra module called ",(0,i.jsx)(t.code,{children:"lookup"})," which is going to act as the bridge for both TouchDesigner and VS Code. Here we're going to perform a little magic trick that using type hinting (our ability to tell Python that an object is supposed to match an known object)."]}),"\n",(0,i.jsxs)(t.p,{children:["Let's look at what's in ",(0,i.jsx)(t.code,{children:"lookup"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"from __future__ import annotations\n\ntry: \n    import Project\n    import Data\n    import Output\n\nexcept:\n    pass\n\nPROJECT:Project.Project = op.PROJECT\nDATA:Data.Data = op.DATA\nOUTPUT:Output.Output = op.OUTPUT\n"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"annotations"})," let's us take advantage of a try and accept block that's only for VS Code. This let's VS Code interpret our import statement in order to offer us code completion. This let's us tell VS Code that our variable ",(0,i.jsx)(t.code,{children:"PROJECT"})," in code is actually a ",(0,i.jsx)(t.code,{children:"Project.Project"})," object (which is our extension Singleton), while TouchDesigner will see this variable as pointing to the global op shortcut ",(0,i.jsx)(t.code,{children:"op.PROJECT"}),". In this way, the variable ",(0,i.jsx)(t.code,{children:"PROJECT"})," to TouchDesigner is the operator (which has a promoted extension), and to VS Code ",(0,i.jsx)(t.code,{children:"PROJECT"})," is a proper Python Object."]}),"\n",(0,i.jsx)(t.h2,{id:"the-magic-of-local-modules",children:"The Magic of Local Modules"}),"\n",(0,i.jsxs)(t.p,{children:["This is all great for Extensions, but there is one other feature of the ",(0,i.jsx)(t.a,{href:"https://docs.derivative.ca/MOD_Class",children:"MOD Class"})," that we can take advantage of in TouchDesigner. The MOD Class allows the use of two nested base COMPs ",(0,i.jsx)(t.code,{children:"local/modules"})," to hold the a collection of Python modules that are the first location TouchDesigner will search during import. We can use this to our advantage when building reusable libraries that we want to keep out of extensions."]}),"\n",(0,i.jsxs)(t.p,{children:["Let's say, for example, that we want to have access to the ",(0,i.jsx)(t.code,{children:"datetime"})," module in our extensions. It would be redundant to import this into each extension. Instead we might create a collection of tools that follow a functional paradigm that we can then use from a single location. This reduces the likelihood that we'll repeat ourselves, and will help us keep a cleaner code base."]}),"\n",(0,i.jsxs)(t.p,{children:["To do this let's first create a new directory in our ",(0,i.jsx)(t.code,{children:"td-python"})," directory called ",(0,i.jsx)(t.code,{children:"projectTools"}),". In this directory we'll create two files:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"__init__.py"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"MyTime.py"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.code,{children:"__init__.py"})," file let's import our ",(0,i.jsx)(t.code,{children:"MyTime.py"})," file:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"import MyTime\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In ",(0,i.jsx)(t.code,{children:"MyTime"})," we can add a simple function for now:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"import datetime\n\ndef TD_now():\n    return datetime.datetime.now()\n"})}),"\n",(0,i.jsx)(t.p,{children:"You should have something that looks like this:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:o(3623).A+"",width:"1920",height:"1050"})}),"\n",(0,i.jsxs)(t.p,{children:["in TouchDesigner let's start by creating our base ops, let's next navigate into ",(0,i.jsx)(t.code,{children:"local/modules"})," and add two text DATs."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:o(5934).A+"",width:"1920",height:"1050"})}),"\n",(0,i.jsxs)(t.p,{children:["We can now go back to our ",(0,i.jsx)(t.code,{children:"Project"})," extension and import ",(0,i.jsx)(t.code,{children:"projectTools"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"import lookup\nimport projectTools\n\nclass Project:\n\n    def __init__(self, owner_op):\n        self.Owner_op = owner_op\n        print(f'Project Init at | {projectTools.MyTime.TD_now()}')\n\n    def Touch_start(self):\n        print('Running Touch Start | Project')\n        lookup.DATA.Touch_start()\n        lookup.OUTPUT.Touch_start()\n\n    def Promoted_project_method(self):\n        ...\n"})}),"\n",(0,i.jsx)(t.h2,{id:"its-okay-to-be-confused",children:"It's okay to be confused"}),"\n",(0,i.jsx)(t.p,{children:"This is a confusing concept - in part because of how extensions and modules work in TouchDesigner. The benefits here, however, are that we can now have a more seamless development workflow in VS Code. It also means that when collaborating with others, you can treat extensions  and modules much more like proper Python."}),"\n",(0,i.jsx)(t.h3,{id:"sample-repo",children:"Sample Repo"}),"\n",(0,i.jsx)(t.p,{children:"If you're still scratching your head, that's okay. Download this repo to see how these concepts work in action."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/mir-lab/TouchDesigner-python-autocomplete-example",children:"MIR Sample Autocomplete"})}),"\n",(0,i.jsx)(t.h2,{id:"links-to-derivatives-official-docs",children:"Links to Derivative's official docs"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},7776:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/python-simple-example-01-89bc5f4ddace33822763a07a4ff86198.png"},7627:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/python-simple-example-02-504351d3f9a5dc2510397a9515bd84c0.png"},6498:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/python-simple-example-03-4880bb470f85dd0dfd2875503997ed4f.png"},2845:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/python-simple-example-04-fbaf88654e2826b1c794b5c85ee78343.png"},1716:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/python-simple-example-05-15153c335308cafb2c5995519cc695c0.png"},623:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/python-simple-example-06-29538af1a98f4badc2804887e33d8935.png"},1606:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/python-simple-example-07-38aaa73dcb053a6a9c63c856a70a9a6b.png"},7761:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/python-simple-example-08-8496111f95c58aa6b74a830291bef222.png"},5934:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/python-simple-example-10-a7d796942dcdc2cc282fb233a75b2a98.png"},3623:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/python-simple-example-11-1d69d7bfa82d85cf65f998b44701aafc.png"},1856:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/python-standard-lib-b9f588b7ead07e7ef295e6070eae6597.png"},8453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>r});var n=o(6540);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);