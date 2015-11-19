The bind() method is used to create functions with specific this values and, optionally, binds arguments to specific values. When used to specify the value of this, it's important that the function actually use this in its function body. Sometimes during the course of code maintenance, the this value is removed from the function body. In that case, you can end up with a call to bind() that doesn't accomplish anything:

```
//Good:
var boundGetName = (function getName() {
    return this.name;
}).bind({ name: "ESLint" });
console.log(boundGetName());

//Bad:
var boundGetName = (function getName() {
    return "ESLint";
}).bind({ name: "ESLint" });
console.log(boundGetName());

```

[Source](http://eslint.org/docs/rules/no-extra-bind)
