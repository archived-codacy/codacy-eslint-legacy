JavaScript functions can be written as a FunctionDeclaration function foo() { ... } or as a FunctionExpression var foo = function() { ... };. While a JavaScript interpreter might tolerate it, overwriting/reassigning a function written as a FunctionDeclaration is often indicative of a mistake or issue. This rule is aimed at flagging probable mistakes and issues in the form of overwriting a function that was written as a FunctionDeclaration. As such it will warn when this issue is encountered.

```
//Bad:
function foo() {}
foo = bar; 

//Good:
var foo = function () {}
foo = bar;

```

[Source](http://eslint.org/docs/rules/no-func-assign)
