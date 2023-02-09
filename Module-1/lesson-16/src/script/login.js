"use strict";
// !  LoginJS -------------
let username = document.getElementById("email-address");
let password = document.getElementById("password");
let signin = document.getElementById("signin");

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
    fetch("http://localhost:3003/user/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(user),
    })
      .then((resolve) => {
        return resolve.json();
      })
      .then((result) => {
        console.log(result);
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", result.user.username);
        localStorage.setItem("id", result.user.id);
        let token = localStorage.getItem("token");
        if (token) {
          window.location.replace("./index.html");
        }
      });
  }
}

signin.addEventListener("submit", (e) => {
  submitSignUp(e);
});
