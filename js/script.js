// Sign in show password
const eyePasswordSignin = document.getElementById("eyePasswordSignin");
const passwordSignin = document.getElementById("passwordSignin");
eyePasswordSignin.addEventListener("click", showPasswordSignin);
function showPasswordSignin(e) {
  if (passwordSignin.type === "password") {
    passwordSignin.type = "text";
  } else {
    passwordSignin.type = "password";
  }
  console.log(passwordSignin.type);
}
// signup show password
const eyePasswordSignup = document.getElementById("eyePasswordSignup");
const passwordSignup = document.getElementById("passwordSignup");
const passwordConfirm = document.getElementById("passwordconfirm");
eyePasswordSignup.addEventListener("click", showPasswordSignup);
function showPasswordSignup(e) {
  if (passwordSignup.type === "password") {
    passwordSignup.type = "text";
    passwordConfirm.type = "text";
  } else {
    passwordSignup.type = "password";
    passwordConfirm.type = "password";
  }
  console.log(passwordSignup.type + passwordConfirm.type);
}
// from signup page signin instead
// const signinInstead = document.getElementById("signupInstead");
// signinInstead.addEventListener("click", signinPage);
// function signinPage(e) {
//   window.open("https://www.google.com/", "_blank").focus();
// }
