Using javascript: URLs is considered by some as a form of eval. Code passed in javascript: URLs has to be parsed and evaluated by the browser in the same way that eval is processed.
The following patterns are considered problems:
This rule was introduced in ESLint 0.0.9.

```
/*eslint no-script-url: 2*/ location.href = "javascript:void(0)";
/*error Script URL is a form of eval.*/
```

[Source](http://eslint.org/docs/rules/no-script-url)
