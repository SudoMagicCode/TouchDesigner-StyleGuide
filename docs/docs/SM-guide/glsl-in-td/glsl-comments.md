---
title: GLSL Comments
nav_order: 2
description: GLSL comments
---

# GLSL in TouchDesigner

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
<!-- links -->