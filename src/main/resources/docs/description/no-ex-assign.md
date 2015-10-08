When an error is caught using a catch block, it's possible to accidentally (or purposely) overwrite the reference to the error. Such as:
This makes it impossible to track the error from that point on.
This rule's purpose is to enforce convention. Assigning a value to the exception parameter wipes out all the valuable data contained therein and thus should be avoided. Since there is no arguments object to offer alternative access to this data, assignment of the parameter is absolutely destructive.

```
try {
// code }
catch (e) {
e = 10;
}

```

[Source](http://eslint.org/docs/rules/no-ex-assign)
