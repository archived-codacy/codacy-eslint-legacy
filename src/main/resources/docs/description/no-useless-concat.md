It is unncessary to concatenate two strings together when they are on the same line since they could be combined into a single string ("a" + "b" -> "ab").
This rule aims to flag the concenation of 2 literals when they could be combined into a single literal. Literals can be strings or template literals.
The following patterns are considered problems:

```
var a = `some` + `string`; /*error Unexpected string concatenation of literals.*/
var a = '1' + '0';         /*error Unexpected string concatenation of literals.*/
var a = '1' + `0`;         /*error Unexpected string concatenation of literals.*/
```

[Source](http://eslint.org/docs/rules/no-useless-concat)
