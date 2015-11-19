//#Patterns: no-fallthrough


switch(foo) { 
	//#Warn: no-fallthrough
	case 1: doSomething(); 
	case 2: doSomethingElse(); 
}
