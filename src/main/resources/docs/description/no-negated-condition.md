Checks against the use of a negated expression in an if condition when the else branch is not empty or in a ternary operator. Negated conditions are more difficult to understand. Code can be made more readable by inverting the condition instead.
For example:
should instead be written as:

```
if (!a) {
doSomething();
}
else {
doSomethingElse();
}

```

[Source](http://eslint.org/docs/rules/no-negated-condition)
