//#Patterns: prefer-const

// it's initialized and never reassigned.
//#Info: prefer-const
let a = 3;
console.log(a);

let b;
//#Info: prefer-const
b = 0;
console.log(b);

// `i` is redefined (not reassigned) on each loop step.
//#Info: prefer-const
for (let c in [1, 2, 3]) {
  console.log(c);
}

// `d` is redefined (not reassigned) on each loop step.
//#Info: prefer-const
for (let d of [1, 2, 3]) {
  console.log(d);
}

// using const.
const e = 0;

// it's never initialized.
let f;
console.log(f);

// it's reassigned after initialized.
let g;
g = 0;
g = 1;
console.log(g);

// it's initialized in a different block from the declaration.
let h;
if (true) {
  h = 0;
}
console.log(h);

// it's initialized at a place that we cannot write a variable declaration.
let i;
if (true) i = 0;
console.log(i);

// `j` gets a new binding each iteration
for (const j in [1, 2, 3]) {
  console.log(j);
}

// `k` gets a new binding each iteration
for (const k of [1, 2, 3]) {
  console.log(k);
}

// `end` is never reassigned, but we cannot separate the declarations without modifying the scope.
for (let l = 0, end = 10; l < end; ++l) {
  console.log(l);
}

// suggest to use `no-var` rule.
var m = 3;
console.log(m);
