When formatting a function, whitespace is allowed between the function name or function keyword and the opening paren. Named functions also require a space between the function keyword and the function name, but anonymous functions require no whitespace. For example:
Style guides may require a space after the function keyword for anonymous functions, while others specify no whitespace. Similarly, the space after a function name may or may not be required.
Fixable: This rule is automatically fixable using the --fix flag on the command line.

```
function withoutSpace(x) {
// ... }
function withSpace (x) {
// ... }
var anonymousWithoutSpace = function() {
}
;
var anonymousWithSpace = function () {
}
;

```

[Source](http://eslint.org/docs/rules/space-before-function-paren)
