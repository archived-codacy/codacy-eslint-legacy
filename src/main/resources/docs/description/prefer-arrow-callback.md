Arrow functions are suited to callbacks. This rule is aimed to flag usage of function expressions in an argument list.

```
//Bad:
foo(function(a) { return a; });
foo(function() { return this.a; }.bind(this));

//Good:
foo(a => a);
foo(function*() { yield; });
var foo = function foo(a) { return a; };

```

[Source](http://eslint.org/docs/rules/prefer-arrow-callback)
