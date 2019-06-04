When using _.filter and accessing the first or last result, you should probably use _.find or _.findLast, respectively.

```
//Bad:
const x = _.filter(a, f)[0];
const x = _.head(_.filter(a, f));

//Good:
const x = _.filter(a, f);
const x = _.filter(a, f)[3];
```

[Source](https://github.com/wix/eslint-plugin-lodash/blob/c81ef24cbe8cfa5f9fa27a31da9301a53f240ef0/docs/rules/prefer-find.md)
