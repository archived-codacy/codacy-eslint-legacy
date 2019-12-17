Use angular.isObject instead of typeof comparisons

You should use the angular.isObject method instead of the default JavaScript implementation (typeof {} === "[object Object]").

```
//Bad:
typeof someObject === 'object' // error: You should use the angular.isObject method

//Good:
angular.isObject(someObject);
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/typecheck-object.md)
