//#Patterns: no-throw-literal
//#Warn: no-throw-literal

/*eslint no-throw-literal: 2*/ /*eslint-env es6*/ throw "error"; /*error Expected an object to be thrown.*/ throw 0; /*error Expected an object to be thrown.*/ throw undefined; /*error Do not throw undefined.*/ throw null; /*error Expected an object to be thrown.*/ var err = new Error(); throw "an " + err; /*error Expected an object to be thrown.*/ // err is recast to a string literal var err = new Error(); throw `${err}` /*error Expected an object to be thrown.*/