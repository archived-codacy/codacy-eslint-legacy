Control characters are special, invisible characters in the ASCII range 0-31. These characters are rarely used in JavaScript strings so a regular expression containing these characters is most likely a mistake.
This rule is aimed at ensuring all regular expressions don't use control characters.
The following patterns are considered problems:

```
/*eslint no-control-regex: 2*/ 
var pattern1 = /\\x1f/;
var pattern2 = new RegExp("\x1f");
/*error Unexpected control character in regular expression.*/
```

[Source](http://eslint.org/docs/rules/no-control-regex)
