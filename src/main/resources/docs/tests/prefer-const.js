//#Patterns: prefer-const
//#Warn: prefer-const

/*eslint prefer-const: 2*/ /*eslint-env es6*/ let a = 3; /*error `a` is never modified, use `const` instead.*/ console.log(a); // `i` is re-defined (not modified) on each loop step. for (let i in [1,2,3]) { /*error `i` is never modified, use `const` instead.*/ console.log(i); } // `a` is re-defined (not modified) on each loop step. for (let a of [1,2,3]) { /*error `a` is never modified, use `const` instead.*/ console.log(a); }