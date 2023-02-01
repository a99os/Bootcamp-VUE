"use strict";
const modalWindow = document.querySelector(".modal-window"),
  signUpBtn = document.querySelector(".register-btn"),
closeBtn = document.querySelector(".close-btn");

signUpBtn.addEventListener("click", (e) => {
  modalWindow.classList.remove("hidden");
});
closeBtn.addEventListener("click", (e) => {
  modalWindow.classList.add("hidden");
});

modalWindow.addEventListener("click", (e) => {
  console.log(e.target);
});


