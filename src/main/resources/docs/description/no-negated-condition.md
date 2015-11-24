Checks against the use of a negated expression in an if condition when the else branch is not empty or in a ternary operator. Negated conditions are more difficult to understand. Code can be made more readable by inverting the condition instead.

```
//Bad:
if (!a) { 
    doSomething();
} else {
    doSomethingElse();
}

//Good:
if (a) {
    doSomethingElse();
}
else {
    doSomething();
}
```

[Source](http://eslint.org/docs/rules/no-negated-condition)
