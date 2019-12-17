//#Patterns: prefer-reflect


//#Warn: prefer-reflect
foo.apply(undefined, args);
//#Warn: prefer-reflect
foo.apply(null, args);
//#Warn: prefer-reflect
obj.foo.apply(obj, args);
//#Warn: prefer-reflect
obj.foo.apply(other, args);

Reflect.apply(undefined, args);
Reflect.apply(null, args);
Reflect.apply(obj.foo, obj, args);
Reflect.apply(obj.foo, other, args);


