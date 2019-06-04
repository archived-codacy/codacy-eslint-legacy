Keep run functions clean and simple

Initialization logic should be moved into a factory or service. This improves testability.

```
//Bad:
angular.module('app').run(function($window) {
    $window.addEventListener('deviceready', deviceready);

    function deviceready() {}
}); // error: The run function may only contain call expressions

//Good:
angular.module('app').run(function(KITTENS, kittenService, startup) {
    kittenService.prefetchData(KITTENS);
    startup('foo', true, 1);
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/no-run-logic.md)
