The function invocation can be written by Function.prototype.call() and Function.prototype.apply(). But Function.prototype.call() and Function.prototype.apply() are slower than the normal function invocation.This rule is aimed to flag usage of Function.prototype.call() and Function.prototype.apply() that can be replaced with the normal function invocation.


```
//Bad:
foo.call(undefined, 1, 2, 3);
foo.apply(undefined, [1, 2, 3]);
foo.call(null, 1, 2, 3);
foo.apply(null, [1, 2, 3]);

//Good:
foo.call(obj, 1, 2, 3);
foo.apply(obj, [1, 2, 3]);
obj.foo.call(null, 1, 2, 3);

```
For more information and known limitations follow the link.

[Source](http://eslint.org/docs/rules/no-useless-call)
