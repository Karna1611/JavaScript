console.log(false||true); //true so we get true back
console.log(false||'Mosh'); //string so we get a string back
console.log(false||1); //number so we get a number back

//falsy 
//undefined, null, 0, false, '', NaN

//Anything that is not falsy is truthy

console.log(false||1||2); 
//evaluation stops as soon as we find truthy value so 1 

//short-circuiting 

let userColor=undefined;
let defaultColor='blue';
let currentColor=userColor || defaultColor;
console.log(currentColor);