Empty character classes in regular expressions do not match anything and can result in code that may not work as intended.
This rule is aimed at highlighting possible typos and unexpected behavior in regular expressions which may arise from the use of empty character classes.

```
//Bad:
var foo = /^abc[]/;  /*error Empty class.*/
/^abc[]/.test(foo);  /*error Empty class.*/
bar.match(/^abc[]/); /*error Empty class.*/

//Good:
var foo = /^abc/;
var foo = /^abc[a-z]/;
var bar = new RegExp("^abc[]");


```

[Source](http://eslint.org/docs/rules/no-empty-character-class)
