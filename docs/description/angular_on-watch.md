Require $on and $watch deregistration callbacks to be saved in a variable

Watch and On methods on the scope object should be assigned to a variable, in order to be deleted in a $destroy event handler

```
//Bad:
$rootScope.$on('event', function () {
    // ...
}); // error: The "$on" call should be assigned to a variable, in order to be destroyed during the $destroy event

//Good:
$scope.$on('event', function () {
    // ...
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/on-watch.md)
