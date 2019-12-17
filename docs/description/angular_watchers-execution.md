Require and specify consistent use $scope.digest() or $scope.apply()

For the execution of the watchers, the $digest method will start from the scope in which we call the method. This will cause an performance improvement comparing to the $apply method, who start from the $rootScope

```
//Bad:
$scope.$digest(); // error: Instead of using the $digest() method, you should prefer $apply()

//Good:
$scope.$apply(function() {
    // ...
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/watchers-execution.md)
