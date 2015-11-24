It's possible to create multiline strings in JavaScript by using a slash before a newline.
Some consider this to be a bad practice as it was an undocumented feature of JavaScript that was only formalized later.
This rule is aimed at preventing the use of multiline strings.

```
//Bad:
var x = "Line 1 \
         Line 2";

//Good:
var x = "Line 1\n" +
        "Line 2";
```

[Source](http://eslint.org/docs/rules/no-multi-str)
