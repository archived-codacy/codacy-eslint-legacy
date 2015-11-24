//#Patterns: prefer-spread

//#Info: prefer-spread
foo.apply(undefined, args); 
//#Info: prefer-spread
foo.apply(null, args);
//#Info: prefer-spread
obj.foo.apply(obj, args);

foo.apply(obj, args);
obj.foo.apply(null, args);
obj.foo.apply(otherObj, args);
