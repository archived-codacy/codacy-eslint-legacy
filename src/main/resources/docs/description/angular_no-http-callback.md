Disallow the $http methods success() and error()

Disallow the $http success and error function. Instead the standard promise API should be used.

```
//Bad:
$http.get('api/data').success(function onSuccess() {
    // ...
}); // error: $http success is deprecated. Use then instead

//Good:
$http.get('api/data').then(function onSuccess() {
    // ...
}, function onReject() {
   // ...
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/no-http-callback.md)
