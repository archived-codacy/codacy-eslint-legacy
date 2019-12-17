Require and specify a prefix for all controller names

All your controllers should have a name starting with the parameter you can define in your config object. The second parameter can be a Regexp wrapped in quotes. ("controller-name": [2, "ng"])

```
//Bad:
angular.module('myModule').controller('MyCtrl', function () {
    // ...
}); // error: The MyCtrl controller should follow this pattern: /^[A-Z][a-zA-Z0-9]*Controller$/

//Good:
angular.module('myModule').controller('MyController', function () {
   // ...
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/controller-name.md)
