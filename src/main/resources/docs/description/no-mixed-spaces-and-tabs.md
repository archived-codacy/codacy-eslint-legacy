Most code conventions require either tabs or spaces be used for indentation. As such, it's usually an error if a single line of code is indented with both tabs and spaces.
The no-mixed-spaces-and-tabs rule is aimed at flagging any lines of code that are indented with a mixture of tabs and spaces.
This option suppresses warnings about mixed tabs and spaces when the latter are used for alignment only. This technique is called SmartTabs. The option is turned off by default.

```
//Bad:
function add(x, y) {
// --->..return x + y;

      return x + y;    /*error Mixed spaces and tabs.*/
}

```

[Source](http://eslint.org/docs/rules/no-mixed-spaces-and-tabs)
