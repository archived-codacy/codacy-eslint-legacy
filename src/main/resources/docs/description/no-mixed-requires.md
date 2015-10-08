In the Node.JS community it is often customary to separate the required modules from other variable declarations, sometimes also grouping them by their type. This rule helps you enforce this convention.
When this rule is enabled, all var statements must satisfy the following conditions:
This rule comes with option called grouping which is turned off by default. You can set it in your eslint.json:

```
http://eslint.org/docs/rules/no-mixed-requires
```

[Source](http://eslint.org/docs/rules/no-mixed-requires)
