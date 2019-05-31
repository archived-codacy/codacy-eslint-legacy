Disallow specified syntax

This rule is the same rule as core no-restricted-syntax rule but it applies to the expressions in `<template>`.

```
<template>
  //Bad:
  <div> {{ foo() }} </div>
  <div> {{ foo.bar() }} </div>
  <div> {{ foo().bar }} </div>
  
  //Good:
  <div> {{ foo }} </div>
  <div> {{ foo.bar }} </div>
</template>
```

[Source](https://eslint.vuejs.org/rules/no-restricted-syntax.html#vue-no-restricted-syntax)
