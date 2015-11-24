//#Patterns: consistent-this : {"unnamedParam" : "self"}


var self; 
//#Warn: consistent-this
var bar = this;

function f() {
    self = this;
}

var self = this;
