This rule generates warnings for generator functions that do not have the yield keyword.

```

//Bad:
function* foo() { /*error This generator function does not have `yield`.*/
  return 10;
}

//Good:
function* foo() {
  yield 5;
  return 10;
}

```

[Source](http://eslint.org/docs/rules/require-yield)
