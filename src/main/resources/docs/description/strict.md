A Use Strict Directive at the beginning of a script or function body enables strict mode semantics:
When used globally, as in the preceding example, the entire script, including all contained functions, are strict mode code. It is also possible to specify function-level strict mode, such that strict mode applies only to the function in which the directive occurs:
This rule is aimed at controlling how Use Strict Directives are used in code. It has three modes, each enabled by a single string argument:

```
"use strict";

```

[Source](http://eslint.org/docs/rules/strict)
