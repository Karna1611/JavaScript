function displayResult() {
    let no = document.getElementById('num1');
    let txtAreaVal = document.getElementById('textAr1');
    let noOfFactors = document.getElementById('num2');
    let txtVal=document.getElementById('txt1');

    if (no !== null && noOfFactors !== null && txtAreaVal !== null && txtVal!==null) {
        let number = +(no.value);
        let factors = +(noOfFactors.value);

        if (!isNaN(number) && !isNaN(factors)) {
            txtAreaVal.value = ''; 

            for (let i = 1; i <= number; i++) {
                if (number % i == 0) {
                    txtAreaVal.value += i + '\n';
                    factors++;
                }
            }
            noOfFactors.value=factors;
            if(factors==2){
                txtVal.value='Prime number';
            }
            else{
                txtVal.value='Non prime number';
            }

        } 
        else {
            txtAreaVal.value = 'Invalid input'; 
        }
    } else {
        console.log("Error: Input elements not found in the DOM");
    }
}

function resetVal(){
    let no = document.getElementById('num1');
    let txtAreaVal = document.getElementById('textAr1');
    let noOfFactors = document.getElementById('num2');
    let txtVal=document.getElementById('txt1');

    no.value='';
    txtAreaVal.value='';
    noOfFactors.value='';
    txtVal.value='';
}