Disallowing usage of specific node modules can be useful if you want to control the available methods, a developer can use, to implement a feature. This rule allows you to specify modules that you don't want to use in your application.

```
//with no-restricted-modules: [2, "fs"]

//this is considered bad:
var fs = require('fs');

```

[Source](http://eslint.org/docs/rules/no-restricted-modules)
