//#Patterns: no-mixed-requires


//#Warn: no-mixed-requires
var fs = require('fs'),        
    async = require('async'),  
    foo = require('./foo'),    
    bar = require(getName()),  
    baz = 42,                 
    bam;                       


var eventEmitter = require('events').EventEmitter,
    myUtils = require('./utils'),
    util = require('util'),
    bar = require(getBarModuleName());
