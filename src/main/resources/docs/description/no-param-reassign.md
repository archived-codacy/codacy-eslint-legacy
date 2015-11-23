Assignment to variables declared as function parameters can be misleading and lead to confusing behavior, as modifying function parameters will also mutate the arguments object. Often, assignment to function parameters is unintended and indicative of a mistake or programmer error. This rule aims to prevent unintended behavior caused by overwriting function parameters.This rule has a parameter - props - (false by default) - If true is set, this rule warns modifying of properties of parameters.

```
//Bad:
function foo(bar) {
    bar = 13;
}


//If you set "props" to true, the following will also be a problem:

function foo(bar) {
    bar.prop = "value";
}

function foo(bar) {
    delete bar.aaa;
```

[Source](http://eslint.org/docs/rules/no-param-reassign)
