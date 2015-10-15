In JavaScript, it's possible to redeclare the same variable name using var. This can lead to confusion as to where the variable is actually declared and initialized.
This rule is aimed at eliminating variables that have multiple declarations in the same scope.
The following patterns are considered problems:

```
var a = 3;
var a = 10; /*error "a" is already defined*/
```

This rule takes one option, an object, with a property "builtinGlobals".
False by default. If this is true, this rule checks with built-in global variables such as Object, Array, Number, ...

When {"builtinGlobals": true}, the following patterns are also considered problems:

```
var Object = 0; /*error "Object" is already defined*/
```

[Source](http://eslint.org/docs/rules/no-redeclare)
