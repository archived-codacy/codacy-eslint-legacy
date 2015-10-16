//#Patterns: no-unused-expressions : {"allowShortCircuit":true, "allowTernary":true}

//#Info: no-unused-expressions
3 + 4;

var x = 3 + 4;

a && b();

a() || (b = c);

a ? b() : c();

a ? (b = c) : d();
