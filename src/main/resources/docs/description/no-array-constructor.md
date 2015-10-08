Use of the Array constructor to construct a new array is generally discouraged in favour of array literal notation because of the single-argument pitfall and because the Array global may be redefined. The exception is when the Array constructor is used to intentionally create sparse arrays of a specified size by giving the constructor a single numeric argument.
The following patterns are considered problems:
The following patterns are not considered problems:

```
/*eslint no-array-constructor: 2*/ Array(0, 1, 2) /*error The array literal notation [] is preferrable.*/
```

[Source](http://eslint.org/docs/rules/no-array-constructor)
