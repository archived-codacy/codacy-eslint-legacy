The Object constructor is used to create new generic objects in JavaScript. However, this is no different from using the more concise object literal syntax. For this reason, many prefer to always use the object literal syntax and never use the Object constructor.

```
//Bad:
var myObject = new Object();

//Good:
var myObject = {};

```

[Source](http://eslint.org/docs/rules/no-new-object)
