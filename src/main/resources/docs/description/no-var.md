ECMAScript 6 allows programmers to create variables with block scope instead of function scope using the let and const keywords. Block scope is common in many other programming languages and helps programmers avoid mistakes. This rule is aimed at discouraging the use of var and encouraging the use of const or let instead.

```
//Bad:
var count = people.length;
var enoughFood = count > sandwiches.length;
if (enoughFood) {
var count = sandwiches.length;
// accidently overriding the count variable console.log("We have " + count + " sandwiches for everyone. Plenty for all!");
}
// our count variable is no longer accurate console.log("We have " + count + " people and " + sandwiches.length + " sandwiches!");

```

[Source](http://eslint.org/docs/rules/no-var)
