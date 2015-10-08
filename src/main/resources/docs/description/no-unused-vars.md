Variables that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring. Such variables take up space in the code and can lead to confusion by readers.
This rule is aimed at eliminating unused variables, functions and variables in parameters of functions, as such, warns when one is found.
A variable is considered to be used when it:

```
/*eslint no-unused-vars: 2*/ /*global some_unsed_var */ /*error "some_unsed_var" is defined but never used*/ //It checks variables you have defined as global some_unsed_var = 42;
var x;
/*error "x" is defined but never used*/ var y = 10;
/*error "y" is defined but never used*/ y = 5;
// By default, unused arguments cause warnings. (function(foo) {
/*error "foo" is defined but never used*/ return 5;
}
)();
// Unused recursive functions also cause warnings. function fact(n) {
/*error "fact" is defined but never used*/ if (n < 2) return 1;
return n * fact(n - 1);
}

```

[Source](http://eslint.org/docs/rules/no-unused-vars)
