Require and specify a prefix for all directive names

All your directives should have a name starting with the parameter you can define in your config object. The second parameter can be a Regexp wrapped in quotes. You can not prefix your directives by "ng" (reserved keyword for AngularJS directives) ("directive-name": [2, "ng"])

```
//Bad:
angular.module('myModule').directive('navigation', function () {
    // ...
}); // error: The navigation directive should follow this pattern: /^ui/

//Good:
angular.module('myModule').directive('prefixTabs', function () {
    // ...
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/directive-name.md)
