//#Patterns: space-before-blocks

//#Info: space-before-blocks
if (a){
  b();
}

//#Info: space-before-blocks
function a(){}

//#Info: space-before-blocks
for (;;){
  b();
}

//#Info: space-before-blocks
try {} catch(a){}

//#Info: space-before-blocks
class Foo{
  //#Info: space-before-blocks
  constructor(){}
}

if (a) {
  b();
}

if (a) {
  b();
} else{ /*no error. this is checked by `keyword-spacing` rule.*/
  c();
}

function a2() {}

for (;;) {
  b();
}

try {} catch(a2) {}
