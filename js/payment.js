import { card, kebabList } from "./database.js";

import {
  parseZlotowki,
  getTotalAmountAsNumber,
  calculation,
  getCard,
} from "./common.js";

let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

let generateCartItems = (newCard) => {
  if (newCard.length !== 0) {
    shoppingCart.innerHTML = newCard.map(() => {});
  }
};

generateCartItems(card);

let TotalAmount = (card) => {
  if (card.length === 0) {
    return;
  }

  let amount = getTotalAmountAsNumber(card, kebabList);
  const amountRounded = parseZlotowki(amount);

  label.innerHTML = `
  <h2>Pełny Koszt :  ${amountRounded} zł </h2>
  
  `;
};

TotalAmount(card);

calculation(getCard());
