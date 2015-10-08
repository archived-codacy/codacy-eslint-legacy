Before ES2015, one must use Function.prototype.apply() to call variadic functions.
In ES2015, one can use the spread operator to call variadic functions.
This rule is aimed to flag usage of Function.prototype.apply() that can be replaced with the spread operator.

```
var args = [1, 2, 3, 4];
Math.max.apply(Math, args);

```

[Source](http://eslint.org/docs/rules/prefer-spread)
