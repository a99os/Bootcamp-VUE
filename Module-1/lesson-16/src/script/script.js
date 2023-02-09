"use strict";
let exit = document.querySelector("#exit");
let usernameId = document.querySelector("#username");
let mainList = document.querySelector(".list");
let token = localStorage.getItem("token");

// !----logout
exit.addEventListener("click", () => {
  localStorage.clear();
  logout();
});

function logout() {
  let token = localStorage.getItem("token");
  if (!token) {
    window.location.replace("./login.html");
  }
}
(function () {
  let username = localStorage.getItem("user");
  if (!token) {
    window.location.replace("./login.html");
  } else {
    usernameId.textContent = username;
  }
})();

// ! list-------------

const listTasks = async () => {
  try {
    const response = await fetch("http://178.62.198.221:3003/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + token,
      },
    });
    let result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
console.log(listTasks());

// !Render list
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
