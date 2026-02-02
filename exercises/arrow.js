// arrow funcs 


// method 1 

function add(a,b){
    return a + b; 
}


let sum = add(1,2); 
console.log(sum); 


// method 2 

let sum2 = function(a, b){
    return a + b; 
}

console.log(sum2(1, 2)); 

// method 3 

let sum3 = (a, b) => a + b; 

console.log(sum3(1,2)); 


