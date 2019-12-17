//#Patterns: no-lonely-if


if (foo) {
    // ...
} else {
    //#Info: no-lonely-if
    if (bar) {
        // ...
    }
}

if (foo) {
    // ...
} else if (bar) {
    // ...
}


