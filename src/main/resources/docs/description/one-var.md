Variables can be declared at any point in JavaScript code using var, let, or const. There are many styles and preferences related to the declaration of variables, and one of those is deciding on how many variable declarations should be allowed in a single function.

```
// one variable declaration per function function foo() {
var bar, baz;
}
// multiple variable declarations per function function foo() {
var bar;
var baz;
}

```

[Source](http://eslint.org/docs/rules/one-var)
