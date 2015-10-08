Shadowing is the process by which a local variable shares the same name as a variable in its containing scope. For example:
In this case, the variable a inside of b() is shadowing the variable a in the global scope. This can cause confusion while reading the code and it's impossible to access the global variable.
This rule aims to eliminate shadowed variable declarations.

```
var a = 3;
function b() {
var a = 10;
}

```

[Source](http://eslint.org/docs/rules/no-shadow)
