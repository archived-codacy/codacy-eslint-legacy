//#Patterns: no-invalid-this

"use strict";

(function() {
    //#Err: no-invalid-this
    this.a = 0;
    //#Err: no-invalid-this
    baz(() => this);  
})();

function foo() {
    //#Err: no-invalid-this
    this.a = 0;
    //#Err: no-invalid-this
    baz(() => this);
}

class Foo {
    constructor() {
        this.a = 0;
        baz(() => this);
    }
}
