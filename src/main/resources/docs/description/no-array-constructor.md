Use of the Array constructor to construct a new array is generally discouraged in favour of array literal notation because of the single-argument pitfall and because the Array global may be redefined. The exception is when the Array constructor is used to intentionally create sparse arrays of a specified size by giving the constructor a single numeric argument.

```
//Bad:
new Array(0, 1, 2);
Array(0, 1, 2);

//Good:
Array(500);
new Array(someOtherArray.length);
```

[Source](http://eslint.org/docs/rules/no-array-constructor)
