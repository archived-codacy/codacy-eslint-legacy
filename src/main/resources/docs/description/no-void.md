The void operator takes an operand and returns undefined: void expression will evaluate expression and return undefined. It can be used to ignore any side effects expression may produce:
The common case of using void operator is to get a "pure" undefined value as prior to ES5 the undefined variable was mutable:

```
// will always return undefined
(function(){
    return void 0;
})();

// will return 1 in ES3 and undefined in ES5+
(function(){
    undefined = 1;
    return undefined;
})();

// will throw TypeError is ES5+
(function(){
    'use strict';
    undefined = 1;
})();
```

[Source](http://eslint.org/docs/rules/no-void)
