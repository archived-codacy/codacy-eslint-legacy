Require and specify a prefix for all value names

All your values should have a name starting with the parameter you can define in your config object. The second parameter can be a Regexp wrapped in quotes. You can not prefix your values by "$" (reserved keyword for AngularJS services) ("value-name": [2, "ng"])

```
//Bad:
angular.module('myModule').value('otherValue', function () {
    // ...
}); // error: The otherValue value should follow this pattern: /^xyz/

//Good:
angular.module('myModule').value('prefixValue', function () {
    // ...
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/value-name.md)
