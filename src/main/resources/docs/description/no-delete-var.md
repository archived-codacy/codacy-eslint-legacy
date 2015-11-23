This rule prevents the use of delete operator on variables:
The delete operator will only delete the properties of objects. It cannot "delete" variables or anything else. Using them on variables might lead to unexpected behavior.
```
//Bad:
delete x;
```

[Source](http://eslint.org/docs/rules/no-delete-var)
