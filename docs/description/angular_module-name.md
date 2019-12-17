Require and specify a prefix for all module names

When you create a new module, its name should start with the parameter you can define in your config object. The second parameter can be a Regexp wrapped in quotes. You can not prefix your modules by "ng" (reserved keyword for AngularJS modules) ("module-name": [2, "ng"])

```
//Bad:
angular.module('otherModule', []); // error: The otherModule module should follow this pattern: /^xyz/

//Good:
angular.module('prefixModule', []);
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/module-name.md)
