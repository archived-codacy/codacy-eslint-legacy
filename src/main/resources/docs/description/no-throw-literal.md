It is considered good practice to only throw the Error object itself or an object using the Error object as base objects for user-defined exceptions. The fundamental benefit of Error objects is that they automatically keep track of where they were built and originated.
This rule restricts what can be thrown as an exception. When it was first created, it only prevented literals from being thrown (hence the name), but it has now been expanded to only allow expressions which have a possibility of being an Error object.
This rule is aimed at maintaining consistency when throwing exception by disallowing to throw literals and other expressions which cannot possibly be an Error object.


```
//Bad:
throw "error"; 
throw 0;
throw undefined;
throw null;

```

[Source](http://eslint.org/docs/rules/no-throw-literal)
