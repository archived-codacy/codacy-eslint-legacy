Some styleguides require or disallow spaces preceding certain keywords. This rule will enforce consistency of spacing before the keywords if, else, for, while, do, switch, throw, try, catch, finally, with, break, continue, return, function, yield, class and variable declarations (let, const, var) and label statements.
This rule takes one parameter: which can be defined as ("always","never"), always enforces spaces before keywords. default is always.
Fixable: This rule is automatically fixable using the --fix flag on the command line.

```
//Good with "always":
if (foo) {
    // ...
} else {}
do {
}
while (foo)
try {} finally {}

//Bad with "always":
if (foo) {
    // ...
}else {}

do {}while (foo)

try {}finally {}


```

[Source](http://eslint.org/docs/rules/space-before-keywords)
