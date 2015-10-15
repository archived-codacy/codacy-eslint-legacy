//#Patterns: no-implicit-coercion

//#Info: no-implicit-coercion
var b = !!foo;             /*error use `Boolean(foo)` instead.*/

//#Info: no-implicit-coercion
var b = ~foo.indexOf("."); /*error use `foo.indexOf(".") !== -1` instead.*/
// only with `indexOf`/`lastIndexOf` method calling.

var b = Boolean(foo)