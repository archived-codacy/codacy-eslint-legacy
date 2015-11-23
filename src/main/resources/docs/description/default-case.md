Some code conventions require that all switch statements have a default case, even if the default case is empty. The thinking is that it's better to always explicitly state what the default behavior should be so that it's clear whether or not the developer forgot to include the default behavior by mistake.
Other code conventions allow you to skip the default case so long as there is a comment indicating the omission is intentional.

```
//Bad:
/*eslint default-case: 2*/

switch (a) {       /*error Expected a default case.*/
    case 1:
        /* code */
        break;
}

//Good:
switch (a) {
    case 1:
        /* code */
        break;

    default:
        /* code */
        break;
}
```


[Source](http://eslint.org/docs/rules/default-case)
