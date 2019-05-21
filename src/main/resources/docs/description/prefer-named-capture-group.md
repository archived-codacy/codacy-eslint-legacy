This rule is aimed at using named capture groups instead of numbered capture groups in regular expressions.

```
//Bad:
const foo = /(ba[rz])/;
const bar = new RegExp('(ba[rz])');
const baz = RegExp('(ba[rz])');

foo.exec('bar')[1]; // Retrieve the group result.

//Good:
const foo = /(?<id>ba[rz])/;
const bar = new RegExp('(?<id>ba[rz])');
const baz = RegExp('(?<id>ba[rz])');

foo.exec('bar').groups.id; // Retrieve the group result.
```

[Source](https://eslint.org/docs/rules/prefer-named-capture-group)
