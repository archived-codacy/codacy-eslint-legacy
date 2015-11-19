The with statement is potentially problematic because it adds members of an object to the current scope, making it impossible to tell what a variable inside the block actually refers to. Additionally, the with statement cannot be used in strict mode. This rule is aimed at eliminating with statements.


```
//Bad:
with (foo) {}

```

[Source](http://eslint.org/docs/rules/no-with)
