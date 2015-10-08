Reports an error when they encounter an attempt to assign a value to built-in native object.
The native objects reported by this rule are the builtin variables from globals.
The following patterns are considered problems:

```
String = "hello world";

```

[Source](http://eslint.org/docs/rules/no-native-reassign)
