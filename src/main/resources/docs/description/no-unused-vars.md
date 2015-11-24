Variables that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring. Such variables take up space in the code and can lead to confusion by readers. This rule is aimed at eliminating unused variables, functions and variables in parameters of functions, as such, warns when one is found.


```
//Bad:
var y = 10;
y = 5;

(function(foo) {
    return 5;
})();

```

[Source](http://eslint.org/docs/rules/no-unused-vars)
