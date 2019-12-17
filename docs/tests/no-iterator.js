//#Patterns: no-iterator

//#Info: no-iterator
Foo.prototype.__iterator__ = function() { 
	return new FooIterator(this); 
}

var __iterator__ = foo;
