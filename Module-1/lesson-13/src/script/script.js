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
let task = [
  // {
  //   id: Date.now(),
  //   title: "lorem ipsum dolor sit amet",
  //   status: true,
  // },
  // {
  //   id: Date.now(),
  //   title: "lorem dolor fact ",
  //   status: false,
  // },
  // {
  //   id: Date.now(),
  //   title: "goal dolor sit amet",
  //   status: true,
  // },
];

// !--------------- dymamic task list---------------
function renderTasklist(task) {
  if (task.length) {
    task.forEach((task, id) => {
      const taskItem = createElement(
        "li",
        "list__item w-full p-3 flex justify-between bg-white shadow-lg rounded-md mb-3 border-spacing-1",
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
            : "text-orange-500  active:text-orange-800"
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

renderTasklist(task);

// !--------------- dymamic task list finished---------------
// !--------------- count task done started---------------
function countTaskDone(task) {
  const done = task.filter((task) => task.status).length;
  const progres = task.filter((task) => !task.status).length;

  doneTask.textContent = done;
  progresTask.textContent = progres;
}
countTaskDone(task);
// !--------------- count task done finished---------------
// !--------------- add new task  started---------------
function addNewTask() {
  const title = taskTitle.value;
  const newTask = {
    id: Date.now(),
    title: title,
    status: false,
  };
  const check = {
    title: newTask.title.trim().length === 0,
  };
  if (check.title) {
    alert("Plese enter a title for task");
    // toast warning message
  } else {
    task.push(newTask);
    taskTitle.value = "";
  }
  // toast success message
}

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addNewTask();
  mainList.innerHTML = null;
  renderTasklist(task);
  countTaskDone(task);
});
// !--------------- add new task  finished---------------
mainList.addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
    const id = e.target.getAttribute("data-del");
    task = task.filter((task) => task.id != id);
    mainList.innerHTML = null;
    renderTasklist(task);
    countTaskDone(task);
  }
});
