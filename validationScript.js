// JavaScript code for form validation
// Prevent form from submitting

// Retrieve the input field value


// Regular expression pattern for alphanumeric input

// Check if the input value matches the pattern

// Valid input: display confirmation and submit the form

// Invalid input: display error message

let inputField = document.getElementById("inputField");
let inputFieldRegex = /^[a-z0-9]+$/;

let myForm = document.getElementById("myForm");
myForm.addEventListener('submit', function(event) {
  if(!inputFieldRegex.test(inputField.value)) {
    alert("Invalid format"); 
    event.preventDefault(); 
  } else {
    alert("Submission Successful!");
  }
});

inputField.addEventListener('blur', function() {
  if(!inputFieldRegex.test(inputField.value)) {
    alert("Invalid format"); 
  } 
});