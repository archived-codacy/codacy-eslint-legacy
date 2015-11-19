//#Patterns: no-var

//#Info: no-var
var count = people.length;
//#Info: no-var 
var enoughFood = count > sandwiches.length; 
if (enoughFood) { 
	//#Info: no-var
	var count = sandwiches.length; 
	console.log("We have " + count + " sandwiches for everyone. Plenty for all!"); 
} 
console.log("We have " + count + " people and " + sandwiches.length + " sandwiches!");

//#Info: no-var
var x = "y";
//#Info: no-var
var CONFIG = {};

let x = "y";
const CONFIG = {};
