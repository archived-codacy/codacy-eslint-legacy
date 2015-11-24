Declaring module's dependencies at the beginning of a module improves readability and provides insight to other developers about what modules are required. Declaring these dependencies inline within other parts of the code may make them harder to spot and could lead to poorly-maintainable code in the long term.
In addition to maintainability issues there are also performance implications. require is a synchronous function and will block the main thread while it loads its modules. This can be a problem even after require() caches the loaded module and thus should be avoided whenever possible.
This rule disallow require() outside of the top-level module scope.

```
//Bad:

function readFile(filename, callback) {
    var fs = require('fs');
    fs.readFile(filename, callback)
}
if (DEBUG) { require('debug'); }

function getModule(name) { return require(name); }

//Good:
require('x');
var y = require('y');
var z;
z = require('z').initialize();

var fs = require('fs');
function readFile(filename, callback) {
    fs.readFile(filename, callback)
}

```

[Source](http://eslint.org/docs/rules/global-require)
