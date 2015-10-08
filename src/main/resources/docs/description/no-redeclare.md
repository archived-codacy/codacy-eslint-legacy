In JavaScript, it's possible to redeclare the same variable name using var. This can lead to confusion as to where the variable is actually declared and initialized.
This rule is aimed at eliminating variables that have multiple declarations in the same scope.
The following patterns are considered problems:

```
/*eslint no-redeclare: 2*/ var a = 3;
var a = 10;
/*error "a" is already defined*/
```

[Source](http://eslint.org/docs/rules/no-redeclare)
