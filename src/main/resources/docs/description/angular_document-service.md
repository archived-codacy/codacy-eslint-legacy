Use $document instead of document

Instead of the default document object, you should prefer the AngularJS wrapper service $document.

```
//Bad:
document.title // error: You should use the $document service instead of the default document object

//Good:
$document[0].title = ""
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/document-service.md)
