Require and specify a prefix for all factory names

All your factorys should have a name starting with the parameter you can define in your config object. The second parameter can be a Regexp wrapped in quotes. You can not prefix your factorys by "$" (reserved keyword for AngularJS services) ("factory-name": [2, "ng"])

```
//Bad:
angular.module('myModule').factory('otherFactory', function () {
    // ...
}); // error: The otherFactory factory should follow this pattern: /^xyz/

//Good:
angular.module('myModule').factory('prefixFactory', function () {
    // ...
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/factory-name.md)
