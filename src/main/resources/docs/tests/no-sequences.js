//#Patterns: no-sequences


//#Err: no-sequences
foo = doSomething, val;

//#Err: no-sequences
if (doSomething(), !!test); 

//#Err: no-sequences
switch (val = foo(), val) {} 

//#Err: no-sequences
while (val = foo(), val < 42); 

do {} while ((doSomething(), !!test));
