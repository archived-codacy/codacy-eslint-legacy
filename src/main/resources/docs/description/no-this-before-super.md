In the constructor of derived classes, if this/super are used before super() calls, it raises a reference error.
This rule checks this/super keywords in constructors, then reports those that are before super().
This rule is aimed to flag this/super keywords before super() callings.

```
/*eslint no-this-before-super: 2*/ /*eslint-env es6*/ class A extends B {
constructor() {
this.a = 0;
/*error "this" is not allowed before super()*/ super();
}
}
class A extends B {
constructor() {
this.foo();
/*error "this" is not allowed before super()*/ super();
}
}
class A extends B {
constructor() {
super.foo();
/*error "super" is not allowed before super()*/ super();
}
}
class A extends B {
constructor() {
super(this.foo());
/*error "this" is not allowed before super()*/ }
}

```

[Source](http://eslint.org/docs/rules/no-this-before-super)
