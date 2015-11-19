Labeled statements in JavaScript are used in conjunction with break and continue to control flow around multiple loops. While convenient in some cases, labels tend to be used only rarely and are frowned upon by some as a remedial form of flow control that is more error prone and harder to understand. This rule aims to eliminate the use of labeled statements in JavaScript. It will warn whenever a labeled statement is encountered and whenever break or continue are used with a label.

```

//Bad:
label:
    while(true) {
        break label;
    }

```


[Source](http://eslint.org/docs/rules/no-labels)
