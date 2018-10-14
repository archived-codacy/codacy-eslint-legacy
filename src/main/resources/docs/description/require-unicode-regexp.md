This rule aims to enforce the use of `u` flag on regular expressions.

```
//Bad:
const a = /aaa/
const b = /bbb/gi
const c = new RegExp("ccc")
const d = new RegExp("ddd", "gi")

//Good:
const a = /aaa/u
const b = /bbb/giu
const c = new RegExp("ccc", "u")
const d = new RegExp("ddd", "giu")
```

[Source](http://eslint.org/docs/rules/require-unicode-regexp)
