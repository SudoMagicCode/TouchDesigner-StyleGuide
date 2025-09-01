---
title: Naming Patterns
description: Nodes, names, and their predictable patterns
---

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
