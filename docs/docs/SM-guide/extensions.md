---
layout: default
title: Extensions
parent: SudoMagic Style Guide
nav_order: 5
---

# Extensions
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

In building out complex methods in networks, it’s often tempting to place all of your functions inside of a given execute DAT (CHOP, DAT, Panel, etc. Executes). This can be a highly effective method of managing functions and how they act in a given network. As networks grow in complexity and size, however, it can be important to reconsider how you’re implementing solutions to complex problems. Luckily, extensions are highly effective means of solving this very problem.

Extensions allow you to write a set of methods for a given module, and call them as you might any other method in Python. Let’s look at a quick example to understand the power of this approach. We might imagine that we have a timer CHOP in our network, and we need various play commands to control this timer. In addition to controlling our timer, we also need to control a number of various UI elements. We might have multiple buttons or display features that need to be updated when we click on the play or pause button. What then can we do? We might write a function in our Panel Execute DAT. Here we could specify what needs to happen based on a binary event – a button is pressed, and then something happens. In this case we might need to do a few things, first we might want to make sure that we either play or pause the timer. Next we probably want to change the display quality of the button that’s not active.

While we might do this all in the execute, this approach will invariable trap our logic inside of that sub element. If we want to re-use this function, we’ll need to copy and paste our code into another execute, and should our implementation change we’ll need to update it in two places. Already we can see how at scale this might quickly become a problematic approach.

By using extensions instead we can centralize our function, and instead call it as a method. This allows for a more uniform and centralized approach to our problem. See the Simple Extensions Example for a better idea of how to set this up in your networks.