There are three primitive types in JavaScript that have wrapper objects: string, number, and boolean. These are represented by the constructors String, Number, and Boolean, respectively. The primitive wrapper types are used whenever one of these primitive values is read, providing them with object-like capabilities such as methods. Behind the scenes, an object of the associated wrapper type is created and then destroyed, which is why you can call methods on primitive values, such as:
Behind the scenes in this example, a String object is constructed. The substring() method exists on String.prototype and so is accessible to the string instance.
It's also possible to manually create a new wrapper instance:

```
var text = "Hello world".substring(2);

```

[Source](http://eslint.org/docs/rules/no-new-wrappers)
