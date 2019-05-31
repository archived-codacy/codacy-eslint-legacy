Enforce consistent spacing inside braces

This rule is the same rule as core object-curly-spacing rule but it applies to the expressions in `<template>`.

```
//Bad:
var obj = {'foo': 'bar'};
var obj = { 'foo':'bar'};
 
//Good:
var obj = { 'foo': 'bar' };
```

[Source](https://eslint.vuejs.org/rules/object-curly-spacing.html#vue-object-curly-spacing)
