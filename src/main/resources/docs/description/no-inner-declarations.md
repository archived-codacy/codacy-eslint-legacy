In JavaScript, prior to ES6, a function declaration is only allowed in the first level of a program or the body of another function, though parsers sometimes erroneously accept them elsewhere. This only applies to function declarations; named or anonymous function expressions can occur anywhere an expression is permitted.A variable declaration is permitted anywhere a statement can go, even nested deeply inside other blocks. This is often undesirable due to variable hoisting, and moving declarations to the root of the program or function body can increase clarity. Note that block bindings (let, const) are not hoisted and therefore they are not affected by this rule. This rule requires that function declarations and, optionally, variable declarations be in the root of a program or the body of a function. The function declaration portion rule will be rendered obsolete when block-scoped functions land in ES6, but until then, it should be left on to enforce valid constructions. Disable checking variable declarations when using block-scoped-var or if declaring variables in nested blocks is acceptable despite hoisting.

```
// Good
function doSomething() { }

// Bad
if (test) {
    function doSomethingElse () { }
}

function anotherThing() {
    var fn;

    if (test) {

        // Good
        fn = function expression() { };

        // Bad
        function declaration() { }
    }
}
```

[Source](http://eslint.org/docs/rules/no-inner-declarations)
