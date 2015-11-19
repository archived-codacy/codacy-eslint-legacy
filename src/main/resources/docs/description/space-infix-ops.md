While formatting preferences are very personal, a number of style guides require spaces around operators.
The proponents of these extra spaces believe it make the code easier to read and can more easily highlight potential errors.
While this is valid JavaScript syntax, it is hard to determine what the author intended.

```
//Bad:
a+b
a+ b
a +b

//Good:
a + b
a       + b
a ? b : c

```

[Source](http://eslint.org/docs/rules/space-infix-ops)
