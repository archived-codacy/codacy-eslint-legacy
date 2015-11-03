//#Patterns: block-spacing
/*eslint block-spacing: [2, "never"]*/

//#Warn: block-spacing
function foo() { return true; } /*error Unexpected space(s) after /

*eslint block-spacing: [2, "Always"]*/

//#Warn: block-spacing
if (foo) { bar = 0;}            /*error expected space(s) after ";".*/


