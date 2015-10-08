Unused expressions are those expressions that evaluate to a value but are never used. For example:
This string is a valid JavaScript expression, but isn't actually used. Even though it's not a syntax error it is clearly a logic error and it has no effect on the code being executed.
This rule aims to eliminate unused expressions. The value of an expression should always be used, except in the case of expressions that side effect: function calls, assignments, and the new operator.

```
"Hello world";

```

[Source](http://eslint.org/docs/rules/no-unused-expressions)
