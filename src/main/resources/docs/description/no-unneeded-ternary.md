It's a common mistake in JavaScript to use a conditional expression to select between two Boolean values instead of using ! to convert the test to a Boolean. This rule disallows the use of 'Boolean' literals inside conditional expressions. Another common mistake is using a single variable as both the conditional test and the consequent. In such cases, the logical OR can be used to provide the same functionality.this rule takes one parameter "defaultAssignment" default is false 

```
//Bad:
var isYes = answer === 1 ? true : false;
var isNo = answer === 1 ? false : true;
var a = x ? x : 1;

//Good:
var a = x === 2 ? "Yes" : "No";


// DefaultAssignment: true
// this is good
var a = x ? x : 1;



```

[Source](http://eslint.org/docs/rules/no-unneeded-ternary)
