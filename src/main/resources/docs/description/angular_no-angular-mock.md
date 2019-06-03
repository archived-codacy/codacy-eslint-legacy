Require to use angular.mock methods directly

All methods defined in the angular.mock object are also available in the object window. So you can remove angular.mock from your code

```
//Bad:
angular.mock.dump($scope); // error: You should use the "dump" method available in the window object.

//Good:
inject(function (someService) {
    // ...
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/no-angular-mock.md)
