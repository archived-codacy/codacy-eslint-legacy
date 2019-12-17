Use angular.forEach instead of native Array.prototype.forEach

You should use the angular.forEach method instead of the default JavaScript implementation [].forEach.

```
//Bad:
someArray.forEach(function (element) {
    // ...
}); // error: You should use the angular.forEach method

//Good:
angular.forEach(someArray, function (element) {
    // ...
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/foreach.md)
