The ES6 Reflect API comes with a handful of methods which somewhat deprecate methods on old constructors:
The prefer-reflect rule will flag usage of any older method, suggesting to instead use the newer Reflect version.
The exceptions option allows you to pass an array of methods names you'd like to continue to use in the old style.

```
http://eslint.org/docs/rules/prefer-reflect
```

[Source](http://eslint.org/docs/rules/prefer-reflect)
