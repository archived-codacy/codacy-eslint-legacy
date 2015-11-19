In JavaScript, a variable that is declared and not initialized to any value automatically gets the value of undefined. It's therefore unnecessary to initialize a variable to undefined.
It's considered a best practice to avoid initializing variables to undefined.

```
//Bad:
var foo;
console.log(foo === undefined);

```

[Source](http://eslint.org/docs/rules/no-undef-init)
