import { beerList, kebabList, foodList, card } from "./database.js";
import { calculation, decrement, increment, update } from "./common.js";

const shop = document.getElementById("BeerListFromJavaScript");

const generateBeerOne = (BeerOne) => {
  let search = card.find((szukanePiwo) => szukanePiwo.id === BeerOne.id) || [];

  return `  
  <div class="Kebab-drinks" id="${BeerOne}">
    <img src="${BeerOne.img}" alt="beer1" width="310px" height="260px" />
    <div class="titke">${BeerOne.titke}</div>
    <div class="price">${BeerOne.price}</div>
    <p class="desc">${BeerOne.desc}</p>
    <div class="plus-minus-buttons">
    <i class="bi bi-dash-square" onclick="decrement('${BeerOne.id}')"></i>
    <div class="quantity" id="${BeerOne.id}">
    ${search.item === undefined ? 0 : search.item} 
    
    </div>
    <i class="bi bi-plus-square" onclick="increment('${BeerOne.id}')" ></i>
  </div>
    <button class="button-drinks" data-order="Piwo">Zamów</button>
  </div>`;
};

shop.innerHTML += beerList.map(generateBeerOne).join("");

calculation();