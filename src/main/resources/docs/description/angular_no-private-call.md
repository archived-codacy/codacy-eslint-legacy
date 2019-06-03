Disallow use of internal angular properties prefixed with $$

All scope's properties/methods starting with $$ are used internally by AngularJS. You should not use them directly. 
Exception can be allowed with this option: {allow:['$$watchers']}

```
//Bad:
$scope.$$watchers.forEach(function (watcher) {
    // ...
}); // error: Using $$-prefixed Angular objects/methods are not recommended

//Good:
$scope.$apply();
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/no-private-call.md)
