//#Patterns: no-void

//#Info: no-void
void foo              /*error Expected 'undefined' and instead saw 'void'.*/

//#Info: no-void
var foo = void bar(); /*error Expected 'undefined' and instead saw 'void'.*/

var foo = 3;
