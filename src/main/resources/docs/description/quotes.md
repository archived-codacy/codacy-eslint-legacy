JavaScript allows you to define strings in one of three ways: double quotes, single quotes, and backticks (as of ECMAScript 6). Each of these lines creates a string and, in some cases, can be used interchangeably. The choice of how to define strings in a codebase is a stylistic one outside of template literals (which allow embedded of expressions to be interpreted). Many codebases require strings to be defined in a consistent manner. This rule takes as parameter the style you prefer ("double", "single" or "backtick") default is double.

```
//Bad with double:
var single = 'single';
var unescaped = 'a string containing "double" quotes';

```

[Source](http://eslint.org/docs/rules/quotes)
