// let x=10;
// let y=x;

// x=20;

// let a={value:10};
// let b=a;

// a.value=20;
let number=10;
let number1={value:10}; //passed by reference 
function increase(number1){
    number1.value++; //independent of the number variable above 
}

increase(number1); //same object we defined above 
console.log(number1); //primitives are copied by their values 


