ECMAScript provides several global objects that are intended to be used as-is. Some of these objects look as if they could be constructors due their capitalization (such as Math and JSON) but will throw an error if you try to execute them as functions.
The ECMAScript 5 specification makes it clear that both Math and JSON cannot be invoked:
This rule is aimed at preventing the accidental calling of global objects as functions.

```
/*eslint no-obj-calls: 2*/ var x = Math();
/*error 'Math' is not a function.*/ var y = JSON();
/*error 'JSON' is not a function.*/
```

[Source](http://eslint.org/docs/rules/no-obj-calls)
