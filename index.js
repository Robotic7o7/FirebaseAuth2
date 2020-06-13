firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("logindiv").style.display = "none";
    document.getElementById("usediv").style.display = "block";
  } else {
    // No user is signed in.
    document.getElementById("logindiv").style.display = "block";
    document.getElementById("usediv").style.display = "none";
  }
});

function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      alert(errorMessage);
    });
}
