In JavaScript, NaN is a special value of the Number type. It's used to represent any of the "not-a-number" values represented by the double-precision 64-bit format as specified by the IEEE Standard for Binary Floating-Point Arithmetic. NaN has the unique property of not being equal to anything, including itself. That is to say, that the condition NaN !== NaN evaluates to true.
This rule is aimed at eliminating potential errors as the result of comparing against the special value NaN.
The following patterns are considered problems:

```
/*eslint use-isnan: 2*/ if (foo == NaN) {
/*error Use the isNaN function to compare with NaN.*/ // ... }
if (foo != NaN) {
/*error Use the isNaN function to compare with NaN.*/ // ... }

```

[Source](http://eslint.org/docs/rules/use-isnan)
