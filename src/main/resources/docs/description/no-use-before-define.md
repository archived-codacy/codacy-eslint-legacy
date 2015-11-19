In JavaScript, prior to ES6, variable and function declarations are hoisted to the top of a scope, so it's possible to use identifiers before their formal declarations in code. This can be confusing and some believe it is best to always declare variables and functions before using them. In ES6, block-level bindings (let and const) introduce a "temporal dead zone" where a ReferenceError will be thrown with any attempt to access the variable before its declaration. This rule will warn when it encounters a reference to an identifier that has not been yet declared.

```
//Bad:
alert(a);
var a = 10;

f();
function f() {
}


```

[Source](http://eslint.org/docs/rules/no-use-before-define)
