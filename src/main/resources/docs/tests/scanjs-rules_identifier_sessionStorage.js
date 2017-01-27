//#Patterns: scanjs-rules_identifier_sessionStorage

var foo = 'sessionStorage';

//#Warn: scanjs-rules_identifier_sessionStorage
sessionStorage.setItem('name', 'user1');
