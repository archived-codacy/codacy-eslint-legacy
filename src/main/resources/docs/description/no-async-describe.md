Disallow async functions passed to describe (no-async-describe)

This rule disallows the use of an async function with describe. It usually indicates a copy/paste error or that you're trying to use describe for setup code, which should happen in before or beforeEach. Also, it can lead to the contained it blocks not being picked up.

```
//Bad:
describe('something', async function () {
    it('should work', function () {});
});

describe('something', async () => {
    it('should work', function () {});
});

//Good:
async function mySuite() {
    it('my test', () => {});
}

describe('my suite', mySuite);
```

[Source](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-async-describe.md)
