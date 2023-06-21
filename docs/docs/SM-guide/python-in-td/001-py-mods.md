---
title: Modules
sidebar_position: 1
description: Python modules in TouchDesigner
slug: /SM-guide/python-in-td/modules
---

# Modules

Python in TouchDesigner shares many of the characteristics of a pure Python development experience, but also has some distinct differences. Inside of TouchDesigner Text DATs behave as though they are text files. This allows us the flexability of writing generic Python functions in one DAT, and then calling that function in another - for example with a CHOP Execute DAT. The mechanics of this are defined in the [MOD Class] wiki page, and cover three different ways you might import modules whose code is inside of DATs. 

This does, however, make for some interesting challenges and considerations. Specifically, committing to a defined paradigm for your namespace is critical when importing modules from Text DATs.

Consider the following scenario - in your project you want write a wrapper for the python `datetime` library. It's not uncommon to want to modify standard libraries so they are a better fit for the TouchDesigner workflow, and writing a wrapper around a library like `datetime` is something you might do. Feeling clever, you decide to change the name of your Text DAT to `datetime` - since it is your new datetime library. 

![](../../../static/img/SM-guide/python/python-modules-01.png)

What's not to love about this? Next you want to call your new functions from another DAT. You add another DAT to your network and `import datetime` and call the functions you've just written.

![](../../../static/img/SM-guide/python/python-modules-02.png)

At this point everything is coming up roses[^1]. There is a catch to this approach - what happens if we try to access the pure Python `datetime` library from our `text1` DAT? 

![](../../../static/img/SM-guide/python/python-modules-03.png)

Errors abound.At this point we've overridden the standard library with our own module and created a bit of a namespace mess.

## Functional Paradigms

## Links to Derivative's official docs

[^1]: For those unfamiliar, Ethel Merman's performance of [Everything's Coming Up Roses] once was the bee's knees.

<!-- links -->
[MOD Class]:https://docs.derivative.ca/MOD_Class
[Everything's Coming Up Roses]:https://www.youtube.com/watch?v=s62MrU8mHx4&ab_channel=dougster2810