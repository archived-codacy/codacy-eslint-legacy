In order to make snapshot tests more managable and reviewable toMatchInlineSnapshot() and toThrowErrorMatchingInlineSnapshot should be used to write the snapshots inline in the test file.

```
//Bad:
expect(obj).toMatchSnapshot();

//Good:
expect(obj).toMatchInlineSnapshot();
```

[Source](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-inline-snapshots.md)
