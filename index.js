firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("userdiv").style.display = "block";
    document.getElementById("logindiv").style.display = "none";
  } else {
    // No user is signed in.
    document.getElementById("logindiv").style.display = "block";
    document.getElementById("userdiv").style.display = "none";
  }
});

function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;
}
