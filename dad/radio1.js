function showGender(){
    if(document.getElementById('male').checked){
        document.getElementById('genderResult').value=document.getElementById('male').value;
    }
    else if(document.getElementById('female').checked){
        document.getElementById('genderResult').value=document.getElementById('female').value;
    }
    else{
        document.getElementById('genderResult').value='Please select one gender';
    }
}

function showSemester(){
    if(document.getElementById('sem1').checked){
        document.getElementById('semesterResult').value=document.getElementById('sem1').value;
    }
    else if(document.getElementById('sem2').checked){
        document.getElementById('semesterResult').value=document.getElementById('sem2').value;
    }
    else if(document.getElementById('sem3').checked){
        document.getElementById('semesterResult').value=document.getElementById('sem3').value;
    }
    else if(document.getElementById('sem4').checked){
        document.getElementById('semesterResult').value=document.getElementById('sem4').value;
    }
    else{
        document.getElementById('semesterResult').value='Please select one semester';
    }
}

function showSubject(){
    if(document.getElementById('sub1').checked){
        document.getElementById('subjectResult').value=document.getElementById('sub1').value;
    }
    else if(document.getElementById('sub2').checked){
        document.getElementById('subjectResult').value=document.getElementById('sub2').value;
    }
    else if(document.getElementById('sub3').checked){
        document.getElementById('subjectResult').value=document.getElementById('sub3').value;
    }
    else{
        document.getElementById('subjectResult').value='Please select one subject';
    }
}

function showResult(){
    document.getElementById('result').value=document.getElementById('genderResult').value + ',' + 
    document.getElementById('semesterResult').value + ',' + 
    document.getElementById('subjectResult').value;
    // (document.getElementById('semesterResult'))+
    // (document.getElementById('subjectResult'));
}