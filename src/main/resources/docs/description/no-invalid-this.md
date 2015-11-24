Under the strict mode, this keywords outside of classes or class-like objects might be undefined and raise a TypeError.This rule aims to flag usage of this keywords outside of classes or class-like objects. Basically this rule checks whether or not a function which are containing this keywords is a constructor or a method. 
This rule judges from following conditions whether or not the function is a constructor:
* The name of the function starts with uppercase.
* The function is a constructor of ES2015 Classes.
This rule judges from following conditions whether or not the function is a method:
* The function is on an object literal.
* The function assigns to a property.
* The function is a method/getter/setter of ES2015 Classes. (excepts static methods)

And this rule allows this keywords in functions below:
* The call/apply/bind method of the function is called directly.
* The function is a callback of array methods (such as .forEach()) if thisArg is given.
* The function has @this tag in its JSDoc comment.

Otherwise are considered problems.

```

//Bad:
this.a = 0;
baz(() => this); 

(function() {
    this.a = 0;
    baz(() => this);
})();

//Good:
function Foo() {
    this.a = 0;
    baz(() => this);
}

class Foo {
    constructor() {
        this.a = 0;
        baz(() => this);
    }
}
```

[Source](http://eslint.org/docs/rules/no-invalid-this)
