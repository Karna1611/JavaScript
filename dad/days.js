function showResult(){
    a=document.getElementById('selectVal');
    b=document.getElementById('txt1');

    if(a!==null && b!==null){
        let val=+(a.value);

        if(!isNaN(val)){
            switch(val){
                case 1:
                    b.value='Monday';
                    break;
                case 2:
                    b.value='Tuesday';
                    break;
                case 3:
                    b.value='Wednesday';
                    break;
                case 4:
                    b.value='Thursday';
                    break;
                case 5:
                    b.value='Friday';
                case 6:
                    b.value='Saturday';
                    break;
                case 7:
                    b.value='Sunday';
                    break;
                default:
                    b.value='Please enter valid number';
            }
        }
    }
    else{
        console.log("Error: Input elements not found in the DOM");
    }
}