"use strict";

let them = document.querySelector("#them");
let header = document.querySelector("header");
let search = document.querySelector("#search");
let region = document.querySelector("#region");
let cardTemplate = document.querySelector(".card");
let cardWrapper = document.querySelector(".card__wrapper");
them.addEventListener("input", (e) => {
  localStorage.setItem("them", e.target.checked);
  changemode();
});

function changemode() {
  let mode = localStorage.getItem("them");
  if (String(mode) == "true") {
    header.style.cssText = "background-color: #2b3844; color: #fff";
    search.style.cssText = "background-color: #2b3844";
    region.style.cssText = "background-color: #2b3844";
    // cardTemplate.style.cssText = "background-color: #2b3844";
    document.body.style.cssText = "background-color: #202c36; color: #fff";
  } else {
    header.style.cssText = "background-color: #fff; color: #000";
    search.style.cssText = "background-color: #fff";
    region.style.cssText = "background-color: #fff";
    // cardTemplate.style.cssText = "background-color: #fff";
    document.body.style.cssText = "background-color: #f2f2f2; color: #000";
  }
}

changemode();

// ! ------------dinamic cards --------------------
let baseURL = "https://restcountries.com/v2/all";

const getAllCountries = async () => {
  cardWrapper.innerHTML = `<span class="loader"></span>`;
  try {
    const response = await fetch(baseURL);
    const result = await response.json();
    if (response.status == 200) {
      renderCards(result);
    } else {
      alert(response.status);
    }
  } catch (error) {
    console.log(error);
  }
};
getAllCountries();

// ! ------------render cards --------------------

function renderCards(cards) {
  cardWrapper.innerHTML = ``;
  cards.forEach((element) => {
    const card = createElement(
      "div",
      "card rounded-[5px] shadow-lg w-[240px] bg-white max-w-sm shadow-lg",
      `
        <a href="#!">
          <img
            class="rounded-t-lg w-full h-[160px]"
            src="${element.flags.svg}"
            alt=""
          />
        </a>
        <div class="p-6">
          <h5 class="text-xl font-medium mb-2">${element.name}</h5>
          <li class="list-none">
            <li><strong>Population:</strong>${element.population}</li>
            <li><strong>Region:</strong>${element.region}</li>
            <li><strong>Capital:</strong>${element.capital}</li>
          </ul>
        </div>`
    );
    cardWrapper.append(card);
  });
}
