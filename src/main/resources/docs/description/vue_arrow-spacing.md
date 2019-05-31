Enforce consistent spacing before and after the arrow in arrow functions

This rule is the same rule as core arrow-spacing rule but it applies to the expressions in `<template>`.

```
//Bad: 
{
"before": false, "after": false }
(a)=>{
}

//Good: 
{
"before": true, "after": true }
(a) => {
}
```

[Source](https://eslint.vuejs.org/rules/arrow-spacing.html#vue-arrow-spacing)
