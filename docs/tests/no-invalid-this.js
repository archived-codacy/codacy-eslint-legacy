//#Patterns: no-invalid-this

"use strict";

(function() {
    //#Info: no-invalid-this
    this.a = 0;
    //#Info: no-invalid-this
    baz(() => this);  
})();

function foo() {
    //#Info: no-invalid-this
    this.a = 0;
    //#Info: no-invalid-this
    baz(() => this);
}

class Foo {
    constructor() {
        this.a = 0;
        baz(() => this);
    }
}
