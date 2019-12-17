Require and specify a capture variable for this in controllers

You should use a capture variable for 'this' when using the controllerAs syntax. The second parameter specifies the capture variable you want to use in your application. The third parameter can be a Regexp for identifying controller functions (when using something like Browserify)

The name that should be used for the view model.

```
//Bad:
// invalid
angular.module('test').controller('TestController', function() {
    this.test = 'test';
}); // error: You should not use "this" directly. Instead, assign it to a variable called "vm"

//Good:
angular.module('test').controller('TestController', function() {
    var vm = this;
    vm.test = 'test';
});
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/controller-as-vm.md)
