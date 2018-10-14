This rule aims to disallow async Promise executor functions.

```
//Bad:
const result = new Promise(async (resolve, reject) => {
  readFile('foo.txt', function(err, result) {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});
const result = new Promise(async (resolve, reject) => {
  resolve(await foo);
});

//Good:
const result = new Promise((resolve, reject) => {
  readFile('foo.txt', function(err, result) {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});
const result = Promise.resolve(foo);
```

[Source](http://eslint.org/docs/rules/no-async-promise-executor)
