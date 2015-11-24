//#Patterns: no-labels

//#Warn: no-labels
outer: while (true) { 
		while (true) {
			//#Warn: no-labels
			break outer;
		}
 }
