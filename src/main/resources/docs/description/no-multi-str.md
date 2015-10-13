It's possible to create multiline strings in JavaScript by using a slash before a newline.
Some consider this to be a bad practice as it was an undocumented feature of JavaScript that was only formalized later.
This rule is aimed at preventing the use of multiline strings.

```
/*error Multiline support is limited to browsers supporting ES5 only.*/

var x = "Line 1 \
         Line 2";
```

[Source](http://eslint.org/docs/rules/no-multi-str)
