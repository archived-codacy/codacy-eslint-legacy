//#Patterns: no-var
//#Warn: no-var

var count = people.length; var enoughFood = count > sandwiches.length; if (enoughFood) { var count = sandwiches.length; // accidently overriding the count variable console.log("We have " + count + " sandwiches for everyone. Plenty for all!"); } // our count variable is no longer accurate console.log("We have " + count + " people and " + sandwiches.length + " sandwiches!");