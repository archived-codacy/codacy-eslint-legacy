Nesting ternary expressions makes code unclear. The no-nested-ternary rule disallows the use of nested ternary expressions.
The no-nested-ternary rule aims to increase the clarity and readability of code by disallowing the use of nested ternary expressions.
The following patterns are considered problems:

```
var foo = bar ? baz : qux === quxx ? bing : bam;

```

[Source](http://eslint.org/docs/rules/no-nested-ternary)
