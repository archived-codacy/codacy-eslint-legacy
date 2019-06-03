Require a consistent DI syntax

All your DI should use the same syntax : the Array, function, or $inject syntaxes ("di": [2, "array, function, or $inject"])

```
//Bad:
angular.module('myModule').factory('myService', ['$http', '$log', 'anotherService', function ($http, $log, anotherService) {
    // ...
}]); // error: You should use the function syntax for DI

//Good:
angular.module('myModule').factory('myService', function ($http, $log, anotherService) {
   // ...
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/di.md)
