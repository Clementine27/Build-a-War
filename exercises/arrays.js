let array = [1,2, 3, 4, 5]; 

function mapInnerLogic(){
    for (i = 0; i < array.length; i++){
        array[i] += 1; 
    }
    return array; 

} 
    
function addOne(num){
    return num++; 
}
array.map(addOne)

// -------------


function filterInnerLogic(){
    let newArray = new Array(array.length);  
    for (i = 0; i< array.length; i++){
        if (array[i] %2 ==0){
            newArray[i] = true; 
        }
        else{
            newArray[i] = false; 
        }
    }
}

// array.filter()

function isEven(num){
    if (num %2 ==0){
        return true; 
    }
    return false
}

// argument here is a callback (a func)
array.filter(isEven)


// ------


function reduceInnerLogic(){
    results = 0; 
    for (i = 0; i < array.length; i++){
        results += array[i]; 
    }
    return results 
}


sumViaReduce = array.reduce((results, current_value) => results + current_value, 0); 

