When declaring multiple variables within the same block, some developers prefer to sort variable names alphabetically to be able to find necessary variable easier at the later time. Others feel that it adds complexity and becomes burden to maintain.
This rule checks all variable declaration blocks and verifies that all variables are sorted alphabetically. The default configuration of the rule is case-sensitive.
The following patterns are considered problems:

```
/*eslint sort-vars: 2*/ var b, a;
/*error Variables within the same declaration block should be sorted alphabetically*/ var a, B, c;
/*error Variables within the same declaration block should be sorted alphabetically*/ var a, A;
/*error Variables within the same declaration block should be sorted alphabetically*/
```

[Source](http://eslint.org/docs/rules/sort-vars)
