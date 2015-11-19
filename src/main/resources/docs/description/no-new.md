The goal of using new with a constructor is typically to create an object of a particular type and store that object in a variable. If you don't assign it, or use it, the created object is just thrown away because its reference isn't stored anywhere, and in many cases, this means that the constructor should be replaced with a function that doesn't require new to be used. This rule is aimed at maintaining consistency and convention by disallowing constructor calls using the new keyword that do not assign the resulting object to a variable.

```
//Bad:
new Thing(); 

//Good:
var thing = new Thing();
Thing();
```

[Source](http://eslint.org/docs/rules/no-new)
