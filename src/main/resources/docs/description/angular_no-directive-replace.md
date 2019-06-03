Disallow the deprecated directive replace property

This rule disallows the replace attribute in a directive definition object. The replace property of a directive definition object is deprecated since angular 1.3.

The option ignoreReplaceFalse let you ignore directive definitions with replace set to false.

```
//Bad:
angular.module('myModule').directive('helloWorld', function() {
    return {
        template: '<h2>Hello World!</h2>',
        replace: true
    };
}); // error: Directive definition property replace is deprecated.

//Good:
angular.module('myModule').directive('helloWorld', function() {
    return {
        template: '<h2>Hello World!</h2>'
    };
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/no-directive-replace.md)
