function showResult(){
    let a=document.getElementById('side1');
    let b=document.getElementById('side2');
    let c=document.getElementById('side3');
    let d=document.getElementById('txt1');
    let e=document.getElementById('txt2');
    if(a!==null && b!=null && c!=null && d!=null && e!=null){
        let first=+(a.value);
        let second=+(b.value);
        let third=+(c.value);
    
        if(!isNaN(first) && !isNaN(second) && !isNaN(third)){
            let largestSide=Math.max(first,second,third);
            //d.value=largestSide;
            if(largestSide==first && largestSide<(second+third)){
                d.value="Valid triangle";
            }
            else if(largestSide==second && largestSide<(first+third)){
                d.value="Valid triangle";
            }
            else if(largestSide==third && largestSide<(first+second)){
                d.value="Valid triangle";
            }
            else{
                d.value="Invalid triangle";
            }
            if(first==second && first==third){
                e.value="Equilateral triangle";
            }
            else if(first==second && first!=third){
                e.value='Isoseceles triangle';
            }
            else if(largestSide==first && largestSide**2==(second**2+third**2)){
                e.value="Right angled scalene triangle";
            }
            else if(largestSide==second && largestSide**2==(first**2+third**2)){
                e.value="Right angled scalene triangle";
            }
            else if(largestSide==third && largestSide**2==(first**2+second**2)){
                e.value="Right angled scalene triangle";
            }
            else if(first!=second && second!=third && first!=third){
                e.value='Scalene triangle';
            }
        }
    }
        else {
        console.log("Error: Input elements not found in the DOM");
    }
}