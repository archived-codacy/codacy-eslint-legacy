Looping over objects with a for in loop will include properties that are inherited through the prototype chain. This behavior can lead to unexpected items in your for loop.
This rule is aimed at preventing unexpected behavior that could arise from using a for in loop without filtering the results in the loop. As such, it will warn when for in loops do not filter their results with an if statement.
The following patterns are considered problems:

```
//Bad:
for (key in foo) {
    doSomething(key);
}
//Good:
for (key in foo) {
    if ({}.hasOwnProperty.call(foo, key)) {
        doSomething(key);
    }
}
```

[Source](http://eslint.org/docs/rules/guard-for-in)
