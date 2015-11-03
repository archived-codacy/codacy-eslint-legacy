//#Patterns: no-process-env
//#Warn: no-process-env

/*eslint no-process-env: 2*/ if(process.env.NODE_ENV === "development") { /*error Unexpected use of process.env.*/ //... }