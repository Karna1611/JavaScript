function displayResult() {
    let txtAreaVal = document.getElementById('textar1');
    txtAreaVal.value = ''; 

    for (let i = 1; i <= 10; i++) {
        txtAreaVal.value += i + '\n'; 
    }
}

function resetTextArea(){
    let txtAreaVal=document.getElementById('textar1');
    txtAreaVal='';
}