//#Patterns: no-control-regex
//#Warn: no-control-regex

/*eslint no-control-regex: 2*/ var pattern1 = /\\x1f/; var pattern2 = new RegExp("\x1f"); /*error Unexpected control character in regular expression.*/