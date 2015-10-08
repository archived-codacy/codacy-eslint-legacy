__proto__ property has been deprecated as of ECMAScript 3.1 and shouldn't be used in the code. Use getPrototypeOf method instead.
When an object is created __proto__ is set to the original prototype property of the object’s constructor function. getPrototypeOf is the preferred method of getting "the prototype".
The following patterns are considered problems:

```
/*eslint no-proto: 2*/ var a = obj.__proto__;
/*error The '__proto__' property is deprecated.*/ var a = obj["__proto__"];
/*error The '__proto__' property is deprecated.*/
```

[Source](http://eslint.org/docs/rules/no-proto)
