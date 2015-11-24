In the constructor of derived classes, if this/super are used before super() calls, it raises a reference error.
This rule checks this/super keywords in constructors, then reports those that are before super().
This rule is aimed to flag this/super keywords before super() callings.

```
//Bad:
class A extends B {
	constructor() {
		this.foo();
		super();
	}
}
class A extends B {
	constructor() {
		super.foo();
	}
}

//Good:
class A {
    constructor() {
        this.a = 0;
    }
}

class A extends B {
    constructor() {
        super();
        this.a = 0;
    }


```

[Source](http://eslint.org/docs/rules/no-this-before-super)
