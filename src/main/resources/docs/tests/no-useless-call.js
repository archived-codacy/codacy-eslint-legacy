//#Patterns: no-useless-call

//#Info: no-useless-call
foo.call(undefined, 1, 2, 3);

//#Info: no-useless-call
foo.apply(null, [1, 2, 3]);  

foo.call(obj, 1, 2, 3);

foo.apply(undefined, args);
