//Performing a task
function greet(name,lastName)
{
    //body of the function
    console.log('Hello ' + name + ' ' + lastName);
}
//Calculating a value
function square(number)
{
    return number*number;
}

greet('Karna','Trivedi');
//let number=square(2);
console.log(square(2));

function bottle(){
    console.log(arguments[1]); //arguments acts as an array inside the bottle function as a local variable
    console.log(arguments.length);
}
bottle("Karna",23);

function sum(){
    let sum=0;

    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum;
}

let total=sum(10,20,40,50,60);
console.log(total);