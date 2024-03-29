import { beerList, kebabList, foodList, card } from "./database.js";
import {
  calculation,
  decrement,
  increment,
  update,
  getCard,
} from "./common.js";

const shop = document.getElementById("KebabListFromJavaScript");

const generateKebabOne = (kebabOne) => {
  let search =
    card.find((szukanyKebab) => szukanyKebab.id === kebabOne.id) || [];

  return `
  
  
  <div  class= "Kebab-pizza "  id="${kebabOne}"> 
<img  src="${kebabOne.img}" alt="Kebabbig" width="310px" height="210px" />
<div class="titke">${kebabOne.titke}</div>
<div class="price">${kebabOne.price} zł</div>
<p class="desc">
  ${kebabOne.desc}
  </p>

  <div class="plus-minus-buttons">
  <i  class="bi bi-dash-square" onclick="decrement('${kebabOne.id}')" ></i>
  <div class="quantity" id="${kebabOne.id}">
    ${search.item === undefined ? 0 : search.item} 
  </div>
  <i  class="bi bi-plus-square" onclick="increment('${kebabOne.id}')" ></i>
</div>
<button onclick="location.href='your_shopping.html'" class="button-kebab" data-order="kebabbig">Zamów</button>
</div>

`;
};

shop.innerHTML += foodList.map(generateKebabOne).join("");

calculation(getCard());
