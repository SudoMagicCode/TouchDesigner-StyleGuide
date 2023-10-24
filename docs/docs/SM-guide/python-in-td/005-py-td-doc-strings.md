---
title: Python Doc Strings
sidebar_position: 5
description: An overview of Python autocomplete in VS Code
---

# Doc Strings and Comments

## Why Use Doc Strings?
Doc strings and comments are helpful in a number of different circumstances when reading and authoring code. Most importantly, these are the breadcrumbs and operating notes that you leave for your future self. In the heat of working on a project you rarely need a reminder about about how function or class works, but in 6 months... you might. Doc strings and comments are here to help ensure that the best ideas can keep getting used, and don't rewritten when it's more work to understand what the code does than to start over.


## Examples

### Function

#### Practical Example
```python
def To_rgb_from_hex(value:str) -> tuple:
    """Returns a color as a float tuple (rgb) converted
    from HEX
    
    Args
    ---------------
    value (`str`)
    > hex string to be converted into rgb 

    Returns
    ---------------
    color (`tuple`)
    > normalized color expressed as (r, g, b) tuple
    """
```

#### Boiler Plate
```python
def Foo_bar(arg1:int) -> None:
    """Single line description of function.

    Any additional comments or operational considerations you'd like
    to add about the function in question.
    
    Args
    ---------------
    arg1 (`int`)
    > description of arg's role 

    Returns
    ---------------
    None
    """
```

#### Short Form
The short form usage is acceptable when there is a present type hint for any arguments and returns. Provided that hints are present, the doc string can be abridged to only include a brief description of the method / function.

```python
def Foo_bar(arg1:str) -> None:
    """One line description

    Any additional comments or operational considerations you'd like
    to add about the method in question.
    ""
```

---

### Header

#### Practical Example
```python
"""
SudoMagic | sudomagic.com
Authors | Matthew Ragan, Ian Shelanskey
Contact | contact@sudomagic.com
"""

# td python mods
import SudoMagic
import Lookup

# pure python
import json
import sys
import socket
import logging
```

#### Boiler Plate
```python
"""
SudoMagic | sudomagic.com
Authors | Matthew Ragan, Ian Shelanskey
Contact | contact@sudomagic.com
"""

# td python mods
import SudoMagic
import Lookup

# pure python
```

---

### Class

#### Practical Example
```python
class Project(SudoMagic.Types.abstract_component_singleton):
    """Project Class

    The project class is responsible for the construction and distribution
    of all extensions. _setup() constructs extensions in order, allowing
    for a reliable and consistent start-up sequence for all python extensions

    Additionally the Project class is responsible for start-up functions
    that include loading settings from file.
    """

```

#### Boiler Plate

```python
class Foo:
    """Foo Class one line description

    Any additional comments or operational considerations you'd like
    to add about the class in question.
    """
```

---

### Method

#### Practical Example

```python
def Set_process(self, override_role:str) -> None:
    """sets process from available processes in config
    
    overrides provided env var and runs Touch_start()
    
    Args
    ---------------
    override_role (`str`)
    > new string to set for role 

    Returns
    ---------------
    None
    """
```

#### Boiler Plate

```python
def Bar(self, arg1:str) -> None:
    """One line description

    Any additional comments or operational considerations you'd like
    to add about the method in question.

    Args
    ---------------
    self (`callable`)
    > new string to set for role 

    arg1 (`str`)
    > some argument description 

    Returns
    ---------------
    None
    """
```

#### Short Form
The short form usage is acceptable when there is a present type hint for any arguments and returns. Provided that hints are present, the doc string can be abridged to only include a brief description of the method / function.

```python
def Bar(self, arg1:str) -> None:
    """One line description

    Any additional comments or operational considerations you'd like
    to add about the method in question.
    """
```

## Links to Derivative's official docs
[MOD Class]

<!-- links -->
[MOD Class]:https://docs.derivative.ca/MOD_Class
[MIR Sample Autocomplete]:https://github.com/mir-lab/TouchDesigner-python-autocomplete-example
[Visual Studio Code]:https://code.visualstudio.com/
[Python import system]:https://docs.python.org/3/reference/import.html
[Singleton]:https://en.wikipedia.org/wiki/Singleton_pattern