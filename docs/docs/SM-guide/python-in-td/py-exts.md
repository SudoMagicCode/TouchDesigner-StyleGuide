---
layout: default
title: Extensions
parent: Python
grand_parent: SudoMagic Style Guide
nav_order: 2
---

# Extensions
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

# Custom Class Objects

## Type Hinting

As a quick reminder, Python is a dynamically typed language. Which is to say that unlike other languages where we must specify a variable type during it's creation, the type of a variable in Python is largely determined at run time. That makes for a very flexible language, but can create some challenges during development - it's easy to incorrectly pass an argument type and then spend valuable debugging only to discover that you pass a `str` instead of an `int`. Python now supports type hinting, which allows you to more easily track the argument type. 

When possible, it is highly recommended that that you use type hints - not only for the benefits of autocompletion in VS Code, but also as a kindness to your fellow developers. Here are some quick resources about Type Hinting:

* [Real Python type hinting lesson]
* [mypy type hints cheat sheet]
* [Python docs typing]

## Doc Strings

```python
def foo(arg1:int, arg2:str) -> list:
    """A silly example

    An example function that accepts two arguments, returns
    a list, and raises no errors. This is mostly to illustrate
    what doc strings might look like for a function.

    Args:
        arg1 `int`: Some integer
        arg2 `int`: Some integer
        
    Returns:
        my_list `list`: A list made up of arg1 and arg2

    Raises:
        None
    """
    my_list = [arg1, arg2]
    return my_list
```

## Promoted Methods

```python
class Foo:
    def __init__(self, owner_op:OP) -> None:
        self.My_op = owner_op

    def Promoted_method(self, some_int_arg:int) -> None:
        pass
```

## Internal Methods

```python
class Foo:
    def __init__(self, owner_op:OP) -> None:
        self.My_op = owner_op

    def internal_method(self, some_int_arg:int) -> None:
        pass
```

## Private Methods

```python
class Foo:
    def __init__(self, owner_op:OP) -> None:
        self.My_op = owner_op

    def _private_method(self, some_int_arg:int) -> None:
        pass
```

# Singletons

Classes that belong to a single instance of an operator. 
{: .fs-6 .fw-300 }

## Common Characteristics

```python
class Output:

    def __init__(self, owner_op):
        self.Owner_op = owner_op

    def Touch_start(self):
        print('Running Touch Start | Output')
```

# Other Class Objects



<!-- links -->
[TouchDesigner Extensions]:https://docs.derivative.ca/Extensions
[Real Python type hinting lesson]:https://realpython.com/lessons/type-hinting/
[mypy type hints cheat sheet]:https://mypy.readthedocs.io/en/stable/cheat_sheet_py3.html
[Python docs typing]:https://docs.python.org/3.9/library/typing.html