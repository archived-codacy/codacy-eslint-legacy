//#Patterns: prefer-reflect


//#Info: prefer-reflect
foo.apply(undefined, args);
//#Info: prefer-reflect
foo.apply(null, args);
//#Info: prefer-reflect
obj.foo.apply(obj, args);
//#Info: prefer-reflect
obj.foo.apply(other, args);

Reflect.apply(undefined, args);
Reflect.apply(null, args);
Reflect.apply(obj.foo, obj, args);
Reflect.apply(obj.foo, other, args);


