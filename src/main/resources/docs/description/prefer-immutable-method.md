Prefer a method that doesn't mutate the arguments when available.

```
//Bad:
_.pull(arr, value)
const a = _.remove(arr, fn);

//Good:
const a = _.without(arr, value);
const a = _.filter(arr, fn);
```

[Source](https://github.com/wix/eslint-plugin-lodash/blob/c4fe9cd709385b394c8b6418d958c3c266f953b7/docs/rules/prefer-immutable-method.md)
