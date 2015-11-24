Generators are a new type of function in ECMAScript 6 that can return multiple values over time. These special functions are indicated by placing an * after the function keyword. This rule enforces a space before and/or after the "*" keyword.
Example:
```
//Enforced with "before" = true and "after" = false
function *generator() {}
var anonymous = function *() {};
var shorthand = { *generator() {} };

//Good wtih

```

[Source](http://eslint.org/docs/rules/generator-star-spacing)
