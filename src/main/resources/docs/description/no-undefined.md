The undefined variable is unique in JavaScript because it is actually a property of the global object. As such, in ECMAScript 3 it was possible to overwrite the value of undefined. While ECMAScript 5 disallows overwriting undefined, it's still possible to shadow undefined, such as:
This represents a problem for undefined that doesn't exist for null, which is a keyword and primitive value that can neither be overwritten nor shadowed.
All uninitialized variables automatically get the value of undefined:

```
function doSomething(data) {
var undefined = "hi";
// doesn't do what you think it does if (data === undefined) {
// ... }
}

```

[Source](http://eslint.org/docs/rules/no-undefined)
