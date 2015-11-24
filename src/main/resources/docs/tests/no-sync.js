//#Patterns: no-sync

//#Warn: no-sync
fs.existsSync(somePath); 

//#Warn: no-sync
var contents = fs.readFileSync(somePath).toString();

obj.sync();

async(function() {
    // ...
});
