import { beerList, kebabList, foodList, card } from "./database.js";
import { calculation, decrement, increment, update } from "./common.js";
import { label, shoppingCart } from "./your_shopping.js";

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

  let amount = card.map((x) => {
    let { item, id } = x;
    let search = kebabList.find((y) => y.id === id) || {}; //jak to dodaje to wywala
    return item * search.price;
  });

  label.innerHTML = `
  <h2>Pełny Koszt :  ${amount} zł </h2>
  
  `;
};

TotalAmount(card);
