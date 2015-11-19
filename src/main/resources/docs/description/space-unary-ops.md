Some styleguides require or disallow spaces before or after unary operators. This is mainly a stylistic issue, however, some JavaScript expressions can be written without spacing which makes it harder to read and maintain.
Fixable: This rule is automatically fixable using the --fix flag on the command line.
This rule enforces consistency regarding the spaces after words unary operators and after/before nonwords unary operators.

```
//Bad:
typeof!foo;
void{foo:0};
new[foo][0];

//Good:
delete foo.bar;
new Foo;
void 0;


```

[Source](http://eslint.org/docs/rules/space-unary-ops)
