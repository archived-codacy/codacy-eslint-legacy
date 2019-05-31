Require the component to be directly exported

This rule aims to require that the component object be directly exported.

```
//Bad:
const ComponentA = {
  name: 'ComponentA',
  data() {
    return {
      state: 1
    }
  }
}

export default ComponentA

//Good:
export default {
  name: 'ComponentA',
  data() {
    return {
      state: 1
    }
  }
}
```

[Source](https://eslint.vuejs.org/rules/require-direct-export.html#vue-require-direct-export)
