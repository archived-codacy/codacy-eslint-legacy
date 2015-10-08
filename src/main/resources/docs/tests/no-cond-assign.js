//#Patterns: no-cond-assign

// Check the user's job title
//#Warn: no-cond-assign 
if (user.jobTitle = "manager") { 
// user.jobTitle is now incorrect 
}

if (user.jobTitle == "manager") { 
// user.jobTitle is now incorrect 
}