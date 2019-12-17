Require the use of controllerAs in routes or states

You should use Angular's controllerAs syntax when defining routes or states.

```
//Bad:
$routeProvider.when('/myroute', {
    controller: 'MyController'
}) // error: Route "/myroute" should use controllerAs syntax

//Good:
$routeProvider.when('/myroute', {
    controller: 'MyController',
    controllerAs: 'vm'
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/controller-as-route.md)
