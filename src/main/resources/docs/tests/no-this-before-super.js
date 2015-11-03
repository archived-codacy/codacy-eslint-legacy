//#Patterns: no-this-before-super
//#Warn: no-this-before-super

/*eslint no-this-before-super: 2*/ /*eslint-env es6*/ class A extends B { constructor() { this.a = 0; /*error "this" is not allowed before super()*/ super(); } } class A extends B { constructor() { this.foo(); /*error "this" is not allowed before super()*/ super(); } } class A extends B { constructor() { super.foo(); /*error "super" is not allowed before super()*/ super(); } } class A extends B { constructor() { super(this.foo()); /*error "this" is not allowed before super()*/ } }