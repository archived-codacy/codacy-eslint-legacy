Labeled statements are only used in conjunction with labeled break and continue statements. ECMAScript has no goto statement.
This error occurs when a label is used to mark a statement that is not an iteration or switch
The following patterns are considered problems:

```
/*eslint no-empty-label: 2*/ labeled: /*error Unexpected label "labeled"*/ var x = 10;

```

[Source](http://eslint.org/docs/rules/no-empty-label)
