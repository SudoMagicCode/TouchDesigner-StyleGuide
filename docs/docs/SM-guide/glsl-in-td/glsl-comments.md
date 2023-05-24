---
layout: default
title: GLSL Comments
parent: GLSL
grand_parent: SudoMagic Style Guide
nav_order: 2
---

# GLSL in TouchDesigner
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

Placeholder for GLSL comment style

```glsl
// SudoMagic LLC
//
// contributing programmers
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// programmer | programmer@domain.com
 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// DEFINITIONS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// UNIFORMS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 
uniform float uName;
 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// FUNCTIONS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// OTHER
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

out vec4 fragColor;

void main(){
    // vec4 color     = texture(sTD2DInputs[0], vUV.st);
    vec4 color        = vec4(1.0);
    fragColor         = TDOutputSwizzle(color);
}
```