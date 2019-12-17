Disallow using promise without a done.fail (no-promise-without-done-fail).

Make sure that all uses of the promises include a catch(done.fail) within a suite.

```
//Bad:
describe('A suite', function(done) {
  it('A spec', function() {
    asyncCall().then(done);
  });
});

//Good:
describe('A suite', function(done) {
  it('A spec', function() {
    asyncCall().then(function() {
      expect(true).toBe(true);
      done();
    }).catch(done.fail);
  });
});
```

[Source](https://github.com/tlvince/eslint-plugin-jasmine/blob/9bd0f76eefa22ae8e04658bc598b6d404379121d/docs/rules/no-promise-without-done-fail.md)
