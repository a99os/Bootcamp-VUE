"use strict";

const toast = document.querySelector(".toast");
const notif = document.querySelector("#toast");
const submitForm = document.querySelector("#submitForm");
const taskTitle = document.querySelector("#task");
const doneTask = document.querySelector("#done");
const progresTask = document.querySelector("#progres");
const listTask = document.querySelector(".list");
const delTask = document.querySelectorAll(".del");
const editTask = document.querySelectorAll(".edit");
const checkTask = document.querySelectorAll(".check");


// !--------------- task list---------------
let task = [
  {
    id: Date.now(),
    title: "lorem ipsum dolor sit amet",
    status: true,
  },
  {
    id: Date.now(),
    title: "lorem dolor fact ",
    status: false,
  },
  {
    id: Date.now(),
    title: "goal dolor sit amet",
    status: true,
  },
];
