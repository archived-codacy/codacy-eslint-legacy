Float values in JavaScript contain a decimal point, and there is no requirement that the decimal point be preceded or followed by a number. Although not a syntax error, this format for numbers can make it difficult to distinguish between true decimal numbers and the dot operator. For this reason, some recommend that you should always include a number before and after a decimal point to make it clear the intent is to create a decimal number. This rule is aimed at eliminating floating decimal points and will warn whenever a numeric value has a decimal point but is missing a number either before or after it. If you aren't concerned about misinterpreting floating decimal point values, then you can safely turn this rule off.

```
//Bad:
var num = .5;
var num = 2.;
var num = -.7;

//Good:
var num = 0.5;
var num = 2.0;

```

[Source](http://eslint.org/docs/rules/no-floating-decimal)
