const createElement = (tagName, className, content) => {
  const element = document.createElement(tagName);
  if (className) element.setAttribute("class", className);
  if (content) element.innerHTML = content;
  return element;
};
const row = document.querySelector(".row__pokemons");
let all = document.querySelector(".select");
const input = document.querySelector(".search-pokemone");
const selecter = document.querySelector(".selecter-by-letters");

let sortedpokemons = pokemons.sort((p1, p2) =>
  p1.name < p2.name ? -1 : p1.name > p2.name ? 1 : 0
);
const setType = new Set();
sortedpokemons.forEach((pokemon) => {
  setType.add(...pokemon.type);
  const element = createElement(
    "div",
    "card col-lg-3 col-md-6 col-sm-12 mr-1",
    `<div class="card-img text-center">
             <img src="${pokemon.img}" class="img-fluid" alt="img" width="157px "height="157px">
           </div>
           <span class="line"></span>
           <div class="card-body">
             <div class="card-like"> 
               <i class="fa-regular fa-heart"></i>
             </div>
             <div class="card-title">
               <p>${pokemon.name}</p>
             </div>
             <div class="card-category">
               <p>${pokemon.type}</p>
             </div>
             <div class="card-info">
               <div class="d-flex">
                 <h5 class="card-info-kg">${pokemon.weight}</h5>
                 <h5 class="card-info-age">${pokemon.height} height</h5>                                   
               </div>                              
             </div>
           </div>`
  );
  row.append(element);
});
setType.forEach((items) => {
  const element = createElement("option", "", items);
  all.append(element);
});

all.addEventListener("input", (e) => {
  row.innerHTML = null;
  if (e.target.value === "All") {
    sortedpokemons.forEach((pokemon) => {
      const element = createElement(
        "div",
        "card col-lg-3 col-md-6 col-sm-12 mr-1",
        `<div class="card-img text-center">
                   <img src="${pokemon.img}" class="img-fluid" alt="img" width="157px "height="157px">
                 </div>
                 <span class="line"></span>
                 <div class="card-body">
                   <div class="card-like"> 
                     <i class="fa-regular fa-heart"></i>
                   </div>
                   <div class="card-title">
                     <p>${pokemon.name}</p>
                   </div>
                   <div class="card-category">
                     <p>${pokemon.type}</p>
                   </div>
                   <div class="card-info">
                     <div class="d-flex">
                       <h5 class="card-info-kg">${pokemon.weight}</h5>
                       <h5 class="card-info-age">${pokemon.height} height</h5>                                   
                     </div>                              
                   </div>
                 </div>`
      );
      row.append(element);
    });
  } else {
    sortedpokemons.forEach((pokemon) => {
      if (pokemon.type.includes(e.target.value)) {
        const element = createElement(
          "div",
          "card col-lg-3 col-md-6 col-sm-12 mr-1",
          `<div class="card-img text-center">
                 <img src="${pokemon.img}" class="img-fluid" alt="img" width="157px "height="157px">
               </div>
               <span class="line"></span>
               <div class="card-body">
                 <div class="card-like"> 
                   <i class="fa-regular fa-heart"></i>
                 </div>
                 <div class="card-title">
                   <p>${pokemon.name}</p>
                 </div>
                 <div class="card-category">
                   <p>${pokemon.type}</p>
                 </div>
                 <div class="card-info">
                   <div class="d-flex">
                     <h5 class="card-info-kg">${pokemon.weight}</h5>
                     <h5 class="card-info-age">${pokemon.height} height</h5>                                   
                   </div>                              
                 </div>
               </div>`
        );
        row.append(element);
      }
    });
  }
});

selecter.addEventListener("input", (e) => {
  row.innerHTML = null;
  value = e.target.value;
  if (value === "Z-A") {
    sortedpokemons = pokemons.sort((p1, p2) =>
      p1.name < p2.name ? 1 : p1.name > p2.name ? -1 : 0
    );
  } else {
    sortedpokemons = pokemons.sort((p1, p2) =>
      p1.name < p2.name ? -1 : p1.name > p2.name ? 1 : 0
    );
  }
  sortedpokemons.forEach((pokemon) => {
    const element = createElement(
      "div",
      "card col-lg-3 col-md-6 col-sm-12 mr-1",
      `<div class="card-img text-center">
                 <img src="${pokemon.img}" class="img-fluid" alt="img" width="157px "height="157px">
               </div>
               <span class="line"></span>
               <div class="card-body">
                 <div class="card-like"> 
                   <i class="fa-regular fa-heart"></i>
                 </div>
                 <div class="card-title">
                   <p>${pokemon.name}</p>
                 </div>
                 <div class="card-category">
                   <p>${pokemon.type}</p>
                 </div>
                 <div class="card-info">
                   <div class="d-flex">
                     <h5 class="card-info-kg">${pokemon.weight}</h5>
                     <h5 class="card-info-age">${pokemon.height} height</h5>                                   
                   </div>                              
                 </div>
               </div>`
    );
    row.append(element);
  });
});
input.addEventListener("input", (e) => {
  row.innerHTML = null;
  value = e.target.value;
  sortedpokemons.forEach((pokemon) => {
    if (
      pokemon.name.slice(0, value.length).toLowerCase() === value.toLowerCase()
    ) {
      const element = createElement(
        "div",
        "card col-lg-3 col-md-6 col-sm-12 mr-1",
        `<div class="card-img text-center">
                 <img src="${pokemon.img}" class="img-fluid" alt="img" width="157px "height="157px">
               </div>
               <span class="line"></span>
               <div class="card-body">
                 <div class="card-like"> 
                   <i class="fa-regular fa-heart"></i>
                 </div>
                 <div class="card-title">
                   <p>${pokemon.name}</p>
                 </div>
                 <div class="card-category">
                   <p>${pokemon.type}</p>
                 </div>
                 <div class="card-info">
                   <div class="d-flex">
                     <h5 class="card-info-kg">${pokemon.weight}</h5>
                     <h5 class="card-info-age">${pokemon.height} height</h5>                                   
                   </div>                              
                 </div>
               </div>`
      );
      row.append(element);
    }
  });
});
