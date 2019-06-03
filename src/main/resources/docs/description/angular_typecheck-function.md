Use angular.isFunction instead of typeof comparisons

You should use the angular.isFunction method instead of the default JavaScript implementation (typeof function(){} ==="[object Function]").

```
//Bad:
typeof someFunction === 'function' // error: You should use the angular.isFunction method

//Good:
angular.isFunction(someFunction);
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/typecheck-function.md)
