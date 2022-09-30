import { card } from "./database.js";

import {
  label,
  shoppingCart,
  getTotalAmountAsNumber,
  parseZlotowki,
} from "./your_shopping.js";

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

  let amount = getTotalAmountAsNumber(card);

  label.innerHTML = `
  <h2>Pełny Koszt :  ${amountRounded} zł </h2>
  
  `;
};

TotalAmount(card);
