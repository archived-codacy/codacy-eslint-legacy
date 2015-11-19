JavaScript allows the omission of parentheses when invoking a function via the new keyword and the constructor has no arguments. However, some coders believe that omitting the parentheses is inconsistent with the rest of the language and thus makes code less clear.
This rule is aimed at highlighting a lack of convention and increasing code clarity by requiring the use of parentheses when invoking a constructor via the new keyword. As such, it will warn when these parentheses are omitted.


```
//Bad:
var person = new Person;

//Good:
var person = new Person();

```

[Source](http://eslint.org/docs/rules/new-parens)
