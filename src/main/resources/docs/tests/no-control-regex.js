//#Patterns: no-control-regex

var pattern1 = /\\x1f/; 
//#Warn: no-control-regex
var pattern2 = new RegExp("\x1f"); 
