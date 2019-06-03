Disallow to wrap angular.element objects with jQuery or $

You should not wrap angular.element object into jQuery(), because angular.element already return jQLite element

```
//Bad:
$(angular.element("#id")) // error: angular.element returns already a jQLite element. No need to wrap with the jQuery object

//Good:
angular.element("#id")
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/no-jquery-angularelement.md)
