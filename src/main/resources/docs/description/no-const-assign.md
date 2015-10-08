We cannot modify variables that are declared using const keyword. It will raise a runtime error.
Under non ES2015 environment, it might be ignored merely.
This rule is aimed to flag modifying variables that are declared using const keyword.

```
/*eslint no-const-assign: 2*/ /*eslint-env es6*/ const a = 0;
a = 1;
/*error `a` is constant.*/
```

[Source](http://eslint.org/docs/rules/no-const-assign)
