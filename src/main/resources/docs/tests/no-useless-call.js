//#Patterns: no-useless-call
//#Warn: no-useless-call

/*eslint no-useless-call: 2*/ // These are same as `foo(1, 2, 3);` foo.call(undefined, 1, 2, 3); /*error unnecessary ".call()".*/ foo.apply(undefined, [1, 2, 3]); /*error unnecessary ".apply()".*/ foo.call(null, 1, 2, 3); /*error unnecessary ".call()".*/ foo.apply(null, [1, 2, 3]); /*error unnecessary ".apply()".*/ // These are same as `obj.foo(1, 2, 3);` obj.foo.call(obj, 1, 2, 3); /*error unnecessary ".call()".*/ obj.foo.apply(obj, [1, 2, 3]); /*error unnecessary ".apply()".*/