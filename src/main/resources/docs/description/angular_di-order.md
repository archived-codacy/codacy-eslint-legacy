Require DI parameters to be sorted alphabetically

Injected dependencies should be sorted alphabetically. If the second parameter is set to false, values which start and end with an underscore those underscores are stripped. This means for example that _$httpBackend_ goes before _$http_.

```
//Bad:
angular.module('myModule').factory('myService', function($q, $http) {
    // ...
}); // error: Injected values should be sorted alphabetically

//Good:
angular.module('myModule').factory('myService', function($http, $location, $q, myService, someService) {
    // ...
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/di-order.md)
