Disallow unused DI parameters

Unused dependencies should not be injected.

```
//Bad:
angular.module('myModule').factory('myService', function ($http, $q, $log) {
    $http.get('/api/someData').then(function (response) {
        $log.log(response.data);
    });
}); // error: Unused injected value $q

//Good:
angular.module('myModule').factory('myService', function ($log, anotherService) {
    $log.log(anotherService.getSomeData());
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/di-unused.md)
