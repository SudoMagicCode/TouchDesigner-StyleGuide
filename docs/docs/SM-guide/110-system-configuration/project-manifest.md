---
title: Project Manifest
sidebar_position: 1
description: The contents of a project manifest
slug: /SM-guide/system-configuration/manifest
---

When working on projects that feature multiple machines, or multiple processes, SudoMagic uses a project manifest to describe all of the expected system behavior and configuration mechanics. The objective of using a project manifest is twofold:

1. **Define the shape of the system** - Systems that contain multiple machines and multiple screens / outputs / visual endpoints frequently have system diagrams that help to illustrate how those projects are structured. Leaning into that same idea, we should be able to describe the shape of the project as code. Our projects largely use the idea of self-configuration, and the contents of our manifest describe all of the system information that a give project needs in order to configure itself.

2. **Capture Project Details as Code** - Was the projector HD or 4K? What version of TouchDesigner did we use? Did we sync media to the backups or just the primary machines? These are all questions we've asked ourselves on previous projects, and our case a manifest is the keeper of those small operational details. Even if something went wrong in the execution of the planed outlined in the manifest, at the very least we've captured what our intended system behavior was supposed to look like.

## Manifest Authoring

While SudoMagic has a long history of authoring config and manifest files by hand - this is a deeply frustrating and error prone process. For that reason we've have dedicated tool whose function is producing and editing project manifests.

The web-app version of our authoring tool can be found here:  
[scrivener.sudo.codes](https://scrivener.sudo.codes)

:::info Considerations
Keeping, maintaining, and working within the rules that a manifest requires is not always fun. In fact, it can be frustrating and often feel like it's slowing down your ability to make progress as it imposes rules and constraints on your projects.

This is purposeful. The objective underpinning the use of a manifest (or any repeatable description of your project's configuration) is to both make the project reliable and repeatable, but also to extract that information from exclusively living inside of a framework (TouchDesigner, Unity, Unreal, etc.). When the operational information lives only in the context of your selected framework it makes the work significantly more difficult to move to another framework, and means that finding / reviewing / interrogating that information is reliant on using said framework.

To answer the question - what resolution were the outputs for that project from 2010, the last thing I want to do is find a version of any framework that can open my project file, install that version of the framework, open my project, and then try to remember where I stashed that information. Using some form of structured file to describe your project might feel frustrating, makes a huge difference when you're trying to answer questions far in the future.
:::

### Example Manifest

```json
{
    "manifestVersion": "local dev",
    "project": {
        "name": "Sample Project",
        "version": "v1.0.0",
        "framework": {
            "name": "TouchDesigner",
            "publisher": "Derivative",
            "url": "https://derivative.ca/",
            "version": {
                "id": "2023.12370",
                "stable": true
            }
        }
    },
    "installation": {
        "instances": {
            "bb859ad0-8789-11f0-869d-0bbe0df6415a": {
                "name": "Show Control",
                "role": "controller",
                "sm_role": "standby",
                "processRole": "Controller",
                "sector_collection_ids": [
                    "8f56dff0-8789-11f0-869d-0bbe0df6415a"
                ]
            },
            "c6c56560-8789-11f0-869d-0bbe0df6415a": {
                "name": "Render 01",
                "role": "display",
                "sm_role": "standby",
                "processRole": "Display",
                "sector_collection_ids": [
                    "80c8fbd0-8789-11f0-869d-0bbe0df6415a"
                ]
            }
        }
    },
    "process_module_lookup": {},
    "role_map": {},
    "sectors": {
        "6ffa4f70-8789-11f0-869d-0bbe0df6415a": {
            "name": "wall-01",
            "geometry_name": "w1"
        },
        "77de44d0-8789-11f0-869d-0bbe0df6415a": {
            "name": "control-screen",
            "geometry_name": "ui"
        }
    },
    "sector_collections": {
        "80c8fbd0-8789-11f0-869d-0bbe0df6415a": {
            "name": "wall-01",
            "type": "display",
            "display_keys": [
                "4ca92c30-8789-11f0-869d-0bbe0df6415a",
                "5439d170-8789-11f0-869d-0bbe0df6415a"
            ]
        },
        "8f56dff0-8789-11f0-869d-0bbe0df6415a": {
            "name": "back-of-house",
            "type": "ui",
            "display_keys": [
                "59d165d0-8789-11f0-869d-0bbe0df6415a"
            ]
        }
    },
    "displays": {
        "4ca92c30-8789-11f0-869d-0bbe0df6415a": {
            "name": "Display 01",
            "ip": "",
            "type": "lcdDisplay",
            "width": 3840,
            "height": 2160,
            "orientation": 0,
            "pos_x": null,
            "pos_y": null,
            "pos_z": null
        },
        "5439d170-8789-11f0-869d-0bbe0df6415a": {
            "name": "Display 02",
            "ip": "",
            "type": "lcdDisplay",
            "width": 3840,
            "height": 2160,
            "orientation": 0,
            "pos_x": null,
            "pos_y": null,
            "pos_z": null
        },
        "59d165d0-8789-11f0-869d-0bbe0df6415a": {
            "name": "Control Screen",
            "ip": "",
            "type": "lcdDisplay",
            "width": 1920,
            "height": 1080,
            "orientation": 0,
            "pos_x": null,
            "pos_y": null,
            "pos_z": null
        }
    },
    "machines": {
        "9d9ee170-8789-11f0-869d-0bbe0df6415a": {
            "name": "Render-01",
            "primary": true,
            "sync_media": true,
            "hasHeartBeats": true,
            "ip_address": "",
            "hardwareAddress": "",
            "user_name": "",
            "password": ""
        },
        "a9af1b60-8789-11f0-869d-0bbe0df6415a": {
            "name": "Hot Spare 01",
            "primary": false,
            "sync_media": true,
            "hasHeartBeats": true,
            "ip_address": "",
            "hardwareAddress": "",
            "user_name": "",
            "password": ""
        },
        "b4b70d10-8789-11f0-869d-0bbe0df6415a": {
            "name": "Controller 01",
            "primary": true,
            "sync_media": true,
            "hasHeartBeats": true,
            "ip_address": "",
            "hardwareAddress": "",
            "user_name": "",
            "password": ""
        }
    }
}
```
