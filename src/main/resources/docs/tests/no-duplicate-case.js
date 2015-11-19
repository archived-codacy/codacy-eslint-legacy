//#Patterns: no-duplicate-case


var a = 1; 
switch (a) { 
	case 1: break; 
	case 2: break;
//#Err: no-duplicate-case 
	case 1: break;
	default: break; 
}
