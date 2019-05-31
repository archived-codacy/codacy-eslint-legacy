This rule reports on any usage of Jasmine globals which is not ported to Jest,
and suggests alternative from Jest's own API.

`jest` uses `jasmine` as a test runner. A side effect of this is that both a
`jasmine` object, and some jasmine-specific globals, are exposed to the test
environment. Most functionality offered by Jasmine has been ported to Jest, and
the Jasmine globals will stop working in the future. Developers should therefor
migrate to Jest's documented API instead of relying on the undocumented Jasmine
API.

```
//Bad:
test('my test', () => {
  spyOn(some, 'object');
});

//Good:
test('my test', () => {
  jest.spyOn(some, 'object');
});
```

[Source](https://github.com/jest-community/eslint-plugin-jest/blob/7707e1449e44d24de3507c0653fd5f3a9e3c0735/docs/rules/no-jasmine-globals.md)
