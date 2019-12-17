//#Patterns: no-dupe-class-members


class Foo { 
	bar() { 
		console.log("hello"); 
	} 
	//#Warn: no-dupe-class-members
	bar() {
		console.log("goodbye"); 
	} 
}
var foo = new Foo(); 
foo.bar(); 

class Foo2 {
  bar() { }
  qux() { }
}

class Foo3 {
  get bar() { }
  set bar(value) { }
}
