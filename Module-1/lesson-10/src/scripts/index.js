"use strict";
const modalWindow = document.querySelector(".modal-window"),
  signUpBtn = document.querySelector(".register-btn"),
  modalContent = document.querySelector(".modal-content"),
  closeBtn = document.querySelector(".close-btn");

signUpBtn.addEventListener("click", (e) => {
  modalWindow.classList.remove("hidden");
});
closeBtn.addEventListener("click", (e) => {
  modalWindow.classList.add("hidden");
});

modalWindow.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-window")) {
    modalContent.classList.toggle("shaker");
  }
});
