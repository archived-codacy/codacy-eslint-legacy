This rule restricts the use of parentheses to only where they are necessary. It may be restricted to report only function expressions.
A few cases of redundant parentheses are always allowed:
The default behavior of the rule is specified by "all" and it will report unnecessary parentheses around any expression. The following patterns are considered problems:

```
/*eslint no-extra-parens: 2*/ a = (b * c);
/*error Gratuitous parentheses around expression.*/ (a * b) + c;
/*error Gratuitous parentheses around expression.*/ typeof (a);
/*error Gratuitous parentheses around expression.*/
```

[Source](http://eslint.org/docs/rules/no-extra-parens)
