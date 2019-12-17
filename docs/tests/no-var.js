//#Patterns: no-var

//#Warn: no-var
var countFoo = people.length;
//#Warn: no-var 
var enoughFood = count > sandwiches.length; 
if (enoughFood) { 
	//#Warn: no-var
	var countBar = sandwiches.length;
	console.log("We have " + count + " sandwiches for everyone. Plenty for all!"); 
} 
console.log("We have " + count + " people and " + sandwiches.length + " sandwiches!");

//#Warn: no-var
var foo = "y";
//#Warn: no-var
var fooCONFIG = {};

let bar = "y";
const barCONFIG = {};
