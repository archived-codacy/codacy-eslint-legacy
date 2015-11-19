In Node.js, the __dirname and __filename global variables contain the directory path and the file path of the currently executing script file, respectively. Sometimes, developers try to use these variables to create paths to other files. However, there are a few problems with this. First, you can't be sure what type of system the script is running on. Node.js can be run on any computer, including Windows, which uses a different path separator. It's very easy, therefore, to create an invalid path using string concatenation and assuming Unix-style separators. There's also the possibility of having double separators, or otherwise ending up with an invalid path. In order to avoid any confusion as to how to create the correct path, Node.js provides the path module. This module uses system-specific information to always return the correct value.

```
//Bad:
var fullPath = __dirname + "/foo.js";
var fullPath = __filename + "/foo.js";

//Good:

var fullPath = dirname + "/foo.js";
```

[Source](http://eslint.org/docs/rules/no-path-concat)
