"use strict";

let them = document.querySelector("#them");
let header = document.querySelector("header");
let search = document.querySelector("#search");
let regionSelect = document.querySelector("#region");
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
let filterURL = "https://restcountries.com/v2/region";
let searchURL = "https://restcountries.com/v2/name";

const getAllCountries = async () => {
  cardWrapper.innerHTML = `<span class="loader"></span>`;
  try {
    const response = await fetch(baseURL);
    const result = await response.json();
    if (response.status == 200) {
      renderCards(result);
      filterRegion(result);
    } else {
      alert(response.status);
    }
  } catch (error) {
    console.log(error);
  }
};

getAllCountries(baseURL);

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
          <h5 class="text-xl font-medium mb-2 card__title cursor-pointer" data-isname =${
            element.name
          }>${element.name}</h5>
          <li class="list-none">
            <li><strong>Population:</strong>${element.population}</li>
            <li><strong>Region:</strong>${element.region}</li>
            <li><strong>Capital:</strong>${
              element.capital || "not found capital"
            }</li>
          </ul>
        </div>`
    );
    card.dataset.isname = element.name;
    cardWrapper.append(card);
  });
}

// !------------------dinamic selection  region------------------------
function filterRegion(data) {
  const region = [];
  data.forEach((item) => {
    if (!region.includes(item.region)) {
      region.push(item.region);
    }
  });
  region.sort();
  region.forEach((item) => {
    const element = createElement("option", "item", item);
    element.value = item;
    regionSelect.append(element);
  });
  console.log(region);
}

const getFillterCountries = async (region) => {
  cardWrapper.innerHTML = `<span class="loader"></span>`;
  try {
    const response = await fetch(filterURL + `/${region}`);
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

regionSelect.addEventListener("change", (e) => {
  getFillterCountries(e.target.value);
  console.log("salom");
});

// ! ----------------search ------------------
async function searchCountries(country) {
  cardWrapper.innerHTML = `<span class="loader"></span>`;
  try {
    const response = await fetch(searchURL + `/${country}`);
    const result = await response.json();
    if (response.status == 200) {
      renderCards(result);
    } else {
      cardWrapper.innerHTML = "";
      cardWrapper.innerHTML =
        "<h1 class=' uppercase text-lg text-red-500 tetx-center'> Not found region</h1>";
    }
  } catch (error) {
    console.log(error);
  }
}
let searchInput = document.querySelector("#search");
search.addEventListener("keyup", (e) => {
  if (!e.target.value.trim().length) {
    getAllCountries();
  } else {
    searchCountries(e.target.value.trim());
    search.setAttribute("placeholder", "Pleace fill region name");
  }
});

// !------
cardWrapper.addEventListener("click", (e) => {
  if (e.target.classList.contains("card__title")) {
    const isname = e.target.getAttribute("data-isname");
    console.log(isname);
    localStorage.setItem("isname", isname);
    window.open("./country.html");
  }
});
