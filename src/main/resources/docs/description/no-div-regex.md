Require regex literals to escape division operators.
This is used to disambiguate the division operator to not confuse users.

```
//Bad - A regular expression literal can be confused with '/='
function bar() { return /=foo/; }

//Good
function bar() { return /\=foo/; }
```

[Source](http://eslint.org/docs/rules/no-div-regex)
