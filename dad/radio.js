function checkSize(){
    if(document.getElementById('xs').checked){
       document.getElementById('disp').innerHTML=document.getElementById('xs').value + " is selected";
    }
    else if(document.getElementById('s').checked){
        document.getElementById('disp').innerHTML=document.getElementById('s').value + " is selected";
    }
    else if(document.getElementById('m').checked){
        document.getElementById('disp').innerHTML=document.getElementById('m').value + " is selected";
    }
    else if(document.getElementById('l').checked){
        document.getElementById('disp').innerHTML=document.getElementById('l').value + " is selected";
    }
    else if(document.getElementById('xl').checked){
        document.getElementById('disp').innerHTML=document.getElementById('xl').value + " is selected";
    }
    else{
        document.getElementById('disp').innerHTML="No one is selected";
    }
}

function display(){
    let checkRadio=document.querySelector('input[name=size]:checked');
    if(checkRadio!=null){
        document.getElementById('disp').innerHTML=checkRadio.value + " is selected";
    }
    else{
        document.getElementById('disp').innerHTML="No one is selected";
    }
}