---
title: Preferences
description: An overview of TouchDesigner preferences
slug: /SM-guide/preferences
---

# Recommended Preference Settings

Preferences is a dialog for setting personal default settings for various TouchDesigner options. These preferences are found in the Edit menu under Preferences.... These options are saved so they apply to your next TouchDesigner session. 

From the Edit menu select the Preferences dialog box. Alternatively, you could use the keyboard short-cut Alt + p

Here you’ll find a number of preferences for setting up your TouchDesigner environment. While many of these are the purview of the individual programmer there are some important recommendations worth considering when spending a significant amount of time developing in Touch. You may well find that you have a very specific set of preferences in your work, and that’s great. But, before you get there here are a few good places to start.

Alternatively, you can find the preference file located here:

Platform | Path |
:---      | :---  | 
Windows  | `C:/Users/{username}/AppData/Local/Derivative/TouchDesigner/pref.txt`
macOS    | `~Library/Application Support/Derivative/TouchDesigner</pref.txtcode>`

## Grid Snap
By default the grid snap setting in TouchDesigner is set to course. Most of the networks you’ll find in our repos have been set with a fine network grid, which means if you re-arrange an operator, it will be difficult to find your way back into alignment with the project. For this reason, it’s worth changing your Snap to Grid to be fine.

## Resize
For the sanity of other programmers, it’s well worth turning off the resize TOP and COMP checkboxes in your Network preferences tab. This keeps a uniform look to all TOPs and COMPs unless you choose to specifically deviate from the normal size.

This is often an area of spirited discussion, and programmers often have very specific opinions about the right approach for sizing and network organization. That being said, it’s worth remembering that a formal structure to the choices made in sizing and placement help make a TouchDesigner network more readable and navigable. First starting with normed sizes allows the programmer to make specific choices, rather than arbitrary ones – a common byproduct of the use of auto resizing. for both TOPs and COMPs.

Said another way, if the size and placement of your operators communicates meaning in your networks - then it's in your best intrest to make those decisiosn conscisouly.

## External Editors
It’s often desirable to have an external editor for text and table elements in touch. Many of us use Sublime Text thought there are a wide variety of text editors that you might choose. External editors allow for syntax highlighting, and a variety of advanced features for speeding up the process of writing code. To set an external editor you need to use the DATs tab of the preferences window. Here you’ll find two fields where you can enter the paths to the executables for the applications you’d like to use.

An example preference file:

```
dats.texteditor	C:/Users/ragan/AppData/Local/Programs/Microsoft VS Code/Code.exe
obj.adaptivehomedefault	0
chops.graphdisplay2	6
network.fitpaneltotile	0
general.inc	0
network.zoomdelay	0.19999999
network.gridsnapdiv	2
network.fittoptotile	0
network.zoomboost	1.0000002
```

## Links to Derivative's official docs
* [Preference Dialog]
* [Preference Class]

<!-- links -->
[Preference Dialog]: https://docs.derivative.ca/Dialogs:Preferences_Dialog
[Preference Class]:https://docs.derivative.ca/Preferences_Class