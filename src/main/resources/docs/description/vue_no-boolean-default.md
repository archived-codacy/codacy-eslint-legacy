Disallow boolean defaults

The rule is to enforce the HTML standard of always defaulting boolean attributes to false.

```
export default {
  props: {
  
    //Bad:
    foo: {
      type: Boolean,
      default: true
    },
    
    //Good:
    bar: {
      type: Boolean
    }
  }
}
```

[Source](https://eslint.vuejs.org/rules/no-boolean-default.html#vue-no-boolean-default)
