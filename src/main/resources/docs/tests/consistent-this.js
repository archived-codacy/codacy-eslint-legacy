//#Patterns: consistent-this
//#Warn: consistent-this

var self = this; jQuery('li').click(function (event) { // here, "this" is the HTMLElement where the click event occurred self.setFoo(42); });