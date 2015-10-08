It's a common mistake in JavaScript to use a conditional expression to select between two Boolean values instead of using ! to convert the test to a Boolean. Here are some examples:
This rule disallows the use of 'Boolean' literals inside conditional expressions.
Another common mistake is using a single variable as both the conditional test and the consequent. In such cases, the logical OR can be used to provide the same functionality. Here is an example:

```
// Bad var isYes = answer === 1 ? true : false;
// Good var isYes = answer === 1;
// Bad var isNo = answer === 1 ? false : true;
// Good var isYes = answer !== 1;

```

[Source](http://eslint.org/docs/rules/no-unneeded-ternary)
