"use strict";
// ! --------------------- Modal window ---------------------------------------

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

// ! ------------------ Dinamic elemnts ---------------------------------------

const introProduct = document.querySelector(".intro__product--info");
let cards = [
  { id: 1, img: "./images/user 1.svg", title: "30K", description: "UserOrder" },
  {
    id: 2,
    img: "./images/star 7.svg",
    title: "20K",
    description: "Reviews(4.8)",
  },
  { id: 3, img: "./images/harvest 1.svg", title: "300", description: "Items" },
];
const createElement = (tagName, className, content) => {
  const element = document.createElement(tagName);
  if (className) element.setAttribute("class", className);
  if (content) element.innerHTML = content;
  return element;
};

cards.forEach((items) => {
  const newElement = createElement(
    "div",
    "card mb-[30px] hover:shadow-lg bg-white flex justify-between pl-[34px] pr-[46px] py-[17px] rounded-sm items-center",
    ` <span class="p-3 bg-green-50 rounded-full">
    <img src="${items.img}" alt=""
  /></span>
  <div class="flex flex-col ml-3">
    <h2 class="font-normal text-5xl">${items.title}</h2>
    <p class="font-normal text-lg leading-[30px]">${items.description}</p>
  </div>`
  );
  introProduct.append(newElement);
});

let icon = document.querySelector(".icon");

// icon.onclick = (e) => {
//   console.log((e.target.style.color = "red"));
// };
icon.addEventListener("mouseup", (e) => {
  console.log("UP");
});
icon.addEventListener("mousedown", (e) => {
  console.log("DOWN");
});

window.addEventListener("mousemove", (e) => {
  console.log(e.target);
});

// ! product info dinamic
let productInfoItems = [
  {
    id: 1,
    img: "./images/delivery-man 2.svg",
    title: "Fasted delivery Service",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    id: 2,
    img: "./images/shopping 1.svg",
    title: "Online order Service",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    id: 3,
    img: "./images/fast-time 1.svg",
    title: "24/8 Service",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
];
const productInfo = document.querySelector(".info__content---items");

productInfoItems.forEach((item) => {
  const element = createElement(
    "div",
    "info__content---items-item w-[500px] h-[160px] px-[60px] py-10  hover:bg-green-50",
    `
    <div class="flex justify-around">
      <div
        class="info__content---items-item-logo bg-green-50 w-20 h-20 flex items-center justify-center rounded-full"
      >
        <img src="${item.img}" alt="delivery-man" />
      </div>
      <div>
        <h3 class="font-bold text-5 leading-[30px]">
        ${item.title}
        </h3>
        <p
          class="font-normal text-[14px] leading-5 w-[277px] text-[#555555]"
        >${item.description}
        </p>
      </div>
    </div>`
  );
  productInfo.append(element);
});
