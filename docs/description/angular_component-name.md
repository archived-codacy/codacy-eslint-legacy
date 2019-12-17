Require and specify a prefix for all component names

All your components should have a name starting with the parameter you can define in your config object. The second parameter can be a Regexp wrapped in quotes. You can not prefix your components by "ng" (reserved keyword for AngularJS components) ("component-name": [2, "ng"])

```
//Bad:
angular.module('myModule').component('navigation', {
    // ...
}); // error: The navigation component should follow this pattern: /^ui/

//Good:
angular.module('myModule').component('prefixTabs', {
    // ...
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/component-name.md)
