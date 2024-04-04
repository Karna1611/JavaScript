function calculateDistance(){
    let x1=document.getElementById('x1');
    let y1=document.getElementById('y1');
    let x2=document.getElementById('x2');
    let y2=document.getElementById('y2');
    let txt=document.getElementById('txt1');

    if(x1!==null && y1!==null && x2!==null && y2!==null && txt!==null){
        let firstX1=+(x1.value);
        let firstY1=+(y1.value);
        let secondX2=+(x2.value);
        let secondY2=+(y2.value);

        if(!isNaN(firstX1) && !isNaN(firstY1) && !isNaN(secondX2) && !isNaN(secondY2)){
            let d=Math.sqrt((secondX2-firstX1)**2 + (secondY2-firstY1)**2);
            txt.value=d;
        }
    }
    else{
        console.log("Error: Input elements not found in the DOM");
    }
}

function resetVal(){
    let x1=document.getElementById('x1');
    let y1=document.getElementById('y1');
    let x2=document.getElementById('x2');
    let y2=document.getElementById('y2');
    let txt=document.getElementById('txt1');

    x1.value='';
    y1.value='';
    x2.value='';
    y2.value='';
    txt.value='';
}