function showResult(){
    let a = document.getElementById('txt1').value;
    let res = document.getElementById('txt2');

    let d = a.toLowerCase();
    console.log('Value of d:', d);
    // if (d == 'a' || d == 'e' || d == 'i' || d == 'o' || d == 'u') {
    //     res.value = 'It is a vowel';
    // } else {
    //     res.value = 'It is a consonant';
    // }
    switch(d){
        case 'a':
            // res.value='It is a vowel';
            // break;
        case 'e':
            // res.value='It is a vowel';
            // break;
        case 'i':
            // res.value='It is a vowel';
            // break;
        case 'e':
            // res.value='It is a vowel';
            // break;
        case 'u':
            res.value='It is a vowel';
            break;
        default:
            res.value='Please enter a vowel';
    }
}
