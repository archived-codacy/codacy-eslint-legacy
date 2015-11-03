//#Patterns: no-unneeded-ternary
//#Warn: no-unneeded-ternary

// Bad var isYes = answer === 1 ? true : false; // Good var isYes = answer === 1; // Bad var isNo = answer === 1 ? false : true; // Good var isYes = answer !== 1;