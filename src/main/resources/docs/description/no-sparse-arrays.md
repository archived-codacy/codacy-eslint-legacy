Sparse arrays contain empty slots, most frequently due to multiple commas being used in an array literal, such as:
While the items array in this example has a length of 2, there are actually no values in items[0] or items[1]. The fact that the array literal is valid with only commas inside, coupled with the length being set and actual item values not being set, make sparse arrays confusing for many developers. Consider the following:
In this example, the colors array has a length of 3. But did the developer intend for there to be an empty spot in the middle of the array? Or is it a typo?

```
var items = [,,];

```

[Source](http://eslint.org/docs/rules/no-sparse-arrays)
