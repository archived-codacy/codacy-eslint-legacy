Reports an error when they encounter an attempt to assign a value to built-in native object.
The native objects reported by this rule are the builtin variables from globals.
The following patterns are considered problems:

```
String = new Object(); /*error String is a read-only native object.*/
```

[Source](http://eslint.org/docs/rules/no-native-reassign)
