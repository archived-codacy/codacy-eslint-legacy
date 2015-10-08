Regular expressions can be very complex and difficult to understand, which is why it's important to keep them as simple as possible in order to avoid mistakes. One of the more error-prone things you can do with a regular expression is to use more than one space, such as:
In this regular expression, it's very hard to tell how many spaces are intended to be matched. It's better to use only one space and then specify how many spaces are expected, such as:
Now it is very clear that three spaces are expected to be matched.

```
var re = /foo bar/;

```

[Source](http://eslint.org/docs/rules/no-regex-spaces)
