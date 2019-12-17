Use $q(function(resolve, reject){}) instead of $q.deferred

When you want to create a new promise, you should not use the $q.deferred anymore. Prefer the new syntax : $q(function(resolve, reject){})

```
//Bad:
// invalid
var deferred = $q.defer(); // error: You should not create a new promise with this syntax. Use the $q(function(resolve, reject) {}) syntax.

//Good:
$q(function() {
    // ...
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/deferred.md)
