This rule normalize style of spacing before/after an arrow function's arrow(=>).
Fixable: This rule is automatically fixable using the --fix flag on the command line.
This rule takes an object argument with before and after properties, each with a Boolean value.

```
/*eslint-env es6*/ // 
{
"before": true, "after": true }
(a) => {
}
// {
"before": false, "after": false }
(a)=>{
}

```

[Source](http://eslint.org/docs/rules/arrow-spacing)
