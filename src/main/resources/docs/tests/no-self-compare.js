//#Patterns: no-self-compare
//#Warn: no-self-compare

/*eslint no-self-compare: 2*/ var x = 10; if (x === x) { /*error Comparing to itself is potentially pointless.*/ x = 20; }