When formatting a function, whitespace is allowed between the function name or function keyword and the opening paren. Named functions also require a space between the function keyword and the function name, but anonymous functions require no whitespace.
This rule takes one argument("always"or "never"). the default is "always".
Fixable: This rule is automatically fixable using the --fix flag on the command line.

```
//Bad with parameter always:
function withoutSpace(x) {
// ... }

//Good with parameter always:
function withSpace (x) {
// ... }


```

[Source](http://eslint.org/docs/rules/space-before-function-paren)
