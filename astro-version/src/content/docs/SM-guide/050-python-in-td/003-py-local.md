---
title: Local Modules
sidebar_position: 3
description: A special case for Python modules in TouchDesigner
slug: /SM-guide/python-in-td/local-modules
---


The [MOD Class] performs some convince functions for users in TouchDesigner, especially when using local -> Modules. This allows the `import` keyword in Python to easily locate a Text DAT so it can be used as a Python module on demand.

According to the TouchDesigner Wiki, the hierarchy for the Python search path during `import` behaves as follows:

>**Search Path**  
>The current component is searched first.  
>If the DAT is not found, the local/modules component of the current component is then searched.  
>Next the local/modules component of each parent is successively searched.  
>If the DAT is still not found, None is returned.

This means that when developing a reusable library, if you place your Text DAT in a base called `modules` located in a base called `local` you can then access that module only by using the `import` keyword from any child component.

:::tip How to Use Local Modules

```txt
local
    └── modules
        └── anyTextDAT
```

:::

## The Magical Local/Modules

At SudoMagic we take advantage of this feature in two locations in a typical project. At the root of a project the `SudoMagic` library is located in `base_scaffold/local/modules/SudoMagic`. This ensures that our library of reusable functions is available throughout the entire project.

```
base_scaffold
    └── local
        └── modules
            └── SudoMagic
```

### Project Specific

```
base_scaffold
    ├── base_icon_ui
    ├── local
    │    └── modules
    │        └──SudoMagic
    │
    └── base_project
        └── local
            └── modules
                └── projectSpecificModules
```

## Links to Derivative's official docs

<!-- links -->
[MOD Class]:https://docs.derivative.ca/MOD_Class
