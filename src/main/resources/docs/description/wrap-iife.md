Require immediate function invocation to be wrapped in parentheses. Since function statements cannot be immediately invoked, and function expressions can be, a common technique to create an immediately-invoked function expression is to simply wrap a function statement in parentheses. The opening parentheses causes the contained function to be parsed as an expression, rather than a declaration. The rule takes one option which can enforce a consistent wrapping style. The default is outside.

```
//Bad:
var x = function () { return { y: 1 };}();

//Good:
var x = (function () { return { y: 1 };}());

```

[Source](http://eslint.org/docs/rules/wrap-iife)
