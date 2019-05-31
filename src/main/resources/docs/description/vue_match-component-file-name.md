Require component name property to match its file name

This rule reports if a component name property does not match its file name.

You can define an array of file extensions this rule should verify for the component's name.

```
//Bad:
// file name: src/MyComponent.jsx
export default {
  /* ✗ BAD */
  name: 'MComponent', // note the missing y
  render() {
    return <h1>Hello world</h1>
  }
}

//Good:
// file name: src/MyComponent.jsx
export default {
  name: 'MyComponent',
  render() {
    return <h1>Hello world</h1>
  }
}

//Good:
// file name: src/MyComponent.jsx
export default {
  name: 'my-component',
  render() { return <div /> }
}
```

[Source](https://eslint.vuejs.org/rules/match-component-file-name.html#vue-match-component-file-name)
