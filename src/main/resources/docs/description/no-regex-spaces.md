Regular expressions can be very complex and difficult to understand, which is why it's important to keep them as simple as possible in order to avoid mistakes. One of the more error-prone things you can do with a regular expression is to use more than one space. 

```
//Bad:
var re = /foo    bar/;

//Good:
var re = /foo {3}bar/;

```


[Source](http://eslint.org/docs/rules/no-regex-spaces)
