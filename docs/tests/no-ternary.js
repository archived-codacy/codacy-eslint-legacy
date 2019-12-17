//#Patterns: no-ternary

//#Info: no-ternary
var foo = isBar ? baz : qux;


if (isBar) {
    foo = baz;
} else {
    foo = qux;
}
