Enforce consistent brace style for blocks

This rule is the same rule as core brace-style rule but it applies to the expressions in `<template>`.

```
//Bad with 1tbs:
function foo()
{
  return true;
}

//Good with 1tbs:
function foo() {
  return true;
}
```

[Source](https://eslint.vuejs.org/rules/brace-style.html#vue-brace-style)
