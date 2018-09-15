//#Patterns: no-invalid-regexp

//#Err: no-invalid-regexp
RegExp('[');
//#Err: no-invalid-regexp
RegExp('.', 'z');
new RegExp('\\');


RegExp('.');
new RegExp;
