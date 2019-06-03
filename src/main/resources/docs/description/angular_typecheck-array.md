Use angular.isArray instead of typeof comparisons

You should use the angular.isArray method instead of the default JavaScript implementation (typeof [] === "[object Array]").

```
//Bad:
Object.prototype.toString.call(someArray) === '[object Array]'; // error: You should use the angular.isArray method

//Good:
Array.isArray(someArray) // error: You should use the angular.isArray method
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/typecheck-array.md)
