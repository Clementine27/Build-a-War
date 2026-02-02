let answer = ""; 
// console.log("hello world"); 


function fizzBuzz(){
    while (typeof answer != "number"){
        answer = parseInt(prompt("give me a number mate: ")); 
    }

    if (answer % 3 == 0){
        console.log("Fizz"); 
    }
    if (answer % 5 == 0){
        console.log("Buzz"); 
    }

    else {
        for (let no = 1; no <= answer; no++){
            console.log(no); 
        }
    }
    // switch (answer %3)


}


fizzBuzz()