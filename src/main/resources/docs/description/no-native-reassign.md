Reports an error when they encounter an attempt to assign a value to built-in native object. The native objects reported by this rule are the builtin variables from globals.

```
//Bad:
String = new Object();

//Good:
String ab = new Object();
```

[Source](http://eslint.org/docs/rules/no-native-reassign)
