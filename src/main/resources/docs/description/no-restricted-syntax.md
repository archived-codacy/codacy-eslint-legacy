Some code bases prefer to not use certain features of JavaScript that are identified on the parsed AST such as FunctionExpression or WithStatement. This is implemented to warn on any AST node type that is passed to it. This rule is aimed at eliminating certain syntax from your JavaScript. As such, it warns whenever it sees a node type that is restricted by its options.

```
//with "no-restricted-syntax": [2, "FunctionExpression"]

//This is bad:
var doSomething = function () {};


```

[Source](http://eslint.org/docs/rules/no-restricted-syntax)
