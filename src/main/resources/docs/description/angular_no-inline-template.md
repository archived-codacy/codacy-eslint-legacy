Disallow the use of inline templates

Instead of using inline HTML templates, it is better to load the HTML from an external file. Simple HTML templates are accepted by default. ('no-inline-template': [0, {allowSimple: true}])

```
//Bad:
angular.module('myModule').directive('helloWorld', function () {
    return {
        template: '<div>Hello World! <button>Say hello!</button></div>'
    };
}); // error: Inline template is too complex. Use an external template instead

//Good:
angular.module('myModule').directive('helloWorld', function () {
    return {
        templateUrl: 'template/helloWorld.html'
    };
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/no-inline-template.md)
