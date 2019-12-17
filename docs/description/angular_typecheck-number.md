Use angular.isNumber instead of typeof comparisons

You should use the angular.isNumber method instead of the default JavaScript implementation (typeof 3 === "[object Number]").

```
//Bad:
typeof someNumber === 'number' // error: You should use the angular.isNumber method

//Good:
angular.isNumber(someNumber);
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/typecheck-number.md)
