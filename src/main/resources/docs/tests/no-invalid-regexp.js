//#Patterns: no-invalid-regexp

//#Err: no-invalid-regexp
RegExp('[')
//#Err: no-invalid-regexp
RegExp('.', 'z')

RegExp('.')

new RegExp

this.RegExp('[')
