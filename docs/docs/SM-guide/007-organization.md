---
title: Project Organization
description: Setting up your project
slug: /SM-guide/organization
---

# Project Organization

## Root

## What's in your Network

## Standard Modules

| name | contents |
|--- | --- |
| `base_icon_ui`        |
| `local`               | 
| `base_project`        |
| `base_prod_tools`     |
| `base_dev_tools`      |
| `iparSettings`        |
| `base_com`            | 
| `base_ext_manager`    |
| `base_process`        | 
| `base_data`           | 
| `container_output`    |



```mermaid 
classDiagram

class abstractComponentSingleton{
    tdOp My_op
    str _log_label
    str td_name

    _touch_start()
    TouchStart()

    _clean_up()
    Clean_up()
    set_td_name()
}

class Project{

    Load_project_profile()
    _load_project_profile()
    Save_project_profile()
    _save_project_profile()
    _get_machine_ip()
    _get_machine_name()
    Quit_project()
    Clean_exit()
    Report_health_status()
    Copy_project_to_remotes()
}

class Com{

    Construct_and_send_message()
    Send_message()
    _send_message()
    Receive_message()
    _receive_msg()
}

class Output{

    _set_output_dimensions()
    _build_output_collection()
    Get_outputs_from_sectors()
    Receive_message()
    _receive_msg()
}

abstractComponentSingleton --|> Project

abstractComponentSingleton --|> Com

abstractComponentSingleton --|> Output

abstractComponentSingleton --|> Process

abstractComponentSingleton --|> Data

```

<details>

<summary>Scaffold Structure</summary>

```
base_scaffold
    ├── base_icon_ui
    ├── local
    │    └── modules
    │        └── SudoMagic
    │
    ├── base_prod_tools
    ├── base_dev_tools
    ├── base_shader_lib
    │
    └── base_project
        ├── base_icon
        ├── base_startup
        ├── iparSettings
        ├── base_com
        ├── container_output
        ├── base_process
        ├── base_data
        └── local
            └── modules 
                ├── lookup
                ├── project
                ├── com
                ├── process
                ├── output
                └── data
```
</details>

## Links to Derivative's official docs


<!-- links -->