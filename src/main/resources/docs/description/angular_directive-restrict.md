Disallow any other directive restrict than 'A' or 'E'

```
//Bad:
angular.module('myModule').directive('helloWorld', function () {
    return {
        template: '<h2>Hello World!</h2>'
    };
}); // error: Missing directive restriction

//Good:
angular.module('myModule').directive('helloWorld', function () {
    return {
        template: '<h2>Hello World!</h2>',
        restrict: 'A' // also allowed: A, E, AE, EA
    };
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/directive-restrict.md)
