//#Patterns: no-unexpected-multiline
//#Warn: no-unexpected-multiline

/*eslint no-unexpected-multiline: 2*/ var foo = bar (1 || 2).baz(); /*error Unexpected newline between function and ( of function call.*/ var hello = 'world' [1, 2, 3].forEach(addNumber); /*error Unexpected newline between object and [ of property access.*/