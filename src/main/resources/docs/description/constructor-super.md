Constructors of derived classes must call super(). Constructors of non derived classes must not call super(). If this is not observed, the javascript engine will raise a runtime error.
This rule checks whether or not there is a valid super() call.
This rule is aimed to flag invalid/missing super() calls.

```
class A {
constructor() {
	super(); /*error unexpected `super()`.*/ 
	}
}
class A extends null {
	constructor() {
		super();	/*error unexpected `super()`.*/ }
	}
}
class A extends B {
	constructor() { }
	/*error this constructor requires `super()`.*/ }
}
```

[Source](http://eslint.org/docs/rules/constructor-super)
