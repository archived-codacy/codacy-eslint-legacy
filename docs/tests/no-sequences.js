//#Patterns: no-sequences


//#Info: no-sequences
foo = doSomething, val;

//#Info: no-sequences
if (doSomething(), !!test); 

//#Info: no-sequences
switch (val = foo(), val) {} 

//#Info: no-sequences
while (val = foo(), val < 42); 

do {} while ((doSomething(), !!test));
