Use this rule to prevent unnecessary path segments in import and require statements.

Given the following folder structure:
```
my-project
├── app.js
├── footer.js
├── header.js
└── helpers.js
└── helpers
    └── index.js
└── pages
    ├── about.js
    ├── contact.js
    └── index.js 
```
```
//Bad:
import "./../pages/about.js";

//Good:
import "./pages/about";
```

[Source](https://github.com/benmosher/eslint-plugin-import/blob/206d67653c0d6cd087a51233f81d911fd347ca8e/docs/rules/no-useless-path-segments.md)
