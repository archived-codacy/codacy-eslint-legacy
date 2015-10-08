This error is raised to highlight a potential error. Commonly, when a developer intends to write
they will instead write
If one intended the original behaviour, the left operand should be explicitly coerced to a string like below.

```
if(!(a in b)) {
// do something }

```

[Source](http://eslint.org/docs/rules/no-negated-in-lhs)
