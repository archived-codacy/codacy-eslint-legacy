Using javascript: URLs is considered by some as a form of eval. Code passed in javascript: URLs has to be parsed and evaluated by the browser in the same way that eval is processed.

```
//Bad:
location.href = "javascript:void(0)"; 
```

[Source](http://eslint.org/docs/rules/no-script-url)
