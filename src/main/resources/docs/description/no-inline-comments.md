Some style guides disallow a comments on the same line as code. If there are comments immediately following code, it can make it harder to read the code. On the other hand, it is sometimes faster and more obvious to put comments immediately following code.
This rule will disallow comments on the same line as code.
This rule takes no arguments.

```
/*eslint no-inline-comments: 2*/ var a = 1;
// declaring a to 1 /*error Unexpected comment inline with code.*/ function getRandomNumber(){
return 4;
// chosen by fair dice roll. /*error Unexpected comment inline with code.*/ // guaranteed to be random. }
/* A block comment before code */ var b = 2;
/*error Unexpected comment inline with code.*/ var c = 3;
/* A block comment after code */ /*error Unexpected comment inline with code.*/
```

[Source](http://eslint.org/docs/rules/no-inline-comments)
