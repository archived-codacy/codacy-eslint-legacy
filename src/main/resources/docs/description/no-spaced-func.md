While it's possible to have whitespace between the name of a function and the parentheses that execute it, such patterns tend to look more like errors. Fixable: This rule is automatically fixable using the --fix flag on the command line. This rule does not allow gaps between the function identifier and application.

```
//Bad:
fn ()
fn
()

//Good:
fn()
```

[Source](http://eslint.org/docs/rules/no-spaced-func)
