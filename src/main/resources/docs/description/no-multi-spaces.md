Multiple spaces in a row that are not used for indentation are typically mistakes. For example:
It's hard to tell, but there are two spaces between foo and ===. Multiple spaces such as this are generally frowned upon in favor of single spaces:
Fixable: This rule is automatically fixable using the --fix flag on the command line.

```
if(foo === "bar") {
}

```

[Source](http://eslint.org/docs/rules/no-multi-spaces)
