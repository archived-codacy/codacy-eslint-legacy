While formatting preferences are very personal, a number of style guides require or disallow spaces between computed properties in the following situations:
Fixable: This rule is automatically fixable using the --fix flag on the command line.
This rule aims to maintain consistency around the spacing inside of computed properties.

```
/*eslint-env es6*/ // computed properties var obj = {
prop: "value" }
;
var a = "prop";
var x = obj[a];
// object literal computed properties (EcmaScript 6) var a = "prop";
var obj = {
[a]: "value" }
;

```

[Source](http://eslint.org/docs/rules/computed-property-spacing)
