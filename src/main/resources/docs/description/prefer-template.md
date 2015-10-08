In ES2015 (ES6), we can use template literals instead of string concatenation.
This rule is aimed to flag usage of + operators with strings.
The following patterns are considered problems:

```
var str = "Hello, " + name + "!";

```

[Source](http://eslint.org/docs/rules/prefer-template)
