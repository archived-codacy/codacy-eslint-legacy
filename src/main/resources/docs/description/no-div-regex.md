Require regex literals to escape division operators.
This is used to disambiguate the division operator to not confuse users.
The following patterns are considered problems:

```
function bar() {
return /=foo/;
}

```

[Source](http://eslint.org/docs/rules/no-div-regex)
