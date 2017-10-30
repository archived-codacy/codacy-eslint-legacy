When declaring multiple variables within the same block, some developers prefer to sort variable names alphabetically to be able to find necessary variable easier at the later time. Others feel that it adds complexity and becomes burden to maintain. This rule checks all variable declaration blocks and verifies that all variables are sorted alphabetically. The default configuration of the rule is case-sensitive.

```
//Bad:
var b, a;
var a, B, c;
var a, A;

//Good:
var A, a;
var B, a, c;
```

[Source](http://eslint.org/docs/rules/sort-vars)
