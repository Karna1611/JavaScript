const output=fizzBuzz(false);
console.log(output);

function fizzBuzz(input){
    // if(input%3===0)
    //     console.log("Fizz");
    // else if(input%5===0)
    //     console.log("Buzz");
    // else if(input%3===0 && input%5===0)
    //     console.log("FizzBuzz");
    // else
    //     console.log(input);
    if(typeof input !=='number')
        return NaN;
    if((input%3===0) && (input%5===0))
        return 'FizzBuzz';
    if(input%3===0)
        return 'Fizz';
    if(input%5===0)
        return 'Buzz';
    return input;

}