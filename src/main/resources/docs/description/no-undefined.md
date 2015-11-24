The undefined variable is unique in JavaScript because it is actually a property of the global object. As such, in ECMAScript 3 it was possible to overwrite the value of undefined. While ECMAScript 5 disallows overwriting undefined, it's still possible to shadow undefined.
This represents a problem for undefined that doesn't exist for null, which is a keyword and primitive value that can neither be overwritten nor shadowed.

```
//Bad:
var foo = undefined;
var undefined = "foo";
if (foo === undefined) { 
    // ...
}

```

[Source](http://eslint.org/docs/rules/no-undefined)
