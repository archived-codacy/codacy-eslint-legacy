Disallow or enforce spaces inside of blocks after opening block and before closing block

This rule is the same rule as core block-spacing rule but it applies to the expressions in `<template>`.

```
//Bad:
function foo() {return true;} 
if (foo) { bar = 0;}

//Good:
function foo() { return true; }
if (foo) { bar = 0; }
```

[Source](https://eslint.vuejs.org/rules/block-spacing.html#vue-block-spacing)
