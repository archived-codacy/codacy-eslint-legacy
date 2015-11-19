In the Node.JS community it is often customary to separate the required modules from other variable declarations, sometimes also grouping them by their type. This rule helps you enforce this convention. This rule comes with option called grouping which is turned off by default.

```
//Bad:
var fs = require('fs'),
    async = require('async'),
    foo = require('./foo'), 
    bar = require(getName()), 
    baz = 42, 
    bam; 

//Good:
var eventEmitter = require('events').EventEmitter,
    myUtils = require('./utils'),
    util = require('util'),
    bar = require(getBarModuleName());

var baz = 42;


```

[Source](http://eslint.org/docs/rules/no-mixed-requires)
