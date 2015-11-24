Semicolons are optional in JavaScript, via a process called automatic semicolon insertion (ASI). See the documentation for semi for a fuller discussion of that feature.
The rules for ASI are relatively straightforward: In short, as once described by Isaac Schlueter, a \n character always ends a statement (just like a semicolon) unless one of the following is true: This particular rule aims to spot scenarios where a newline looks like it is ending a statement, but is not. This rule is aimed at ensuring that two unrelated consecutive lines are not accidentially interpreted as a single expression.

```
//Bad:
var foo = bar
(1 || 2).
baz();

var hello = 'world'
[1, 2, 3].forEach(addNumber);
```

[Source](http://eslint.org/docs/rules/no-unexpected-multiline)
