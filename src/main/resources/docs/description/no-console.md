(If you're using Node.js, you should disable this rule, because console is used to output information to the user and so is not strictly used for debugging purposes.)
In JavaScript that is designed to be executed in the browser, it's considered a best practice to avoid using methods on console. Such messages are considered to be for debugging purposes and therefore not suitable to ship to the client. In general, calls using console should be stripped before being pushed to production.
This rule is aimed at eliminating unwanted console references from your JavaScript. As such, it warns whenever it sees console used as an identifier in code.

```
//Bad:
console.log("Made it here.");
console.error("That shouldn't have happened.");

//Good:
Console.log("Hello world!");

```

[Source](http://eslint.org/docs/rules/no-console)
