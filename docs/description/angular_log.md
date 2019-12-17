Use the $log service instead of the console methods

You should use $log service instead of console for the methods 'log', 'debug', 'error', 'info', 'warn'

```
//Bad:
console.log('Hello world!'); // error: You should use the "log" method of the AngularJS Service $log instead of the console object

//Good:
$log.log('Hello world!');
```

[Source](https://github.com/EmmanuelDemey/eslint-plugin-angular/blob/HEAD/docs/rules/log.md)
