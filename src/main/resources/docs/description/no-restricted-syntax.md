Some code bases prefer to not use certain features of JavaScript that are identified on the parsed AST such as FunctionExpression or WithStatement. This is implemented to warn on any AST node type that is passed to it. You may find the full list of AST node names you can use on GitHub and use the online parser to see what type of nodes your code consists of.
This rule is aimed at eliminating certain syntax from your JavaScript. As such, it warns whenever it sees a node type that is restricted by its options.
This rule takes a list of strings where strings denote the node types:

```
http://eslint.org/docs/rules/no-restricted-syntax
```

[Source](http://eslint.org/docs/rules/no-restricted-syntax)
