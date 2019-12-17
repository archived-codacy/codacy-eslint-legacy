Disallow to assign modules to variables

Declare modules without a variable using the setter syntax.

```
//Bad:
var app = angular.module('myModule', []); // error: Declare modules without a variable using the setter syntax.

//Good:
angular.module('myModule', [])
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/module-setter.md)
