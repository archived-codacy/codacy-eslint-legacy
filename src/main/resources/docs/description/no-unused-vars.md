Variables that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring. Such variables take up space in the code and can lead to confusion by readers.
This rule is aimed at eliminating unused variables, functions and variables in parameters of functions, as such, warns when one is found.

**vars** option has two settings:

 * **all** checks all variables for usage, including those in the global scope. This is the default setting.

 * **local** checks only that locally-declared variables are used but will allow global variables to be unused.

**args** option has three settings:

 * **all** - all named arguments must be used.
 
 * **after-used** - only the last argument must be used. This allows you, for instance, to have two named parameters to a function and as long as you use the second argument, ESLint will not warn you about the first. This is the default setting.
 
 * **none** - do not check arguments.


```
//Bad:
var y = 10;
y = 5;

(function(foo) {
    return 5;
})();

```

[Source](http://eslint.org/docs/rules/no-unused-vars)
