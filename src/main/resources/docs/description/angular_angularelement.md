Use angular.element instead of $ or jQuery

The angular.element method should be used instead of the $ or jQuery object (if you are using jQuery of course). If the jQuery library is imported, angular.element will be a wrapper around the jQuery object.

```
//Bad:
$('.some-class'); // error: You should use angular.element instead of the jQuery $ object

//Good:
jQuery('.another-class'); // error: You should use angular.element instead of the jQuery $ object
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/angularelement.md)
