You should prefer the factory() method instead of service()

```
//Bad:
angular.module('myModule').service('myService', function() {
    // ...
}); // error: You should prefer the factory() method instead of service()

//Good:
angular.module('myModule').factory('myService', function () {
    // ...
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/no-service-method.md)
