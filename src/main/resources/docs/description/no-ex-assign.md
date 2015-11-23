When an error is caught using a catch block, it's possible to accidentally (or purposely) overwrite the reference to the error.This rule purpose is to enforce convention. Assigning a value to the exception parameter wipes out all the valuable data contained therein and thus should be avoided. Since there is no arguments object to offer alternative access to this data, assignment of the parameter is absolutely destructive.

```
//Bad:
try {
	// code 
} catch (e) {
	e = 10;
}

//Good:
try {
    // code
} catch (e) {
    var foo = 'bar';
}

```

[Source](http://eslint.org/docs/rules/no-ex-assign)
