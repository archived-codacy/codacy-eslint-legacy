Use $interval instead of setInterval

Instead of the default setInterval function, you should use the AngularJS wrapper service $interval

```
//Bad:
setInterval(function() {
    // ...
}, 1000) // error: You should use the $interval service instead of the default window.setInterval method

//Good:
$interval(function() {
    // ...
}, 1000)

```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/interval-service.md)
