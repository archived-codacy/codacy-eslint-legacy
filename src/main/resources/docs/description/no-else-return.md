If an if block contains a return statement, the else block becomes unnecessary. Its contents can be placed outside of the block.
This rule is aimed at highlighting an unnecessary block of code following an if containing a return statement. As such, it will warn when it encounters an else following a chain of ifs, all of them containing a return statement.
The following patterns are considered problems:

```
function foo() {
if (x) {
return y;
}
else {
return z;
}
}

```

[Source](http://eslint.org/docs/rules/no-else-return)
