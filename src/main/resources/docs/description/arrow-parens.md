Arrow functions can omit parentheses when they have exactly one parameter. In all other cases the parameter(s) must be wrapped in parentheses. This rule enforces the consistent use of parentheses in arrow functions.
This rule enforces parentheses around arrow function parameters regardless of arity. For example:
Following this style will help you find arrow functions (=>) which may be mistakenly included in a condition when a comparison such as >= was the intent.

```
// Bad 
a => {
}
// Good 
(a) => {
}

```

[Source](http://eslint.org/docs/rules/arrow-parens)
