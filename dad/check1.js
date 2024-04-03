function submitSelection(){
        var selectedValues = []; // Initialize an array to store selected values
    
        // Check each checkbox and add its value to the array if it's checked
        if(document.getElementById('check1').checked){
            selectedValues.push(document.getElementById('check1').value);
        }
        if(document.getElementById('check2').checked){
            selectedValues.push(document.getElementById('check2').value);
        }
        if(document.getElementById('check3').checked){
            selectedValues.push(document.getElementById('check3').value);
        }
    
        // Set the value of the text input field to the concatenated string of selected values
        document.getElementById('txt1').value = selectedValues.join(', ');
}

function clearSelection(){
    document.getElementById('check1').checked=false;
    document.getElementById('check2').checked=false;
    document.getElementById('check3').checked=false;

    document.getElementById('txt1').value='';
}

function selectAll(){
    document.getElementById('check1').checked=true;
    document.getElementById('check2').checked=true;
    document.getElementById('check3').checked=true;
}

function deselectAll(){
    document.getElementById('check1').checked=false;
    document.getElementById('check2').checked=false;
    document.getElementById('check3').checked=false;
}

function invertAll() {
    // Get all checkboxes
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    // Iterate over each checkbox and toggle its checked state
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = !checkbox.checked;
    });
}
