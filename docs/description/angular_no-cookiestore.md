Use $cookies instead of $cookieStore

In Angular 1.4, the $cookieStore service is now deprected. Please use the $cookies service instead

```
//Bad:
$cookieStore.put('favoriteMeal', 'pizza'); // error: Since Angular 1.4, the $cookieStore service is deprecated. Please use now the $cookies service.

//Good:
$cookies.put('favoriteMeal', 'pizza');
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/no-cookiestore.md)
