In JavaScript, prior to ES6, standalone code blocks delimited by curly braces do not create a new scope and have no use. In ES6, code blocks may create a new scope if a block-level binding (let and const), a class declaration or a function declaration (in strict mode) are present. A block is not considered redundant in these cases. This rule aims to eliminate unnecessary and potentially confusing blocks at the top level of a script or within other blocks.

```
//Bad:
if (foo) {
    bar();
    { 
        baz();
    }
}
//Good:
if (foo) {
    bar();
    baz();
}
```

[Source](http://eslint.org/docs/rules/no-lone-blocks)
