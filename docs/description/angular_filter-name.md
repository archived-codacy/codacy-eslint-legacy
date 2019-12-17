Require and specify a prefix for all filter names

All your filters should have a name starting with the parameter you can define in your config object. The second parameter can be a Regexp wrapped in quotes. ("filter-name": [2, "ng"])

```
//Bad:
angular.module('myModule').filter('otherFilter', function () {
    // ...
}); // error: The otherFilter filter should follow this pattern: /^xyz/

//Good:
angular.module('myModule').filter('prefixFilter', function () {
    // ...
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/filter-name.md)
