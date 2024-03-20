//logical and
//returns true if both operands are true
console.log(true && true);
console.log(true && false);

let highIncome=true;
let goodCreditScore=true;

let eligibleForLoan=highIncome && goodCreditScore;
console.log(eligibleForLoan);

//logical or
//returns true if one operarnd is true
let highIncome1=false;
let goodCreditScore1=false;

let eligibleForLoan1=highIncome1 || goodCreditScore1;
console.log('Eligible',eligibleForLoan1);

//logical not
let applicationRefused=!eligibleForLoan1;
console.log('Application refused',applicationRefused);

