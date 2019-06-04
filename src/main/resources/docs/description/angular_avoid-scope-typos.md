Avoid mistakes when naming methods defined on the scope object

```
//Bad:
$scope.apply.forEach(function (watcher) {
    // ...
}); // error: The apply method should be replaced by $apply, or you should rename it in order to avoid confusions

//Bad:
$rootScope.apply.forEach(function (watcher) {
    // ...
}); // error: The apply method should be replaced by $apply, or you should rename it in order to avoid confusions

//Good:
$scope.$apply();

//Good:
$rootScope.$apply();
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/avoid-scope-typos.md)
