A number of style guides require or disallow spaces between array brackets. This rule applies to both array literals and destructuring assignment (EcmaScript 6) using arrays.
Fixable: This rule is automatically fixable using the --fix flag on the command line.
This rule aims to maintain consistency around the spacing inside of array brackets, either by disallowing spaces inside of brackets between the brackets and other tokens or enforcing spaces. Brackets that are separated from the adjacent value by a new line are excepted from this rule, as this is a common pattern. Object literals that are used as the first or last element in an array are also ignored.

```
/*eslint-env es6*/ var arr = [ 'foo', 'bar' ];
var [ x, y ] = z;
var arr = ['foo', 'bar'];
var [x,y] = z;

```

[Source](http://eslint.org/docs/rules/array-bracket-spacing)
