Require spacing around infix operators

This rule is the same rule as core space-infix-ops rule but it applies to the expressions in `<template>`.

```
//Bad:
a+b
a+ b
a +b

//Good:
a + b
a       + b
a ? b : c
```

[Source](https://eslint.vuejs.org/rules/space-infix-ops.html#vue-space-infix-ops)
