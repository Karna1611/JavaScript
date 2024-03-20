let btn=document.getElementById('setFocusButton');
btn.addEventListener('click',setFocusButtonClick);

function getNameButtonClick(){
    let firstName=document.getElementById('firstName');
    console.log(firstName);
    console.log(firstName.type);

    let para=document.getElementById('para');
    para.textContent=`Name is: ${firstName.value}`;
    para.style.fontSize='200%';
    para.style.backgroundColor='yellow';
}

function setNameButtonClick(){
    let firstName=document.getElementById('firstName');
    firstName.value='Karna Trivedi';
}

function setFocusButtonClick(){
    let firstName=document.getElementById('firstName');
    firstName.focus();
}

