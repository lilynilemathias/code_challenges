$(document).ready(function(){
  console.log("ready!");
  $('#sign-in-form').submit(function(e){
    var email = $('#email').val().trim();
    var password = $('#password').val().trim();
    var validation = /[a-zA-Z0-9_%+-]+@[a-zA-Z_%+-]+[a-zA-Z]{2,4}/;
    if (email == "" || password == ""){
      alert("Both Email and Password fields are required!");
    }
    if (validation.test(email)) {
      console.log("submitting...");
      $.ajax({
        type: 'POST',
        url: '/login',
        data: { email: email, password: password },
        success: function(data) {
          alert(data);
        },
        error: function(data) {
          alert(data.responseText);
        }
      });
      e.preventDefault();
    } else {
      alert("Email must be valid!");
    }
  });
});
