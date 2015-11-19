JavaScripts' alert, confirm, and prompt functions are widely considered to be obtrusive as UI elements and should be replaced by a more appropriate custom UI implementation. Furthermore, alert is often used while debugging code, which should be removed before deployment to production.
This rule is aimed at catching debugging code that should be removed and popup UI elements that should be replaced with less obtrusive, custom UIs. As such, it will warn when it encounters alert, prompt, and confirm function calls which are not shadowed.
The following patterns are considered problems:

```
//Bad:
alert("here!");
confirm("Are you sure?");
prompt("What's your name?", "John Doe");

//Good:
customAlert("Something happened!");
customConfirm("Are you sure?");
customPrompt("Who are you?");

```

[Source](http://eslint.org/docs/rules/no-alert)
