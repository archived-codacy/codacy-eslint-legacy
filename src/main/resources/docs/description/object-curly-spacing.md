While formatting preferences are very personal, a number of style guides require or disallow spaces between curly braces,
This rule aims to maintain consistency around the spacing inside of object literals. It also applies to EcmaScript 6 destructured assignment and import/export specifiers. This rule takes one argument that can be(always or never) always enforces a space after curly.
Fixable: This rule is automatically fixable using the --fix flag on the command line.


```
//Bad with always:
var obj = {'foo': 'bar'};
var obj = { 'foo':'bar'};
 
//Good with always:
var obj = { 'foo': 'bar' };

```
[Source](http://eslint.org/docs/rules/object-curly-spacing)
