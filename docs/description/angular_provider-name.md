Require and specify a prefix for all provider names

All your providers should have a name starting with the parameter you can define in your config object. The second parameter can be a Regexp wrapped in quotes. You can not prefix your providers by "$" (reserved keyword for AngularJS services) ("provider-name": [2, "ng"]) *

```
//Bad:
angular.module('myModule').provider('otherProvider', function () {
    // ...
}); // error: The otherProvider provider should follow this pattern: /^xyz/

//Good:
angular.module('myModule').provider('prefixProvider', function () {
    // ...
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/provider-name.md)
