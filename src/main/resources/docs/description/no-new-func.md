It's possible to create functions in JavaScript using the Function constructor. This is considered by many to be a bad practice due to the difficult in debugging and reading these types of functions. This error is raised to highlight the use of a bad practice. By passing a string to the Function constructor, you are requiring the engine to parse that string much in the way it has to when you call the eval function.

```
//Bad:
var x = new Function("a", "b", "return a + b");

//Good:
var x = function (a, b) {
    return a + b;
};
```

[Source](http://eslint.org/docs/rules/no-new-func)
