The goal of using new with a constructor is typically to create an object of a particular type and store that object in a variable, such as:
It's less common to use new and not store the result, such as:
In this case, the created object is thrown away because its reference isn't stored anywhere, and in many cases, this means that the constructor should be replaced with a function that doesn't require new to be used.

```
var person = new Person();

```

[Source](http://eslint.org/docs/rules/no-new)
