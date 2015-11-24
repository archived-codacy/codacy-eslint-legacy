Unused expressions are those expressions that evaluate to a value but are never used. This rule aims to eliminate unused expressions. The value of an expression should always be used, except in the case of expressions that side effect: function calls, assignments, and the new operator.

```
//Bad:
3 + 4;

```

[Source](http://eslint.org/docs/rules/no-unused-expressions)
