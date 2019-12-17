Require and specify a consistent function style for components

Anonymous or named functions inside AngularJS components. The first parameter sets which type of function is required and can be 'named' or 'anonymous'. The second parameter is an optional list of angular object names.

```
//Bad:
angular.module('myModule').factory('myService', myServiceFn);
function myServiceFn() {
    // ...
} // error: Use anonymous functions instead of named function

//Good:
angular.module('myModule').factory('myService', function () {
    // ...
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/function-type.md)
