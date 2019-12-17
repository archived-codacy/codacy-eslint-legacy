//#Patterns: no-this-before-super

class A extends B { 
	constructor() { 
		//#Warn: no-this-before-super
		this.a = 0; 
		super(); 
	} 
} 
class C extends D {
	constructor() {
		//#Warn: no-this-before-super
		super.foo();
		super(); 
	} 
} class E extends F {
	constructor() { 
		//#Warn: no-this-before-super
		super(this.foo()); 
	} 
}
