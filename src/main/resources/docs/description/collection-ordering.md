Lodash has two methods for sorting a collection by a specific order: sortBy and orderBy. Both methods accept one or several iteratees, but orderBy also accepts an optional parameter whether the order is ascending or descending. This means that ordering any array by ascending order can be done in several different ways:

```
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
]

_.sortBy(users, 'age')
_.orderBy(users, 'age')
_.orderBy(users, ['age'], ['asc'])
_.orderBy(users, 'age', 'asc')
```

When method is sortBy
```
//Bad:
_.orderBy(arr, [f])
_.orderBy(arr, ["name"])
_.orderBy(arr, [f], ["asc"])

//Good:
_.sortBy(arr, [f])
_.sortBy(arr, ['name'])
_.orderBy(arr, ['name'], ['desc']
```

See source for further examples

[Source](https://github.com/wix/eslint-plugin-lodash/blob/4673524ad4d7397c38feaad8ff72ff141af8810f/docs/rules/collection-ordering.md)
