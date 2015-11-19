In IE 8 and earlier, the catch clause parameter can overwrite the value of a variable in the outer scope, if that variable has the same name as the catch clause parameter.
This rule is aimed at preventing unexpected behavior in your program that may arise from a bug in IE 8 and earlier, in which the catch clause parameter can leak into outer scopes. This rule will warn whenever it encounters a catch clause parameter that has the same name as a variable in an outer scope.


```

//Bad:
var err = "x";
try {
    throw "problem";
} catch (err) {

}

//Good:
var err = "x";

try {
    throw "problem";
} catch (e) {

}

```

[Source](http://eslint.org/docs/rules/no-catch-shadow)
