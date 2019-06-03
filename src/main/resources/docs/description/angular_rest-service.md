Disallow different rest service and specify one of '$http', '$resource', 'Restangular'

Check the service used to send request to your REST API. This rule can have one parameter, with one of the following values: $http, $resource or Restangular ('rest-service': [0, '$http']).

```
//Bad:
angular.module('myModule').service('myService', function($resource) {
    // ...
}); // error: You should use the same service ($http) for REST API calls

//Good:
angular.module('myModule').service('myService', function($http) {
    // ...
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/rest-service.md)
