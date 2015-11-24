This rule is for spacing style within single line blocks.
Fixable: This rule is automatically fixable using the --fix flag on the command line.
This rule is aimed to flag usage of spacing inside of blocks. This rule has a option, its value is "always" or "never".

```
//Bad:
function foo() {return true;} /*error Requires a space after "{".*/ /*error Requires a space before "}".*/
if (foo) { bar = 0;}          /*error Requires a space before "}".*/
//Good:
function foo() { return true; }
if (foo) { bar = 0; }
```

[Source](http://eslint.org/docs/rules/block-spacing)
