Enforce consistent spacing before or after unary operators

This rule is the same rule as core space-unary-ops rule but it applies to the expressions in `<template>`.

```
//Bad:
typeof!foo;
void{foo:0};
new[foo][0];

//Good:
delete foo.bar;
new Foo;
void 0;
```

[Source](https://eslint.vuejs.org/rules/space-unary-ops.html#vue-space-unary-ops)
