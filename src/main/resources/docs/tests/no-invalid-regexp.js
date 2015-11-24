//#Patterns: no-invalid-regexp

//#Err: no-invalid-regexp
RegExp('[');
//#Err: no-invalid-regexp
RegExp('.', 'z');
//#Err: no-invalid-regexp
new RegExp('\\');


RegExp('.');
new RegExp;
