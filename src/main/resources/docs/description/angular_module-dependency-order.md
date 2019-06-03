Require a consistent order of module dependencies

Module dependencies should be sorted in a logical manner. This rule provides two ways to sort modules, grouped or ungrouped. In grouped mode the modules should be grouped in the order: standard modules - third party modules - custom modules. The modules should be sorted alphabetically within its group. A prefix can be specified to determine which prefix the custom modules have. Without grouped set to false all dependencies combined should be sorted alphabetically. ('module-dependency-order', [2, {grouped: true, prefix: "app"}])

```
//Bad:
angular.module('myModule', ['ngRoute', 'ngAnimate']); // error: ngAnimate should be sorted before ngRoute

//Good:
angular.module('myModule', ['ngAnimate', 'ngRoute', 'app', 'appFilters', 'ui.router']);
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/module-dependency-order.md)
