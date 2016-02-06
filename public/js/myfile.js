$(document).ready(function() {
  $("#registrationForm").on("submit", function(e) {
    if($("#registerEmail").val().length === 0) {
      alert("Please enter an email");
      return false;
    } else if($("#registerPassword").val().length === 0) {
      alert("Please enter a password");
      return false;
    } else {
      return true;
    }
  });
});
