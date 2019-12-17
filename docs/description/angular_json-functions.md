Enforce use ofangular.fromJson and 'angular.toJson'

You should use angular.fromJson or angular.toJson instead of JSON.parse and JSON.stringify

```
//Bad:
JSON.stringify({
    // ...
}); // error: You should use the angular.toJson method instead of JSON.stringify

//Good:
angular.toJson({
    // ...
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/json-functions.md)
