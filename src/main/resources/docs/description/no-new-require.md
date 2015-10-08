The require function is used to include modules that exist in separate files, such as:
Some modules return a constructor which can potentially lead to code such as:
Unfortunately, this introduces a high potential for confusion since the code author likely meant to write:

```
var appHeader = require('app-header');

```

[Source](http://eslint.org/docs/rules/no-new-require)
