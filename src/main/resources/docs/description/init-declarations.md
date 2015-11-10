In JavaScript, variables can be assigned during declaration, or at any point afterwards using an assignment statement. For example, in the following code, foo is initialized during declaration, while bar is initialized later.
This rule is aimed at enforcing or eliminating variable initializations during declaration. For example, in the following code, foo is initialized during declaration, while bar is not.
This rule aims to bring consistency to variable initializations and declarations.

```
var foo = 1;
var bar;
if (foo) {
	bar = 1;
}
else {
	bar = 2;
}

```

[Source](http://eslint.org/docs/rules/init-declarations)
