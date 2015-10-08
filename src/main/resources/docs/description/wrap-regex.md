When a regular expression is used in certain situations, it can end up looking like a division operator. For example:
This is used to disambiguate the slash operator and facilitates more readable code.
The following patterns are considered problems:

```
function a() {
return /foo/.test("bar");
}

```

[Source](http://eslint.org/docs/rules/wrap-regex)
