Require and specify a prefix for all service names

All your services should have a name starting with the parameter you can define in your config object. The second parameter can be a Regexp wrapped in quotes. You can not prefix your services by "$" (reserved keyword for AngularJS services) ("service-name": [2, "ng"])

If the oldBehavior is true (default value), this rule will check the name of all services defined with the different methods provided by the framework : provider, service, factory, ... If this parameter is false, only services defined with the service method will be checked.

```
//Bad:
angular.module('myModule').service('otherService', function () {
    // ...
}); // error: The otherService service should follow this pattern: /^xyz/

//Good:
angular.module('myModule').service('prefixService', function () {
    // ...
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/service-name.md)
