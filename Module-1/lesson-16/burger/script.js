"use strict";
let total_price = 2;
const cheeseBtn = document.querySelector(".cheeseBtn");
const meatBtn = document.querySelector(".meatBtn");
const onionBtn = document.querySelector(".onionBtn");
const saladBtn = document.querySelector(".saladBtn");
const tomatoBtn = document.querySelector(".tomatoBtn");
const pickleBtn = document.querySelector(".pickleBtn");
const price = document.querySelector(".price");
const orderBtn = document.querySelector(".order-button");
const tugma = document.querySelector(".tugma");
const foodLayers = document.querySelector(".food-layers");
price.textContent = "Total: $" + total_price;

tugma.addEventListener("click", (e) => {
  const cls = e.target.classList["value"];
  switch (cls) {
    case "cheese-button":
      renderBurger("cheese", 2);
      break;
    case "meat-button":
      renderBurger("meat", 5);
      break;
    case "onion-button":
      renderBurger("onion", 1);
      break;
    case "salad-button":
      renderBurger("salad", 1);
      break;
    case "tomato-button":
      renderBurger("tomato", 2);
      break;
    case "pickle-button":
      renderBurger("pickle", 3);
      break;
  }
});

function renderBurger(burger_name, priceBurger) {
  const el = document.createElement("img");
  el.className = "image-layer";
  el.alt = burger_name;
  el.src = `./burger-layers/${burger_name}.svg`;
  el.id = Date.now();
  el.dataset.price = priceBurger;
  total_price += priceBurger;
  price.textContent = "Total: $" + total_price;
  foodLayers.append(el);
}

foodLayers.addEventListener("click", (e) => {
  if (e.target.classList["value"] == "image-layer") {
    console.log(e.target);
    const elem = document.getElementById(e.target.id);
    total_price -= elem.getAttribute("data-price");
    foodLayers.removeChild(elem);
    price.textContent = "Total: $" + total_price;
  }
});

orderBtn.addEventListener("click", (e) => {
  alert(`Zakaz tayyor bo'ldi\n Umumiy narx: ${total_price} dollar`);
});
