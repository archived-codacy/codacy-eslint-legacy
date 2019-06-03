Since AngularJS 1.5, we can use a new API when creating directives. This new API should be use when creating directive without DOM manipulation.

```
//Bad:
angular.module('myModule').directive('helloWorld', function() {
    return {

    }
}); // error: Directive should be implemented with the component method.

//Good:
angular.module('myModule').component('helloWorld', {
    template: '<h2>Hello World!</h2>'
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/prefer-component.md)
