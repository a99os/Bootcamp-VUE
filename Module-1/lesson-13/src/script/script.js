"use strict";

const toast = document.querySelector(".toast");
const notif = document.querySelector("#toast");
const submitForm = document.querySelector("#submitForm");
const taskTitle = document.querySelector("#task");
const doneTask = document.querySelector("#done");
const progresTask = document.querySelector("#progres");
const mainList = document.querySelector(".list");
const delTask = document.querySelectorAll(".del");
const editTask = document.querySelectorAll(".edit");
const checkTask = document.querySelectorAll(".check");

// !--------------- task list---------------
let tasklist = [
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

// !--------------- dymamic task list---------------
function renderTasklist(tasklist) {
  if (tasklist.length) {
    tasklist.forEach((task, id) => {
      console.log(task);
      const taskItem = createElement(
        "li",
        "w-full p-3 flex justify-between bg-white shadow-lg rounded-md mb-3 border-spacing-1",
        `
        <p class="text-xl text-[#5a5a5a] ">
          ${task.title}
        </p>
        <div class="btn-group flex justify-between ">
          <i
          data-del="${
            task.id
          }" class="del bx bx-trash text-2xl text-red-600 mx-2 cursor-pointer active:text-red-800"
          ></i>
          <i
          data-edit="${
            task.id
          }" class="edit bx bx-edit text-2xl text-sky-600 mx-2 cursor-pointer active:text-sky-800"
          ></i>
          <i
          data-check="${
            task.id
          }" class="check bx bx-check-circle text-2xl  mx-2 cursor-pointer  ${
          task.status
            ? " text-green-600  active:text-green-800"
            : "text-black  active:text-[#3a3a3a]"
        }"
          ></i>
        </div>`
      );

      mainList.append(taskItem);
    });
  } else {
    mainList.innerHTML = "<h2 class='text-center'> Not Found !</h2>";
  }
}

renderTasklist(tasklist);

// !--------------- dymamic task list finished---------------
// !--------------- count task done started---------------
function countTaskDone(taskList) {
  const done = taskList.filter((task) => task.status).length;
  const progres = taskList.filter((task) => !task.status).length;
  console.log(done);
  console.log(progres);
  doneTask.textContent = done;
  progresTask.textContent = progres;
}
countTaskDone(tasklist);
// !--------------- count task done finished---------------
