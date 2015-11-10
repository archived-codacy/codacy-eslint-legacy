//#Patterns: consistent-this

//#Warn: consistent-this
var self;
function f() {
    self = this;
}

var self = this;
