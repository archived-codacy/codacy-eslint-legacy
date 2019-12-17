//#Patterns: consistent-this : {"unnamedParam" : "self"}


var self; 
//#Info: consistent-this
var bar = this;

function f() {
    self = this;
}

var self = this;
