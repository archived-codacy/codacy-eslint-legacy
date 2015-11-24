This rule validates string arguments passed to the RegExp constructor.

```
//Bad:
RegExp('[');
RegExp('.', 'z');
new RegExp('\\');

//Good:
RegExp('.');
new RegExp;
this.RegExp('[');

```

[Source](http://eslint.org/docs/rules/no-invalid-regexp)
