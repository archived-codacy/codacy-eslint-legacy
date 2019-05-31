Prohibit named exports. Mostly an inverse of no-default-export.

```
//Bad:
// There is only a single module export and it's a named export.
export const foo = 'foo';

//Good:
// There is only a single module export and it's a default export.
export default 'bar';
```

[Source](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-export.md)
