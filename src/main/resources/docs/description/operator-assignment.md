JavaScript provides shorthand operators that combine variable assignment and some simple mathematical operations. For example, x = x + 4 can be shortened to x += 4. The supported shorthand forms are as follows:
This rule enforces use of the shorthand assignment operators by requiring them where possible or prohibiting them entirely. It has two modes: always and never.


```
//Bad with always:
x = x + y;
x = y * x;
x[0] = x[0] / y;

//Good with always:
x = y;
x += y;
x = y * z;
x = (x * y) * z;
```

[Source](http://eslint.org/docs/rules/operator-assignment)
