"use strict";
// !  SignUp -------------
let username = document.getElementById("email-address");
let password = document.getElementById("password");
let signup = document.getElementById("signup");

function submitSignUp(e) {
  e.preventDefault();

  const user = {
    username: username.value,
    password: password.value,
  };

  if (user.username.trim().length === 0 || user.password.trim().length === 0) {
    console.log("please enter your username and password");
  } else {
    console.log("salom");
    fetch("http://localhost:3003/user/register", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(user),
    })
      .then((resolve) => {
        if (resolve.ok) {
          window.location.replace("./login.html");
        }
        return resolve.json();
      })
      .then((result) => {
        if (result.statusCode) {
          alert(result.message);
        } else {
          console.log(result.message);
        }
      });
  }
}

signup.addEventListener("submit", (e) => {
  submitSignUp(e);
});
