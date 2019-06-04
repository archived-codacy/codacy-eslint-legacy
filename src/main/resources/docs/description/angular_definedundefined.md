Use angular.isDefined and angular.isUndefined instead of other undefined checks

You should use the angular.isUndefined or angular.isDefined methods instead of using the keyword undefined. We also check the use of !angular.isUndefined and !angular.isDefined (should prefer the reverse function)

```
//Bad:
value === undefined // error: You should not use directly the "undefined" keyword. Prefer angular.isUndefined or angular.isDefined

//Good:
angular.isUndefined(value)
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/definedundefined.md)
