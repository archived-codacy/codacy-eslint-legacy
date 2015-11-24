//#Patterns: no-continue


var sum = 0, 
i; 
for(i = 0; i < 10; i++) { 
if(i >= 5) { 
//#Info: no-continue
continue; 
} 
a += i; 
}


var sum = 0,
    i;

for(i = 0; i < 10; i++) {
    if(i < 5) {
       a += i;
    }
}
