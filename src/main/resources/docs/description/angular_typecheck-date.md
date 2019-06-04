Use angular.isDate instead of typeof comparisons

You should use the angular.isDate method instead of the default JavaScript implementation (typeof new Date() === "[object Date]").

```
//Bad:
Object.prototype.toString.call(someDate) === '[object Date]'; // error: You should use the angular.isDate method

//Good:
angular.isDate(someDate);
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/typecheck-date.md)
