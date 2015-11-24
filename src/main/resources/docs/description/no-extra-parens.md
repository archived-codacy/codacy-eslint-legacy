This rule restricts the use of parentheses to only where they are necessary. It may be restricted to report only function expressions.
The default behavior of the rule is specified by "all" and it will report unnecessary parentheses around any expression. If the option is set to "functions", only function expressions will be checked for unnecessary parentheses. 

```
//Bad:
a = (b * c);
(a * b) + c;
typeof (a);

//Good:
(0).toString();
({}.toString.call());
(function(){} ? a() : b())
(/^a$/).test(x);

//Bad with argument functions:
((function foo() {}))();

```

[Source](http://eslint.org/docs/rules/no-extra-parens)
