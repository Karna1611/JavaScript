function checkPoint(){
    let x1=document.getElementById('x1');
    let y1=document.getElementById('y1');
    let r=document.getElementById('radius');
    let x2=document.getElementById('x2');
    let y2=document.getElementById('y2');
    let txt=document.getElementById('txt1');

    if(x1!==null && y1!==null && x2!==null && y2!==null && r!==null && txt!==null){
        let centreX1=+(x1.value);
        let centreY1=+(y1.value);
        let radius=+(r.value);
        let pointX1=(x2.value);
        let pointY1=(y2.value);

        if(!isNaN(centreX1) && !isNaN(centreY1) && !isNaN(pointX1) && !isNaN(pointY1) && !isNaN(radius)){
            let ans=Math.sqrt((pointX1-centreX1)**2 + (pointY1-centreY1)**2);
            console.log(ans);
            if(ans==radius){
                txt.value='Point lies on the circle';
            }
            else if(ans>radius){
                txt.value='Point lies outside the circle';
            }
            else{
                txt.value='Point lies inside the circle';
            }
        }

    }
    else{
        console.log("Error: Input elements not found in the DOM");
    }


}

function resetVal(){
    let x1=document.getElementById('x1');
    let y1=document.getElementById('y1');
    let r=document.getElementById('radius');
    let x2=document.getElementById('x2');
    let y2=document.getElementById('y2');
    let txt=document.getElementById('txt1');

    x1.value='';
    y1.value='';
    r.value='';
    x2.value='';
    y2.value='';
    txt.value='';
}