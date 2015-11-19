This error is raised to highlight a potential error. Commonly, when a developer intends to write

```
if(!(a in b)) {
    // do something
}
```

//they will instead write

```
if(!a in b) { 
    // do something
}
```


[Source](http://eslint.org/docs/rules/no-negated-in-lhs)
