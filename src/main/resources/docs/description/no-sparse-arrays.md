Sparse arrays contain empty slots, most frequently due to multiple commas being used in an array literal.The confusion around sparse arrays defined in this manner is enough that it's recommended to avoid using them unless you are certain that they are useful in your code. This rule aims to eliminate sparse arrays that are defined by extra commas.

```
//Bad:
var items = [,,];
var items = [,];
var colors = [ "red",, "blue" ];
```


[Source](http://eslint.org/docs/rules/no-sparse-arrays)
