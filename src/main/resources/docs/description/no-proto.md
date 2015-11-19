Although __proto__ property has been deprecated as of ECMAScript 3.1 and shouldn't be used in the code,
keep in mind that if you need to support legacy browsers, you might want to turn this rule off, since support for getPrototypeOf is not yet universal. When an object is created __proto__ is set to the original prototype property of the object’s constructor function. getPrototypeOf is the preferred method of getting "the prototype".
```
//Bad:
var a = obj.__proto__; 
var a = obj["__proto__"]; 

//Good:
var a = Object.getPrototypeOf(obj);
```

[Source](http://eslint.org/docs/rules/no-proto)
