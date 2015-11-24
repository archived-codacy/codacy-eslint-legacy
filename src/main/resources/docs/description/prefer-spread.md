Before ES2015, one must use Function.prototype.apply() to call variadic functions.
In ES2015, one can use the spread operator to call variadic functions.
This rule is aimed to flag usage of Function.prototype.apply() that can be replaced with the spread operator.

```
//Bad:
foo.apply(undefined, args);
foo.apply(null, args);
obj.foo.apply(obj, args);

//Good:
foo.apply(obj, args);
obj.foo.apply(null, args);
obj.foo.apply(otherObj, args);


```

[Source](http://eslint.org/docs/rules/prefer-spread)
