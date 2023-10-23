---
title: Logging
description: Keeping track of what went right and wrong
slug: /SM-guide/logging
---

# Logging - Events and Debugging

SudoMagic uses a modified version of the Python logging module to log events both to the TouchDesigner `text port` and to file. The logging module is used in part due to the ability to log to file, and to send a message to the standard out as well as to file. This ensures the messages appear in TouchDesigner, as well as in an output file. 

New log files should be generated for each day - ensuring that no single log file is an unreasonable length to parse. The SudoMagic logging module is configured to output log files to `_public/logs`. The `_public` folder location is partially derived for the TD project file. This means that it may or may not exist alongside the `.toe` file.

:::info - Print only during development

While the ```print()``` command is often helpful and quick to use during development, it can produce cluttered messages that are difficult to parse in the `text port` when possible, remove or comment out `print` statements that have been used during development and use the logging module for any messages that will produce useful messages in the final project.

:::

Logging requires that you import the logging module into any extension or script that requires logging:

```python
import logging
```

Ideally, log messages should be traceable to sensible sources. For example class singletons should identify if a log message belongs to them - i.e. 

```python
logging.info("PROJECT | System settings loded sucessfully")
```



## Links to Derivative's official docs



## Additional Support docs

* [Python Logging Module]

<!-- links -->

[Python Logging Module]:https://docs.python.org/3/howto/logging.html