The require function is used to include modules that exist in separate files.This rule aims to eliminate use of the new require expression. As such, it warns whenever new require is found in code.

```
//Bad:
var appHeader = new require('app-header');

//Good:
var appHeader = require('app-header');

```

[Source](http://eslint.org/docs/rules/no-new-require)
