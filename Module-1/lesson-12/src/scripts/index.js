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

// let icon = document.querySelector(".icon");

// // icon.onclick = (e) => {
// //   console.log((e.target.style.color = "red"));
// // };
// icon.addEventListener("mouseup", (e) => {
//   console.log("UP");
// });
// icon.addEventListener("mousedown", (e) => {
//   console.log("DOWN");
// });

// window.addEventListener("mousemove", (e) => {
//   console.log(e.target);
// });

// ! product info dinamic ---------------------------
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

// ! Carousel-----------------------------------------------------------
const coruselData = [
  {
    id: Date.now(),
    title: "What Our Customers About Us saying",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularis",
    clientName: "Ahmed Hridoy",
    img: "./images/aka.png",
  },
  {
    id: Date.now(),
    title: "What Our Customers About Us saying",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularis",
    clientName: "Mesut Ozil",
    img: "https://picsum.photos/id/231/500/500",
  },
  {
    id: Date.now(),
    title: "What Our Customers About Us saying",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularis",
    clientName: "Ronaldo Cristiano",
    img: "https://picsum.photos/id/244/500/500",
  },
  {
    id: Date.now(),
    title: "What Our Customers About Us saying",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularis",
    clientName: "Stive Jobs",
    img: "https://picsum.photos/id/250/500/500",
  },
  {
    id: Date.now(),
    title: "What Our Customers About Us saying",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularis",
    clientName: "elon Musk",
    img: "https://picsum.photos/id/249/500/500",
  },
];

const comment__wrapper = document.querySelector(".comment__wrapper");
const list = document.querySelector(".list");

coruselData.forEach((item) => {
  const element = createElement(
    "div",
    "explore__wrapper swiper-slide flex pt-[89px] pb-[143px] relative duration-500 min-w-[1239px]  ",
    `<div class="explore__info">
  <h1
    class="text-6xl font-bold w-[640px] mb-[20px] leading-[90px] mt-[20px]"
  >
    ${item.title}
  </h1>
  <p class="text-[#555555] text-lg w-[586px] leading-8">${item.description}
  </p>
  <h3
    class="text-[30px] font-normal mb-[20px] leading-[36px] mt-[40px]"
  >
    ${item.clientName}
  </h3>
  <img src="./images/yulduzcha.svg" alt="stars" />
</div>
<div class="ml-[80px] relative ">
  <img src="${item.img}" alt="aka"  class="rounded-full"/>
  <img
    src="./images/reyting.png"
    alt="reyting"
    class="absolute bottom-4 -left-8"
  />
</div>`
  );
  list.append(element);
});
const explore__wrapper = document.querySelectorAll(".explore__wrapper");
const leftBtn = document.querySelector(".left-icon");
const rightBtn = document.querySelector(".right-icon");
// let count = 0;
// function slider() {
//   if (count === coruselData.length) {
//     count = 0;
//   }
//   if (count < 0) {
//     count = coruselData.length - 1;
//   }
//   list.style.transform = `translateX(-${count * 1239}px)`;
// }
// const playCarusel = setInterval(() => {
//   count++;
//   slider();
// }, 3500);

// rightBtn.addEventListener("click", () => {
//   count++;
//   slider();
//   list.style.transform = `translateX(-${count * 1239}px)`;
//   clearInterval(playCarusel);
// });
// leftBtn.addEventListener("click", () => {
//   count--;
//   slider();
//   list.style.transform = `translateX(-${count * 1239}px)`;
//   clearInterval(playCarusel);
// });
