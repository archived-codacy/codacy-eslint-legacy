In JavaScript, there are a lot of different ways to convert value types. Some of them might be hard to read and understand.
Such as:
Those can be replaced with the following code:

```
var b = !!foo;
var b = ~foo.indexOf(".");
var n = +foo;
var n = 1 * foo;
var s = "" + foo;

```

[Source](http://eslint.org/docs/rules/no-implicit-coercion)
