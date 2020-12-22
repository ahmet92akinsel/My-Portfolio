<script src="myscripts.js"></script>


var button = document.getElementById('SubmitButton');
button.addEventListener('click', function(){ this.style.color = '#00BFFF'}, false);

/* Label Styling */
function getUserName() {
document.getElementById('userName').style.fontSize = '15px';
}

function myFunction2() {
    document.getElementById('userEmail').style.fontSize = '15px';
    }

function myFunction3() {
document.getElementById('userMsg').style.fontSize = '15px';
}

/*Example (variable vermeyi unutma)*/
if (email.value == "") { 
    window.alert( 
      "Please enter a valid e-mail address."); 
    email.focus(); 
    return false; 
} 