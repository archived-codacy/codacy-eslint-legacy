//#Patterns: no-caller


function foo(n) {
    if (n <= 0) {
        return;
    }
    //#Info: no-caller
    arguments.callee(n - 1);
}

function foo2(n) {
    if (n <= 0) {
        return;
    }

    foo(n - 1);
}
