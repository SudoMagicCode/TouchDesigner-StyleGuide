---
title: Externalizing TOX Files
description: An examination of the use of TOX files when building your project
slug: /SM-guide/external-tox-files
---

# A TOX Centric Approach

In our current general networking building strategy, as many elements as possible are externalized. The strategy of externalizing the contents of a network helps:

* reduce toe file size
* focus on modular design - this focus helps us think of modules that could be interchangeable provided that we land on a standard method of building in and out communication standards.
* allow for better git tracking - tox and toe files are binary, which makes it nearly impossible to use the same git process as you might with a different code base. By externalizing modules, we can easily see when a tox has changed, roll back to previous tox files, and in other ways wrangle the complex challenges of ensuring for comprehensive version tracking during development.
* allow for multiple developer contributions via git - by focusing on individual tox files as the epicenter of change, multiple developers can be writing and re-writing networks without fear of merge conflicts - provided that they aren’t editing the same tox at the same time.

## Directories and Saving

Structurally, we build our repo directories to match our toe file directories. If a given base is located in /software_project_name/base_communication, then it’s tox file should be saved at a repo location that matches. The thinking here is to build parallel structures between networks and directories. Why? You might ask. Mirroring directory structures can help other programmers locate your work. This conventionalized method of locating files, means that if you know where a given module lives in a network, you should also be able to locate that file in the reop. For any frustration this may cause during building, it solves an innumerable number of problems during debugging and code exchange.

## Node Naming Conventions
Clear namespace use is essential to any project. If you’re familiar with the Zen of Python, you might remember two essential ideas:

* Explicit is better than implicit
* Namespaces are one honking great idea — let’s do more of those!

What does this have to do with naming contentions? It’s easy to find yourself navigating another programmers network trying to discern what they were attempting to do – even trying on how they might have been thinking about a given project or idea. For this very reason we’ve landed on the explicit prefixing of unique node names in a TouchDesigner network with the operators’ type. For example, a null TOP used as a background element might have the name “null_bg”. While this makes for longer operator names, it also allows other programmers the opportunity to see, at a glance, what operators are in a given network or process. While this may initially feel cumbersome, this convention is ultimately about making your code as parse-able and readable for another programmer as possible. This is also about creating code for your future self - coming back to a project in 2, 5, or 10 months means you’ll likely want as many breadcrumbs as possible in order to understand what your past self was trying to do.

### Notable Exceptions to this Rule

The most apparent exceptions to this rule are found in local/modules. Mods have the benefit of being accessible with the short hand:

`mod.textDATname.functionName`

This excellent feature can be ham-stringed by long text DAT names. As an example, we might imagine that we have a module we’d like to use with the mod. shorthand. THat module’s name might easily be something like “text_system_configuration” when using our standard naming convention, inside of this module we might want to use a function called “start_up”. This would mean that we’d need to write something akin to:

`mod.text_system_configuration.start_up()`

in order to call this function. The shortening of this by the prefix `text_` may not be a huge number of characters, but it helps provide a little bit of clarity in the reading a of the expression:

`mod.system_configuration.start_up()`

This also helps distinguish our module - which is essentially being accessed as a library - and a regular text DAT.


<!-- links -->