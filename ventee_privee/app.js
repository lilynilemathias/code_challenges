$(document).ready(function(){
  $('#apply').click(validateForm);
});

function validateForm(){
  var email = $('#email').val().trim();
  var phone = $('#phone').val().trim();
  var firstName = $('#first-name').val().trim();
  var lastName = $('#last-name').val().trim();
  validateEmail(email);
  validateName(firstName, lastName);
  validatePhone(phone);
}

function validateEmail(email){
  var validation = /[\w_%+-]+@[\w]+\.[a-zA-Z]{2,4}/;
  if (validation.test(email)) {
    confirm("Is '" + email + "' correct?");
  } else {
    alert("Must enter a valid email");
  }
}

function validateName(first, last){
  var validation = /[a-z_%+@^\/]{1, 255}/;
  if (validation.test(first) && validation.test(last)){
    confirm("Is '" + first + " " + last + "' correct?");
  } else {
    alert("Must input first and last name");
  }
}

function validatePhone(phone){
  var validation = /^\d{10}$/;
  if (validation.test(phone.replace(/[\s\-\(\)\.]/g, ""))) {
    confirm("Is '" + phone + "' correct?");
  } else {
    alert("Must input a valid phone number");
  }
}
