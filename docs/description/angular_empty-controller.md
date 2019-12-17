Disallow empty controllers

If you have one empty controller, maybe you have linked it in your Router configuration or in one of your views. You can remove this declaration because this controller is useless

```
//Bad:
angular.module('myModule').controller('EmptyController', function () {
}); // error: The EmptyController controller is useless because empty. You can remove it from your Router configuration or in one of your view

//Good:
angular.module('myModule').controller('MyController', function ($log) {
    $log.log('Hello World!');
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/empty-controller.md)
