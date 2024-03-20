console.log('for loop 1')

for (let i = 0; i < 5; i++) {
    let text = 'The number is ' + i
    console.log(text);
}

console.log('for loop 2')

for (let i = 5; i > 0; i--) {
    let text = 'The number is ' + i
    console.log(text);
}


// Example using the continue statement - Loop through a block of code, but skip the value of "3":

console.log('for loop 3')

for (let i = 0; i < 5; i++) {
  if (i == 3) {
    continue;
  }
  let text = "The number is " + i;
  console.log(text)
}