//#Patterns: no-obj-calls
//#Warn: no-obj-calls

/*eslint no-obj-calls: 2*/ var x = Math(); /*error 'Math' is not a function.*/ var y = JSON(); /*error 'JSON' is not a function.*/