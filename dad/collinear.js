function checkLinear(){
    let a=document.getElementById('x1');
    let b=document.getElementById('y1');
    let c=document.getElementById('x2');
    let d=document.getElementById('y2');
    let e=document.getElementById('x3');
    let f=document.getElementById('y3');
    let t1=document.getElementById('txt1');

    if(a!==null && b!=null && c!=null && d!=null && e!=null && f!==null){
        let first=+(a.value);
        let second=+(b.value);
        let third=+(c.value);
        let fourth=+(d.value);
        let fifth=+(e.value);
        let sixth=+(f.value);

        if(!isNaN(first) && !isNaN(second) && !isNaN(third) && !isNaN(fourth) && !isNaN(fifth) && !isNaN(sixth)){
            if((fourth-second)/(third-first) == (sixth-fourth)/(fifth-third) || 
                (sixth-fourth)/(fifth-third) == (sixth-second)/(fifth-first) || 
                (fourth-second)/(third-first) ==(sixth-second)/(fifth-first)){
                    t1.value='Collinear points';
                }
            else{
                t1.value='Non collinear points';
            }
        }
    }
    else{
        console.log("Error: Input elements not found in the DOM");
    }
}

function resetVal(){
    let a=document.getElementById('x1');
    let b=document.getElementById('y1');
    let c=document.getElementById('x2');
    let d=document.getElementById('y2');
    let e=document.getElementById('x3');
    let f=document.getElementById('y3');
    let t1=document.getElementById('txt1');

    a.value='';
    b.value='';
    c.value='';
    d.value='';
    e.value='';
    f.value='';
    t1.value='';
}