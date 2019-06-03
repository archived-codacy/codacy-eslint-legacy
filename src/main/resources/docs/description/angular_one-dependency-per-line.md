Require all DI parameters to be located in their own line

Injected dependencies should be written one per line.

```
//Bad:
function MyController($http, $q) {} // error: Do not use multiple dependencies in one line

//Good:
function MyController($http,
                      $q) {
}
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/one-dependency-per-line.md)
