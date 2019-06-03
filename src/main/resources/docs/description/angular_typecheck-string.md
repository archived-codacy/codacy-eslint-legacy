Use angular.isString instead of typeof comparisons

You should use the angular.isString method instead of the default JavaScript implementation (typeof "" === "[object String]").

```
//Bad:
typeof someString === 'string' // error: You should use the angular.isString method

//Good:
angular.isString(someString);
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/typecheck-string.md)
