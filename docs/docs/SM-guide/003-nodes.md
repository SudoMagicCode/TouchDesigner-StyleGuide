---
title: Nodes
description: Working with Nodes
slug: /SM-guide/nodes
---

# Nodes

## Naming Patterns

This section stands as an expansion on the above naming convention style guide. After much discussion, the current practice for operator naming follows the python style guide of using underscores rather than camel case. This appears in a number of various locations in your network, and requires special attention when it comes to renaming nodes. When renaming an operator or when terminating with a null the following naming convention should be used: `{operator}_{descriptor}_{name}{#}`

The above can be decoded:

Element | Description |
:---    | :---        |
`operator`        | the operator type, e.g. `moviefilein`
`descriptor_name` | whatever descriptor is used for the node, using underscores in place of spaces
`#`               | any digit that might be associated with the node

A few examples as reference:

* `base_com`
* `base_data`
* `script_inst_data1`
* `script_inst_data2`

At the end of a rendering chain a null is added inside of a base:

`null_final`

A movie player uses two movie file in TOPs in order to facilitate seamless switching between videos. The two movie file in TOPs might be renamed in order to specify that they are the A or B deck:

* `moviefilein_a`
* `moviefilein_b`

A series of TOP chains are used in order to composite a variety of thumbnails used for instancing geometry. Each TOP chain terminates in a null, and needs to be differentiated with a digit to allow for texture instancing:

* `null_ui_thumbnail1`
* `null_ui_thumbnail2`
* `null_ui_thumbnail3`
* `null_ui_thumbnail4`

TOX Components should also follow this naming convention

### Notable Exceptions

The most apparent exceptions to this rule are found in local/modules. Mods have the benefit of being accessible with the short hand:

`mod.textDATname.functionName`

This excellent feature can be ham-stringed by long text DAT names. As an example, we might imagine that we have a module we’d like to use with the mod. shorthand. That module’s name might easily be something like “text_system_configuration” when using our standard naming convention, inside of this module we might want to use a function called “start_up”. This would mean that we’d need to write something akin to:

`mod.text_system_configuration.start_up()`

in order to call this function. The shortening of this by the prefix “text_” may not be a huge number of characters, but it helps provide a little bit of clarity in the reading a of the expression:

`mod.system_configuration.start_up()`

This also helps distinguish our module – which is essentially being accessed as a library – and a regular text DAT.

## Sizing

Like in any paradigm, programmers have strong feelings about the best way to format their programming space. With something like TouchDesigner, the spatialized element of this development platform creates another layer of potential meaning making and organizational space. This also creates opportunities for messy and disorganized habits to crop up. Touch makes it easier to quickly change the size of node to better see it – you might find yourself doing this for comments, rendering elements, control panels, chop channels, geometry – just about anything in fact. While there is some great utility in this, and you may find that you’re able to create abstract art pieces with your network, if possible you should avoid unnecessary resizing. 

Why?! Perhaps the most important consideration is how multiple sizes change the legibility of your network. While it’s not uncommon that you may find yourself enlarging elements in your network to better see them, it changes your ability to see the network from at a glance – to read the flow of the network without unhindered by an imposed frame of importance. Your decision to enlarge a particular TOP or DAT may have been in response to a pragmatic need – to an outsider, however, this choice reads – visually – as an indicator of significance. This injection of priority can undermine your fellow programmers ability to unbiasedly read the flow of information in your network – because they’re trying to decode the implied meaning what may well be perceived as a indication of significance.

Sometimes, however, you may find that you want to change the size of an operator for that very reason. What then are you to do? Consider using a command to set the size of your node – this can ensure consistent sizes that can be standardized across your networks. This is accessible from the op class:

`op( 'opName' ).nodeHeight = int`  
`op( 'opName' ).nodeWidth = int`

Height and width are expressed as network editor units. One square on the network is equal to 100 network editor units.

:::tip  Do

* Use consistent spacing, sizing, and clear organizational flows.
* Rely on the default sizes of nodes as a starting point
* Consider turning off the adaptive sizing for nodes in the options dialogue box
* Group operations together and consider when you might create modules for a * particular process in your network

![](/img/SM-guide/nodes/consistence-sizees.png)

:::

:::danger Don’t

* Resize your nodes willy nilly
* Use multiple sizes in your organization structure without providing a key to your viewer or fellow programmers
* Use extremely large sized nodes. If another programmer resets your node sizes to better read your network, they’ll be placed at great network distances from one another, making the first step in debugging your code an act of organization
* Forget that your network is something someone else will invariably see, interact with, and need to understand – be nice to your future self, or to those that will come after you.

![](/img/SM-guide/nodes/inconsistence-sizees.png)

:::

## Wires

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

## Visual Debugging

### Animation

Animated wires help you see, at a glance, that something is cooking. This is a visual reminder that a portion of your network is being processed right before your very eyes. This is often helpful in understanding how to debug a portion of your network as it allows you to find unnecessary cycles visually rather than with print statements.

### Links

The dotted lines that connect ops are refereed to as links, not wires. Wires are inter-operator connections between data types (families), links, on the other hand, bridge between operator types and between data types. These are often used to drive parameters, or animate some portion of the network. Just like with wires, animated links are an indicator that a process is cooking. This is another important visual debugging mechanism when working on a project.

### Docked

Docked ops have a straight line, similar to a link in color, that connects an operator to another. Docking an operator keeps it at an established x and y offset from its partner.

While there isn’t a defined flow, there is an implied western bias in a left to right flow in networks. While you certainly can organize your networks right to left, it will make for some backwards flipping lines. Similarly, organizing top to bottom will creating hard snaking S curves in your networks. While none of these things are inherently bad, they can make it difficult for another programmer to interpret your intentions. Top to bottom or bottom to top is perhaps the most dangerous. This particular arrangement makes it difficult to see, at a glance, the intended flow of operations.

## Links to Derivative's official docs

<!-- links -->