var dob = document.forms["user-form"]["dob"].value;
var ssn = document.forms["user-form"]["ssn"].value;
var formBtn = document.getElementById("active-button");


// Enabled-button & disabled-button classes need to by toggled
// when input in both form fields are recognized
function activateSubmit() {
  if (ssn == "" || dob == "") {
    alert("Please enter a valid input");
    formBtn.disabled = true;
  } else {
    formBtn.disabled = false;
    formBtn.classList.add("enabled-button");
  }
}


function infoEntered() {
  confirm("Is the information entered correct?")
};