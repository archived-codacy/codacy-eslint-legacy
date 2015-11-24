When a regular expression is used in certain situations, it can end up looking like a division operator. This is used to disambiguate the slash operator and facilitates more readable code.

```
//Bad:
function a() {
    return /foo/.test("bar");
}

//Good:
function a() {
    return (/foo/).test("bar");
}
```

[Source](http://eslint.org/docs/rules/wrap-regex)
