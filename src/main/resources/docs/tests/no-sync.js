//#Patterns: no-sync
//#Warn: no-sync

/*eslint no-sync: 2*/ fs.existsSync(somePath); /*error Unexpected sync method: 'existsSync'.*/ var contents = fs.readFileSync(somePath).toString(); /*error Unexpected sync method: 'readFileSync'.*/