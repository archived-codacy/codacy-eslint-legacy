Reports if a resolved path is imported more than once.

ESLint core has a similar rule (no-duplicate-imports), but this version is different in two key ways:

* the paths in the source code don't have to exactly match, they just have to point to the same module on the 
filesystem. (i.e. ./foo and ./foo.js)

* this version distinguishes Flow type imports from standard imports.

```
//Bad:
import SomeDefaultClass from './mod'

// oops, some other import separated these lines
import foo from './some-other-mod'

import * as names from './mod'

// will catch this too, assuming it is the same target module
import { something } from './mod.js'

//Good:
import SomeDefaultClass, * as names from './mod'
import type SomeType from './mod'
```

[Source](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md)
