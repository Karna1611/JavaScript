function bodyContentButtonClick(){
    console.log(document.body);
    console.log(document.head);
    console.log(document.title);
    console.log(document.URL);

    document.body.style.color="#009688";
    document.title='We will do it';

    let h2Element=document.getElementById('h2Element');
    if(h2Element===null){
        console.log('Element not found');
    }
    else{
        console.log('Element found');
        console.log(h2Element.innerHTML);
        console.log(h2Element.innerText);
        console.log(typeof h2Element);
    }
}

function changeContentButtonClick(){
    let h2=document.getElementById('h2Element');
    if(h2!=null){
        h2.innerHTML=`Let's do it. <br>Yup, we did it.`;
    }
}