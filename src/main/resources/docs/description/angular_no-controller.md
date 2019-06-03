Disallow use of controllers (according to the component first pattern)

According to the Component-First pattern, we should avoid the use of AngularJS controller.

```
//Bad:
angular.module('myModule').controller('HelloWorldController', function ($scope) {
    $scope.text = 'Hello World';
}); // error: Based on the Component-First Pattern, you should avoid the use of controllers

//Good:
angular.module('myModule').directive('helloWorld', function () {
    return {
        template: '<div>{{ text }}',
        controller: function ($scope) {
            $scope.text = 'Hello World';
        }
    };
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/no-controller.md)
