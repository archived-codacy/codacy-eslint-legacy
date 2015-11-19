//#Patterns: no-process-exit


if (somethingBadHappened) { 
	console.error("Something bad happened!"); 
	//#Warn: no-process-exit
	process.exit(1); 
}
