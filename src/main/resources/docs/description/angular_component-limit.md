Limit the number of angular components per file

The number of AngularJS components in one file should be limited. The default limit is one.

The acceptable number of components. (Default: 1)

```
//Bad:
angular.module('myModule').controller('ControllerOne', function() {
    // ...
}).directive('directiveTwo', function() {
    // ...
}); // error: There may be at most 1 AngularJS component per file, but found 2

//Good:
angular.module('myModule').controller('SomeController', function() {
    // ...
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/component-limit.md)
