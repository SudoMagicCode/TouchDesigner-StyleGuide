---
title: Wires
description: Connections between Nodes
---

Curved, straight, dotted, moving, static – the wires in TouchDesigner are a delight, some kind of series of mad scientists spaghetti code it’s easy to fall in love with them, and easier still to make a mess of them. There are a few important features of wires to keep in mind when working.

:::tip Do

* Think carefully about your node arrangement and how this will affect your wires – what will you cross, obscure, or hide?
* Leave room for clear paths and flows in your network. A little more empty spaces is generally better than too little.
* Think about the proximity of export nodes to their targets – are you creating long or confusing export paths that will be difficult to understand visually?

![](/img/SM-guide/nodes/do-wire-arrangment.png)

:::

:::danger Don’t

* Reverse order in node connections
* Vertically stack operators and connect them with S-curves.
* Dock and hide important nodes – scripts, notes, shaders, are all examples of acceptable items. NEVER dock and hide essential network elements. By hiding an essential part of your network, you make it exponentially more difficult for another programmer to debug your network, or understand your process.
* Arrange your nodes haphazardly

![](/img/SM-guide/nodes/dont-wire-arrangment.png)

:::
