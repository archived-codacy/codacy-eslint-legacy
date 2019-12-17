Disallow setup in describe blocks (no-setup-in-describe)

Setup for test cases in mocha should be done in before, beforeEach, or it blocks. Unfortunately there is nothing stopping you from doing setup directly inside a describe block.

Any setup directly in a describe is run before all tests execute. This is undesirable primarily for two reasons:

When doing TDD in a large codebase, all setup is run for tests that don't have only set. This can add a substantial amount of time per iteration.
If global state is altered by the setup of another describe block, your test may be affected.
This rule reports all function calls and use of the dot operator (due to getters and setters) directly in describe blocks.

If you're using dynamically generated tests, you should disable this rule.

```
//Bad:
describe('something', function () {
    let a = b.c;
    it('should work', function () {});
});

//Good:
describe('something', function () {
    var a;
    beforeEach(function() {
        a = setup();
    });
    it('should work', function () {});
});
```

[Source](https://github.com/lo1tuma/eslint-plugin-mocha/blob/master/docs/rules/no-setup-in-describe.md)
