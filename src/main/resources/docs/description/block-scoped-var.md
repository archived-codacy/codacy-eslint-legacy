The block-scoped-var rule generates warnings when variables are used outside of the block in which they were defined. This emulates C-style block scope.
This rule aims to reduce the usage of variables outside of their binding context and emulate traditional block scope from other languages. This is to help newcomers to the language avoid difficult bugs with variable hoisting.

```
//Bad:
function doSomething() {
    if (true) {
        var build = true;
    }
    console.log(build);
}

//Good:
function doSomething() {
    if (true) {
        var build = true;  
    } else {
        var build = false; 
    }
}
```

[Source](http://eslint.org/docs/rules/block-scoped-var)
