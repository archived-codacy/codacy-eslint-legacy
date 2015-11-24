It is unncessary to concatenate two strings together when they are on the same line since they could be combined into a single string ("a" + "b" -> "ab"). This rule aims to flag the concenation of 2 literals when they could be combined into a single literal. Literals can be strings or template literals.


```
//Bad:
var a = `some` + `string`;
var a = '1' + '0';
var a = '1' + `0`;

//Good:
var c = a + b;
var c = '1' + a;
var a = 1 + '1';

```

[Source](http://eslint.org/docs/rules/no-useless-concat)
