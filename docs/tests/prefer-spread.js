//#Patterns: prefer-spread

//#Warn: prefer-spread
foo.apply(undefined, args); 
//#Warn: prefer-spread
foo.apply(null, args);
//#Warn: prefer-spread
obj.foo.apply(obj, args);

foo.apply(obj, args);
obj.foo.apply(null, args);
obj.foo.apply(otherObj, args);
