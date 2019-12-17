Enforce to reference modules with the getter syntax.

When using a module, avoid using a variable and instead use chaining with the getter syntax

Rule based on Angular 1.x

```
//Bad:
app.controller('MyController', function () {
    // ...
}); // error: Avoid using a variable and instead use chaining with the getter syntax.

//Good:
angular.module('myModule').controller('MyController', function () {
    // ...
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/module-getter.md#module-getter---enforce-to-reference-modules-with-the-getter-syntax)
