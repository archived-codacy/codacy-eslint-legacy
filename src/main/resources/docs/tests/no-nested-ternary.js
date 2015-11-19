//#Patterns: no-nested-ternary

//#Info: no-nested-ternary
var foo = bar ? baz : qux === quxx ? bing : bam;

//#Info: no-nested-ternary
var thing = foo ? bar : baz === qux ? quxx : foobar;


if (foo) {
  thing = bar;
} else if (baz === qux) {
  thing = quxx;
} else {
  thing = foobar;
}
