Require or disallow trailing commas

This rule is the same rule as core comma-dangle rule but it applies to the expressions in `<template>`.

```
//Bad:
var foo = {
    bar: "baz",
    qux: "quux",
};

//Good:
var foo = {
    bar: "baz",
    qux: "quux"
};
```

[Source](https://eslint.vuejs.org/rules/comma-dangle.html#vue-comma-dangle)
