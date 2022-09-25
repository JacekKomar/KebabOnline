import { beerList, kebabList, foodList, card } from "./database.js";
import { calculation, decrement, increment, update } from "./common.js";

export let label = document.getElementById("label");
export let shoppingCart = document.getElementById("shopping-cart");

calculation();
let incrementCard = (clickedId) => {
  const newCard = increment(clickedId);
  generateCartItems(card);
  TotalAmount(newCard);
};

let decrementCard = (clickedId) => {
  const newCard = decrement(clickedId);

  generateCartItems(newCard);
  TotalAmount(newCard);
};

window.incrementCard = incrementCard;
window.decrementCard = decrementCard;

export let generateCartItems = (newCard) => {
  if (newCard.length !== 0) {
    //return ?
    shoppingCart.innerHTML = newCard
      .map((kebabOne) => {
        let { id, item } = kebabOne;
        let search = kebabList.find((y) => y.id === id) || [];

        return `
      <div class="cart-item">
        <img width="300" img height = "300" src=${search.img} alt=""/>
        <div class="details">
    
<div class= "titke-price-x">
<h4> 
<p>${search.titke}</p> 
<p class="cart-item-price"> ${search.price} zł</p>
</h4 class="titke-price">
<i onclick="removeItem('${id}')" class="bi bi-x-lg"></i>
</div>
<div class= "cart-buttons">  <div class="plus-minus-buttons">
<i  class="bi bi-dash-square" onclick="decrementCard('${kebabOne.id}')" ></i>
<div class="quantity" id="${kebabOne.id}"> ${item}
  
</div>
<i  class="bi bi-plus-square" onclick="incrementCard('${kebabOne.id}')" ></i>
</div>
 </div>
<h3> ${item * search.price} zł</h3>
        </div>
      </div>
`;
      })
      .join("");
  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>Koszyk jest pusty</h2>
    <a href="index.html">
      <button class="HomeBtn">Wróć do strony głównej</button>
    </a>
    `;
  }
  //test

  //test
};

generateCartItems(card);

let removeItem = (id) => {
  let selectedItem = id;
  console.log(id);
  const newCard = card.filter((x) => x.id !== selectedItem);
  generateCartItems(newCard);
  TotalAmount(newCard);
  calculation();
  localStorage.setItem("data", JSON.stringify(newCard));
};
window.removeItem = removeItem;

let clearCart = () => {
  const newCard = [];
  generateCartItems(newCard);
  calculation();
  localStorage.setItem("data", JSON.stringify(newCard));
};

window.clearCart = clearCart;

let TotalAmount = (card) => {
  if (card.length === 0) {
    return;
  }

  let amount = card
    .map((x) => {
      let { item, id } = x;
      let search = kebabList.find((y) => y.id === id) || {}; //jak to dodaje to wywala
      return item * search.price;
    })
    .reduce((x, y) => x + y, 0);
  // console.log(amount);

  label.innerHTML = `
  <h2>Pełny Koszt :  ${amount} zł </h2>
  <button onclick="location.href='http://127.0.0.1:5500/payment.html'"class="checkout">Przejdź do płatności</button>
  <button onclick ="clearCart()" class="RemoveAll">Wyczyść Koszyk</button>
  `;
};

TotalAmount(card);
