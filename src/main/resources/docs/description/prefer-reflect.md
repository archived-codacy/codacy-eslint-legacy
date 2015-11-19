The ES6 Reflect API comes with a handful of methods which somewhat deprecate methods on old constructors:
The prefer-reflect rule will flag usage of any older method, suggesting to instead use the newer Reflect version.
The exceptions option allows you to pass an array of methods names you'd like to continue to use in the old style.

```
//Bad:
foo.apply(undefined, args);
foo.apply(null, args);
obj.foo.apply(obj, args);
obj.foo.apply(other, args);

//Good:
Reflect.apply(undefined, args);
Reflect.apply(null, args);
Reflect.apply(obj.foo, obj, args);
Reflect.apply(obj.foo, other, args);
```

[Source](http://eslint.org/docs/rules/prefer-reflect)
