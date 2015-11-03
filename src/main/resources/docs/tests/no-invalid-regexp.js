//#Patterns: no-invalid-regexp
//#Warn: no-invalid-regexp

/*eslint no-invalid-regexp: 2*/ RegExp('[') /*error Invalid regular expression: /[/: Unterminated character class*/ RegExp('.', 'z') /*error Invalid flags supplied to RegExp constructor 'z'*/ new RegExp('\\') /*error Invalid regular expression: /\/: \ at end of pattern*/