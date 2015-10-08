Some styleguides require or disallow spaces preceding certain keywords.
Fixable: This rule is automatically fixable using the --fix flag on the command line.
This rule will enforce consistency of spacing before the keywords if, else, for, while, do, switch, throw, try, catch, finally, with, break, continue, return, function, yield, class and variable declarations (let, const, var) and label statements.

```
/*eslint space-before-keywords: [2, "never"]*/ if (foo) {
// ... }
else {
}
/*error Unexpected space before keyword "else".*/ do {
}
while (foo) /*error Unexpected space before keyword "while".*/ try {
}
finally {
}
/*error Unexpected space before keyword "finally".*/ try {
}
catch(e) {
}
/*error Unexpected space before keyword "catch".*/
```

[Source](http://eslint.org/docs/rules/space-before-keywords)
