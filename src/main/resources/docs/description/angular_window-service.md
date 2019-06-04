Use $window instead of window

Instead of the default window object, you should prefer the AngularJS wrapper service $window.

```
//Bad:
window.alert('Hello world!'); // error: You should use the $window service instead of the default window object

//Good:
$window.alert('Hello world!');
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/window-service.md)
