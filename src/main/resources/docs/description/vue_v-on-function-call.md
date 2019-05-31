Enforce or forbid parentheses after method calls without arguments in `v-on` directives

This rule aims to enforce to bind methods to v-on or call methods on v-on when without arguments.

```
<template>
  //Bad:
  <button v-on:click="closeModal()">
    Close
  </button>
  
  //Good:
  <button v-on:click="closeModal">
    Close
  </button>
</template>
```

[Source](https://eslint.vuejs.org/rules/v-on-function-call.html#vue-v-on-function-call)
