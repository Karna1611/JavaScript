let txtAreaVal2=document.getElementById('textAr2');
function displayResult() {
    let no = document.getElementById('num1');
    let txtAreaVal = document.getElementById('textAr1');
    let noOfFactors = document.getElementById('num2');
    let txtVal=document.getElementById('txt1');
    let list=document.getElementById('factorList');
    

    if (no !== null && noOfFactors !== null && txtAreaVal !== null && txtVal!==null && txtAreaVal2!==null) {
        let number = +(no.value);
        let factors = +(noOfFactors.value);

        if (!isNaN(number) && !isNaN(factors)) {
            txtAreaVal.value = ''; 

            for (let i = 1; i <= number; i++) { 
                debugger;
                if (number % i == 0) {
                    txtAreaVal.value += i + '\n';
                    factors++;
                }
            }
            noOfFactors.value=noOfFactors1(number);
            // debugger;
            let a=isPrime(number);
            if(a==true)
            {
                txtVal.value='Prime number';
            }
            else{
                txtVal.value='Non prime number';
            }
            //txtVal.value=isPrime(number);
            for(let j=1;j<=number;j++){
                if(number%j==0){
                let li=document.createElement('li');
                li.innerText=j;
                list.appendChild(li);
                }
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

function noOfFactors1(value){
    let ans=0;
    for(let i=1;i<=value;i++){
        if(value%i==0){
            ans++;
        }
    }
    return ans;
}

function isPrime(value){
    let x=0;
    x=noOfFactors1(value);
        if(x>2){
            return false;
        }
        else if(x==2){
            return true;
        }
    }
    //return result;
 function printPrime(){
    for(let i=2;i<=20;i++){
        let a=isPrime(i);
        if(a)
            txtAreaVal2.value+=i+"\n";
    }
 }