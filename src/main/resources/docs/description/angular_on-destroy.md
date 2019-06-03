Check for common misspelling $on('destroy', ...).

It should be $on('$destroy', ...).

```
//Bad:
$rootScope.$on('destroy', function () {
    // ...
}); // error: You probably misspelled $on("$destroy").

//Good:
$scope.$on('$destroy', function () {
    // ...
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/on-destroy.md)
