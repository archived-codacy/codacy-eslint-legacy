In ES2015 (ES6), we can use template literals instead of string concatenation.
This rule is aimed to flag usage of + operators with strings.
The following patterns are considered problems:

```
//Bad:
var str = "Hello, " + name + "!";
var str = "Time: " + (12 * 60 * 60 * 1000);

//Good:
var str = "Hello World!";
var str = `Hello, ${name}!`;
var str = `Time: ${12 * 60 * 60}`;

```

[Source](http://eslint.org/docs/rules/prefer-template)
