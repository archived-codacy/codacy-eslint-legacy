The function invocation can be written by Function.prototype.call() and Function.prototype.apply(). But Function.prototype.call() and Function.prototype.apply() are slower than the normal function invocation.
This rule is aimed to flag usage of Function.prototype.call() and Function.prototype.apply() that can be replaced with the normal function invocation.
The following patterns are considered problems:

```
// These are same as `foo(1, 2, 3);`
foo.call(undefined, 1, 2, 3);     /*error unnecessary ".call()".*/
foo.apply(undefined, [1, 2, 3]);  /*error unnecessary ".apply()".*/
foo.call(null, 1, 2, 3);          /*error unnecessary ".call()".*/
foo.apply(null, [1, 2, 3]);       /*error unnecessary ".apply()".*/

// These are same as `obj.foo(1, 2, 3);`
obj.foo.call(obj, 1, 2, 3);       /*error unnecessary ".call()".*/
obj.foo.apply(obj, [1, 2, 3]);    /*error unnecessary ".apply()".*/
```

For more information and known limitations follow the link.

[Source](http://eslint.org/docs/rules/no-useless-call)
