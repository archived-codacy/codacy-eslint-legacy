//#Patterns: no-var

//#Info: no-var
var countFoo = people.length;
//#Info: no-var 
var enoughFood = count > sandwiches.length; 
if (enoughFood) { 
	//#Info: no-var
	var countBar = sandwiches.length;
	console.log("We have " + count + " sandwiches for everyone. Plenty for all!"); 
} 
console.log("We have " + count + " people and " + sandwiches.length + " sandwiches!");

//#Info: no-var
var foo = "y";
//#Info: no-var
var fooCONFIG = {};

let bar = "y";
const barCONFIG = {};
