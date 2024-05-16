function login() {
  var usernameInput = document.getElementById("userName").value;
  var passwordInput = document.getElementById("passWord").value;
  if (usernameInput == "admin" && passwordInput == "1234") {
    window.location.href = "Main.html";
  } else {
    alert("Wrong Username/Password");
  }
}
