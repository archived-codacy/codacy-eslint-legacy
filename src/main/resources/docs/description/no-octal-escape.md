As of version 5 of the ECMAScript specification, octal escape sequences are a deprecated feature and should not be used. It is recommended that Unicode escapes be used instead.
The rule is aimed at preventing the use of a deprecated JavaScript feature, the use of octal escape sequences. As such it will warn whenever an octal escape sequence is found in a string literal.
The following patterns are considered problems:

```
var foo = "Copyright \251";

```

[Source](http://eslint.org/docs/rules/no-octal-escape)
