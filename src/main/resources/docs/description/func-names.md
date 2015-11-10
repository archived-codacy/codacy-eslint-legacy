A pattern that's becoming more common is to give function expressions names to aid in debugging, such as:
Adding the second bar in the above example is optional. If you leave off the function name then when the function throws an exception you are likely to get something similar to anonymous function in the stack trace. If you provide the optional name for a function expression then you will get the name of the function expression in the stack trace.
The following patterns are considered problems:

```
//Bad:
Foo.prototype.bar = function() {};
(function() {
    // ...
}())

//Good:
Foo.prototype.bar = function bar() {};
(function bar() {
    // ...
}())

```

[Source](http://eslint.org/docs/rules/func-names)
