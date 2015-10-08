Any reference to an undeclared variable causes a warning, unless the variable is explicitly mentioned in a /*global ...*/ comment. This rule provides compatibility with JSHint's and JSLint's treatment of global variables.
This rule can help you locate potential ReferenceErrors resulting from misspellings of variable and parameter names, or accidental implicit globals (for example, from forgetting the var keyword in a for loop initializer).
The following code causes 2 warnings, as the globals someFunction and b have not been declared.

```
/*eslint no-undef: 2*/ var a = someFunction();
/*error "someFunction" is not defined.*/ b = 10;
/*error "b" is not defined.*/
```

[Source](http://eslint.org/docs/rules/no-undef)
