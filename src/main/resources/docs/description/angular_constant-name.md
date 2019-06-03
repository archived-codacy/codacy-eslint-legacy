Require and specify a prefix for all constant names

All your constants should have a name starting with the parameter you can define in your config object. The second parameter can be a Regexp wrapped in quotes. You can not prefix your constants by "$" (reserved keyword for AngularJS services) ("constant-name": [2, "ng"]) *

```
//Bad:
angular.module('myModule').constant('otherConstant', function () {
    // ...
}); // error: The otherConstant constant should follow this pattern: /^xyz/

//Good:
angular.module('myModule').constant('prefixConstant', function () {
    // ...
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/constant-name.md)
