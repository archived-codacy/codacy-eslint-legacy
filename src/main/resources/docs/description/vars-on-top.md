The vars-on-top rule generates warnings when variable declarations are not used serially at the top of a function scope or the top of a program. By default variable declarations are always moved (“hoisted”) invisibly to the top of their containing scope by the JavaScript interpreter. This rule forces the programmer to represent that behaviour by manually moving the variable declaration to the top of its containing scope. This rule aims to keep all variable declarations in the leading series of statements. Allowing multiple declarations helps promote maintainability and is thus allowed.

```
//Bad:
function doSomething() {
    var first;
    if (true) {
        first = true;
    }
    var second;
}
function doSomething() {
    var first,second;
    if (true) {
        first = true;
    }
}
```

[Source](http://eslint.org/docs/rules/vars-on-top)
