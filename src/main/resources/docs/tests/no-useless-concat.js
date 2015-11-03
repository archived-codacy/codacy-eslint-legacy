//#Patterns: no-useless-concat
//#Warn: no-useless-concat

/*eslint no-useless-concat: 2*/ /*eslint-env es6*/ // these are the same as "10" var a = `some` + `string`; /*error Unexpected string concatenation of literals.*/ var a = '1' + '0'; /*error Unexpected string concatenation of literals.*/ var a = '1' + `0`; /*error Unexpected string concatenation of literals.*/ var a = `1` + '0'; /*error Unexpected string concatenation of literals.*/ var a = `1` + `0`; /*error Unexpected string concatenation of literals.*/