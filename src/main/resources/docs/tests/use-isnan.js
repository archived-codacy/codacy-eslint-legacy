//#Patterns: use-isnan
//#Warn: use-isnan

/*eslint use-isnan: 2*/ if (foo == NaN) { /*error Use the isNaN function to compare with NaN.*/ // ... } if (foo != NaN) { /*error Use the isNaN function to compare with NaN.*/ // ... }