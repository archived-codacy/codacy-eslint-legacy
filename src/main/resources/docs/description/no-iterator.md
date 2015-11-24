The __iterator__ property was a SpiderMonkey extension to JavaScript that could be used to create custom iterators that are compatible with JavaScript's for in and for each constructs. However, this property is now obsolete, so it should not be used. Here's an example of how this used to work: You should use ECMAScript 6 iterators and generators instead. This rule is aimed at preventing errors that may arise from using the __iterator__ property, which is not implemented in several browsers. As such, it will warn whenever it encounters the __iterator__ property.

```
//Bad:
Foo.prototype.__iterator__ = function() {
	return new FooIterator(this);
}

foo.__iterator__ = function () {}; 

//Good:
var __iterator__ = foo; // Not using the `__iterator__` property.

```

[Source](http://eslint.org/docs/rules/no-iterator)
