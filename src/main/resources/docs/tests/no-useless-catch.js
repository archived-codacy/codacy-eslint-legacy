//#Patterns: no-useless-catch

//#Info: no-useless-catch
try {} catch (err) { throw err; }
//#Info: no-useless-catch
try {} catch (err) { throw err; } finally {}
