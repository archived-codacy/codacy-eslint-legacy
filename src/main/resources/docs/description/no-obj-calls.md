ECMAScript provides several global objects that are intended to be used as-is. Some of these objects look as if they could be constructors due their capitalization (such as Math and JSON). This rule is aimed at preventing the accidental calling of global objects as functions.

```

//Bad:
var x = Math(); 
var y = JSON();

//Good:
var x = math(); 
var y = json();
```

[Source](http://eslint.org/docs/rules/no-obj-calls)
