Nesting ternary expressions makes code unclear. The no-nested-ternary rule disallows the use of nested ternary expressions. The no-nested-ternary rule aims to increase the clarity and readability of code by disallowing the use of nested ternary expressions.


```
//Bad:
var foo = bar ? baz : qux === quxx ? bing : bam;

//Good
if (foo) {
  thing = bar;
} else if (baz === qux) {
  thing = quxx;
} else {
  thing = foobar;
}

```

[Source](http://eslint.org/docs/rules/no-nested-ternary)
