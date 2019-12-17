Use $timeout instead of setTimeout

Instead of the default setTimeout function, you should use the AngularJS wrapper service $timeout *

```
//Bad:
setTimeout(function() {
    // ...
}, 1000) // error: You should use the $timeout service instead of the default window.setTimeout method

//Good:
$timeout(function() {
    // ...
}, 1000)

```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/timeout-service.md)
