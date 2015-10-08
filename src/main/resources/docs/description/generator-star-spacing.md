Generators are a new type of function in ECMAScript 6 that can return multiple values over time. These special functions are indicated by placing an * after the function keyword.
Here is an example of a generator function:
This is also valid:

```
/*eslint-env es6*/ function* generator() {
yield "44";
yield "55";
}

```

[Source](http://eslint.org/docs/rules/generator-star-spacing)
