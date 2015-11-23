In JavaScript, one can access properties using the dot notation (foo.bar) or square-bracket notation (foo["bar"]). However, the dot notation is often preferred because it is easier to read, less verbose, and works better with aggressive JavaScript minimizers.
This rule is aimed at maintaining code consistency and improving code readability by encouraging use of the dot notation style whenever possible. As such, it will warn when it encounters an unnecessary use of square-bracket notation.

```
//Bad
foo["bar"];

//Good
foo.bar

```

[Source](http://eslint.org/docs/rules/dot-notation)
