Enforce consistent spacing inside array brackets

This rule is the same rule as core array-bracket-spacing rule but it applies to the expressions in `<template>`.

```
//Bad:
var arr = [ 'foo', 'bar' ];
var [ x, y ] = z;
var arr = [ 'foo', 'bar'];

//Good:
var arr = ['foo', 'bar'];
var [x, y] = z;
var arr = ['foo', 'bar'];
```

[Source](https://eslint.vuejs.org/rules/array-bracket-spacing.html#vue-array-bracket-spacing)
