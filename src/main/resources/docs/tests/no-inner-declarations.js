//#Patterns: no-inner-declarations

if (test) {
    //#Warn: no-inner-declarations
    function doSomething() { }       
}

function doSomethingElse() {
    if (test) {
	//#Warn: no-inner-declarations
        function doAnotherThing() { } 
    }
}

function doAnotherThing() {
    if (test) {
        var bar = 81;
    }
}
