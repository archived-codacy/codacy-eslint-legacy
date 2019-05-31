Ensures that there is no resolvable path back to this module via its dependencies.

This includes cycles of depth 1 (imported module imports me) to Infinity, if the maxDepth option is not set.

```
// dep-b.js
import './dep-a.js'

export function b() { /* ... */ }

// dep-a.js
//Bad:
import { b } from './dep-b.js' // reported: Dependency cycle detected.
```
