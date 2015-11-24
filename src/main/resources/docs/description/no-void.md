The void operator takes an operand and returns undefined: void expression will evaluate expression and return undefined. It can be used to ignore any side effects expression may produce:
The common case of using void operator is to get a "pure" undefined value as prior to ES5 the undefined variable was mutable:

```

//Bad:
(function(){
    return void 0;
})();

(function(){
    undefined = 1;
    return undefined;
})();

(function(){
    'use strict';
    undefined = 1;
})();

```

[Source](http://eslint.org/docs/rules/no-void)
