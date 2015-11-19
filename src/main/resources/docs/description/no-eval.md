JavaScript's eval() function is potentially dangerous and is often misused. Using eval() on untrusted code can open a program up to several different injection attacks. The use of eval() in most contexts can be substituted for a better, alternative approach to a problem. This rule is aimed at preventing potentially dangerous, unnecessary, and slow code by disallowing the use of the eval() function. As such, it will warn whenever the eval() function is used.

```
//Bad:
var obj = { x: "foo" },
    key = "x",
    value = eval("obj." + key);

//Good:
var obj = { x: "foo" },
    key = "x",
    value = obj[key];

```

[Source](http://eslint.org/docs/rules/no-eval)
