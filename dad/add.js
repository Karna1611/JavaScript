function addFunction(){
    //console.log("Function called"); // Check if function is being called
    let firstNumber = document.getElementById('firstNumber');
    let secondNumber = document.getElementById('secondNumber');
    let resultElement = document.getElementById('result');
    
    // Check if elements are found in the DOM
    if(firstNumber !== null && secondNumber !== null && resultElement !== null){
        //console.log("Elements found"); // Check if elements are found
        let first = +(firstNumber.value);
        let second = +(secondNumber.value);
        
        // Check if parsed values are valid numbers
        if(!isNaN(first) && !isNaN(second)){
            let resultValue = first + second;
            console.log("Result:", resultValue); // Check result value
            resultElement.value = resultValue; // Display result in resultElement
        } else {
            console.log("Invalid input"); // Log error message if inputs are not valid numbers
            resultElement.value = "Invalid input"; // Display error message if inputs are not valid numbers
        }
    } else {
        console.log("Error: Input elements not found in the DOM"); // Log error if elements are not found
    }
}

function subtractFunction(){
    //console.log("Function called"); // Check if function is being called
    let firstNumber = document.getElementById('firstNumber');
    let secondNumber = document.getElementById('secondNumber');
    let resultElement = document.getElementById('result');
    
    // Check if elements are found in the DOM
    if(firstNumber !== null && secondNumber !== null && resultElement !== null){
        //console.log("Elements found"); // Check if elements are found
        let first = +(firstNumber.value);
        let second = +(secondNumber.value);
        
        // Check if parsed values are valid numbers
        if(!isNaN(first) && !isNaN(second)){
            let resultValue = first - second;
            console.log("Result:", resultValue); // Check result value
            resultElement.value = resultValue; // Display result in resultElement
        } else {
            console.log("Invalid input"); // Log error message if inputs are not valid numbers
            resultElement.value = "Invalid input"; // Display error message if inputs are not valid numbers
        }
    } else {
        console.log("Error: Input elements not found in the DOM"); // Log error if elements are not found
    }
}

function multiplyFunction(){
    //console.log("Function called"); // Check if function is being called
    let firstNumber = document.getElementById('firstNumber');
    let secondNumber = document.getElementById('secondNumber');
    let resultElement = document.getElementById('result');
    
    // Check if elements are found in the DOM
    if(firstNumber !== null && secondNumber !== null && resultElement !== null){
        //console.log("Elements found"); // Check if elements are found
        let first = +(firstNumber.value);
        let second = +(secondNumber.value);
        
        // Check if parsed values are valid numbers
        if(!isNaN(first) && !isNaN(second)){
            let resultValue = first * second;
            console.log("Result:", resultValue); // Check result value
            resultElement.value = resultValue; // Display result in resultElement
        } else {
            console.log("Invalid input"); // Log error message if inputs are not valid numbers
            resultElement.value = "Invalid input"; // Display error message if inputs are not valid numbers
        }
    } else {
        console.log("Error: Input elements not found in the DOM"); // Log error if elements are not found
    }
}

function divideFunction(){
    //console.log("Function called"); // Check if function is being called
    let firstNumber = document.getElementById('firstNumber');
    let secondNumber = document.getElementById('secondNumber');
    let resultElement = document.getElementById('result');
    
    // Check if elements are found in the DOM
    if(firstNumber !== null && secondNumber !== null && resultElement !== null){
        //console.log("Elements found"); // Check if elements are found
        let first = +(firstNumber.value);
        let second = +(secondNumber.value);
        
        // Check if parsed values are valid numbers
        if(!isNaN(first) && !isNaN(second)){
            let resultValue = first / second;
            console.log("Result:", resultValue); // Check result value
            resultElement.value = resultValue; // Display result in resultElement
        } else {
            console.log("Invalid input"); // Log error message if inputs are not valid numbers
            resultElement.value = "Invalid input"; // Display error message if inputs are not valid numbers
        }
    } else {
        console.log("Error: Input elements not found in the DOM"); // Log error if elements are not found
    }
}




