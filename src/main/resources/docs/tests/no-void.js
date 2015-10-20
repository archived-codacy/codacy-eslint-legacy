//#Patterns: no-void

//#Warn: no-void
void foo              /*error Expected 'undefined' and instead saw 'void'.*/

//#Warn: no-void
var foo = void bar(); /*error Expected 'undefined' and instead saw 'void'.*/

var foo = 3;