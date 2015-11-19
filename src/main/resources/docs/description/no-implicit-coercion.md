In JavaScript, there are a lot of different ways to convert value types. Some of them might be hard to read and understand.

```
//Bad:
var b = !!foo;
var b = ~foo.indexOf(".");
var n = +foo;
var n = 1 * foo;
var s = "" + foo;

//Good:
var b = Boolean(foo);
var b = foo.indexOf(".") !== -1;
var n = Number(foo);
var n = Number(foo);
var s = String(foo);
```

[Source](http://eslint.org/docs/rules/no-implicit-coercion)
