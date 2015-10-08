JavaScript allows you to define strings in one of three ways: double quotes, single quotes, and backticks (as of ECMAScript 6). For example:
Each of these lines creates a string and, in some cases, can be used interchangeably. The choice of how to define strings in a codebase is a stylistic one outside of template literals (which allow embedded of expressions to be interpreted).
Many codebases require strings to be defined in a consistent manner.

```
/*eslint-env es6*/ var double = "double";
var single = 'single';
var backtick = `backtick`;
// ES6 only
```

[Source](http://eslint.org/docs/rules/quotes)
