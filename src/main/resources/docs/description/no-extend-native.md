In JavaScript, you can extend any object, including builtin or "native" objects. Sometimes people change the behavior of these native objects in ways that break the assumptions made about them in other parts of the code. For example here we are overriding a builtin method that will then affect all Objects, even other builtins.A common suggestion to avoid this problem would be to wrap the inside of the for loop with users.hasOwnProperty(id). However, if this rule is strictly enforced throughout your codebase you won't need to take that step.

```
//Bad:
// seems harmless
Object.prototype.extra = 55;

// loop through some userIds
var users = {
    "123": "Stan",
    "456": "David"
};

// not what you'd expect
for (var id in users) {
    console.log(id); // "123", "456", "extra"
}
```

[Source](http://eslint.org/docs/rules/no-extend-native)
