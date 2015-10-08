In JavaScript, a variable that is declared and not initialized to any value automatically gets the value of undefined. For example:
It's therefore unnecessary to initialize a variable to undefined, such as:
It's considered a best practice to avoid initializing variables to undefined.

```
var foo;
console.log(foo === undefined);
// true
```

[Source](http://eslint.org/docs/rules/no-undef-init)
