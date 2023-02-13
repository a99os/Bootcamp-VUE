"use strict";
let exit = document.querySelector("#exit");
let usernameId = document.querySelector("#username");
let mainList = document.querySelector(".list");
let task = document.querySelector("#task");
let token = localStorage.getItem("token");
let submitForm = document.querySelector("#submitForm");
const doneTask = document.querySelector("#done");
const progresTask = document.querySelector("#progres");
const task_modal = document.querySelector(".task_modal");
const modal = document.querySelector(".modal");
const editForm = document.querySelector("#editForm");
const saveCancel = document.querySelector("#save-cancel");
const saveEdit = document.querySelector("#save-edit");

// !----logout
exit.addEventListener("click", () => {
  localStorage.clear();
  getToken();
});

function getToken() {
  let token = localStorage.getItem("token");
  if (!token) {
    window.location.replace("./login.html");
  }
  return token;
}
(function () {
  let username = localStorage.getItem("user");
  if (!token) {
    window.location.replace("./login.html");
  } else {
    usernameId.textContent = username;
    actionTask();
  }
})();

// !--------------- count task done started---------------

function countTaskDone(task) {
  const done = task.filter((e) => e.status).length;
  const progres = task.filter((e) => !e.status).length;

  doneTask.textContent = done;
  progresTask.textContent = progres;
}

// ! list-------------

async function listTasks() {
  try {
    const response = await fetch("http://178.62.198.221:3003/task", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + getToken(),
      },
    });
    let result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

// !Render list
function renderTasklist(task) {
  mainList.innerHTML = "";
  if (task.length) {
    task.forEach((task, id) => {
      const taskItem = createElement(
        "li",
        "list__item w-full p-3 flex justify-between bg-white shadow-lg rounded-md mb-3 border-spacing-1",
        `
        <p class="text-xl text-[#5a5a5a]  ${
          !task.status ? "" : "line-through text-green-600"
        }">
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
            : "text-orange-500  active:text-orange-800 "
        }"
          ></i>
        </div>`
      );

      mainList.append(taskItem);
    });
    countTaskDone(task);
  } else {
    mainList.innerHTML = "<h2 class='text-center'> Not Found !</h2>";
  }
}

submitForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = task.value.trim();
  if (title.length) {
    const response = await fetch("http://178.62.198.221:3003/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + getToken(),
      },
      body: JSON.stringify({ title }),
    });
    actionTask();
    task.value = "";
  } else {
    alert("taskni kirgaz");
  }
});

async function actionTask() {
  const tasks = await listTasks();
  renderTasklist(tasks);
  countTaskDone(tasks);
}

// !--------------- delete edit task  started---------------
mainList.addEventListener("click", async (e) => {
  if (e.target.classList.contains("del")) {
    const id = e.target.getAttribute("data-del");
    await fetch("http://178.62.198.221:3003/task/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + getToken(),
      },
    });
    mainList.innerHTML = null;
    actionTask();
  } else if (e.target.classList.contains("check")) {
    const id = e.target.getAttribute("data-check");
    await fetch("http://178.62.198.221:3003/task/" + id, {
      method: "PATCH",
      body: JSON.stringify({ status: true }),
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + getToken(),
      },
    });
    actionTask();
  } else if (e.target.classList.contains("edit")) {
    const id = e.target.getAttribute("data-edit");
    const response = await fetch("http://178.62.198.221:3003/task/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + getToken(),
      },
    });
    const task = await response.json();
    task_modal.id = id;
    task_modal.value = task.title;
    modal.classList.remove("hidden");
    modal.classList.add("block");
  }
});

saveEdit.addEventListener("click", async (e) => {
  await fetch("http://178.62.198.221:3003/task/" + task_modal.id, {
    method: "PATCH",
    body: JSON.stringify({ title: task_modal.value }),
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + getToken(),
    },
  });
  modal.classList.remove("block");
  modal.classList.add("hidden");
  actionTask();
});

modal.addEventListener("click", (e) => {
  if (
    e.target.id !== "save-edit" &&
    e.target.id !== "save-cancel" &&
    !e.target.classList.contains("task_modal")
  ) {
    modal.classList.remove("block");
    modal.classList.add("hidden");
  }
});

saveCancel.addEventListener("click", (e) => {
  modal.classList.remove("block");
  modal.classList.add("hidden");
});

task_modal.addEventListener("keyup", async (e) => {
  if (e.keyCode === 13) {
    await fetch("http://178.62.198.221:3003/task/" + task_modal.id, {
      method: "PATCH",
      body: JSON.stringify({ title: task_modal.value }),
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + getToken(),
      },
    });
    modal.classList.remove("block");
    modal.classList.add("hidden");
    actionTask();
  }
});
