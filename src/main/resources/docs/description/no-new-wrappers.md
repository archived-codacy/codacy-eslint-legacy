The primitive wrapper(string, number boolean) types are used whenever one of these primitive values is read, providing them with object-like capabilities such as methods. Behind the scenes, an object of the associated wrapper type is created and then destroyed, which is why you can call methods on primitive values. The problem is that primitive wrapper objects are, in fact, objects, that means typeof will return "object" instead of "string", "number", or "boolean" another problem rises with boolean because every object is truthy, that means an instance of Boolean always resolves to true even when its actual value is false.. For these reasons, it's considered a best practice to avoid using primitive wrapper types with new.


```
//Bad:
var stringObject = new String; 
var numberObject = new Number;
var booleanObject = new Boolean;

//Good:
var text = String(someValue);
var num = Number(someValue);
var object = new MyString();

```

[Source](http://eslint.org/docs/rules/no-new-wrappers)
