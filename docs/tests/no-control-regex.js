//#Patterns: no-control-regex

var pattern1 = /\\x1f/; 
//#Err: no-control-regex
var pattern2 = new RegExp("\x1f"); 
