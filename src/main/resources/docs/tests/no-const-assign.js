//#Patterns: no-const-assign
//#Warn: no-const-assign

/*eslint no-const-assign: 2*/ /*eslint-env es6*/ const a = 0; a = 1; /*error `a` is constant.*/