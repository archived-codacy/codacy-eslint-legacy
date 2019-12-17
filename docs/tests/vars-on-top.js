//#Patterns: vars-on-top

function doSomething() {
    var first;
    if (true) {
        first = true;
    }
    //#Info: vars-on-top
    var second;               
}

function doSomething2() {
    var first;
    var second;
    if (true) {
        first = true;
    }
}
