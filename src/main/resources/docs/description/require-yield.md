This rule generates warnings for generator functions that do not have the yield keyword.
The following patterns are considered problems:
The following patterns are not considered problems:

```
/*eslint require-yield: 2*/ /*eslint-env es6*/ function* foo() {
/*error This generator function does not have `yield`.*/ return 10;
}

```

[Source](http://eslint.org/docs/rules/require-yield)
