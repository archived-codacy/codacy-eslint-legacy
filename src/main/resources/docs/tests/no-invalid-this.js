//#Patterns: no-invalid-this

//#Err: no-invalid-this
(function() {
    this.a = 0;      
    baz(() => this);  
})();

function foo() {
    //#Err: no-invalid-this
    this.a = 0;
    baz(() => this);
}

class Foo {
    constructor() {
        this.a = 0;
        baz(() => this);
    }
}
