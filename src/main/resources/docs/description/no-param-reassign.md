Assignment to variables declared as function parameters can be misleading and lead to confusing behavior, as modifying function parameters will also mutate the arguments object. Often, assignment to function parameters is unintended and indicative of a mistake or programmer error.
This rule aims to prevent unintended behavior caused by overwriting function parameters.
This rule takes one option, an object, with a property "props".

```
function foo(bar) {
    bar = 13;       /*error Assignment to function parameter 'bar'.*/
}

function foo(bar) {
    bar++;          /*error Assignment to function parameter 'bar'.*/
}
```

The default of the property "props" is false, and only prohibits the reassignment to parameters.
If you set "props" to true, the following will also be a problem:

```
function foo(bar) {
    bar.prop = "value"; /*error Assignment to function parameter 'bar'.*/
}

function foo(bar) {
    delete bar.aaa;     /*error Assignment to function parameter 'bar'.*/
}

function foo(bar) {
    bar.aaa++;          /*error Assignment to function parameter 'bar'.*/
}
```

[Source](http://eslint.org/docs/rules/no-param-reassign)
