Labeled statements are only used in conjunction with labeled break and continue statements. ECMAScript has no goto statement.
This error occurs when a label is used to mark a statement that is not an iteration or switch

```
//Bad:
labeled:
var x = 10;

//Good:
labeled:
for (var i=10; i; i--) {
    // ...
}

```

[Source](http://eslint.org/docs/rules/no-empty-label)
