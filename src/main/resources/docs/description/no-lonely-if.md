If an if statement is the only statement in the else block of a parent if statement, it is often clearer to combine the two to using else if form.
should be rewritten as
This rule warns when an if statement's else block contains only another if statement.

```
if (foo) {
// ... }
else {
if (bar) {
// ... }
}

```

[Source](http://eslint.org/docs/rules/no-lonely-if)
