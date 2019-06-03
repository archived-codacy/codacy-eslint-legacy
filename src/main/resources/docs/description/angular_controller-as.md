Disallow assignments to $scope in controllers

You should not set properties on $scope in controllers. Use controllerAs syntax and add data to 'this'. The second parameter can be a Regexp for identifying controller functions (when using something like Browserify)

```
//Bad:
angular.module("myModule").controller("SomeController", function($scope) {
    $scope.value = 42;
}); // error: You should not set properties on $scope in controllers. Use controllerAs syntax and add data to "this"

//Good:
angular.module("myModule").controller("SomeController", function($scope) {
    // this for values
    this.value = 42;

    // $scope is fine for watchers
    $scope.$watch(angular.bind(this, function () {
        return this.value
    }), function () {
        // ...
    });
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/controller-as.md)
