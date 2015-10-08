This rule validates string arguments passed to the RegExp constructor.
The following patterns are considered problems:
The following patterns are not considered problems:

```
/*eslint no-invalid-regexp: 2*/ RegExp('[') /*error Invalid regular expression: /[/: Unterminated character class*/ RegExp('.', 'z') /*error Invalid flags supplied to RegExp constructor 'z'*/ new RegExp('\\') /*error Invalid regular expression: /\/: \ at end of pattern*/
```

[Source](http://eslint.org/docs/rules/no-invalid-regexp)
