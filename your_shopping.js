import { beerList, kebabList, foodList, card } from "./database.js";
import { calculation, decrement, increment, update } from "./common.js";

let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

calculation();
let incrementCard = (clickedId) => {
  increment(clickedId);
  generateCartItems();
};

let decrementCard = (clickedId) => {
  decrement(clickedId);

  generateCartItems();
};

let generateCartItems = () => {
  if (card.length !== 0) {
    //return ?
    shoppingCart.innerHTML = card
      .map((kebabOne) => {
        let { id, item } = kebabOne;
        let search = kebabList.find((y) => y.id === id) || [];

        return `
      <div class="cart-item">
        <img width="100" src=${search.img} alt=""/>
        <div class="details">
    
<div class= "titke-price-x">
<h4> 
<p>${search.titke}</p> 
<p class="cart-item-price">$ ${search.price}</p>
</h4 class="titke-price">
<i onclick="removeItem('${id}')" class="bi bi-x-lg"></i>
</div>
<div class= "cart-buttons">  <div class="plus-minus-buttons">
<i  class="bi bi-dash-square" onclick="decrementCard('${kebabOne.id}')" ></i>
<div class="quantity" id="${kebabOne.id}"> ${item}
  
</div>
<i  class="bi bi-plus-square" onclick="incrementCard('${kebabOne.id}')" ></i>
</div>
}; </div>
<h3>$ ${item * search.price}</h3>
        </div>
      </div>
`;
      })
      .join("");
  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>Cart is Empty</h2>
    <a href="index.html">
      <button class="HomeBtn">Back to home</button>
    </a>
    `;
  }
  //test

  //test
};
generateCartItems();

let removeItem = (id) => {
  let selectedItem = id;
  console.log(id);
  card = card.filter((x) => x.id !== selectedItem);
  generateCartItems();
  TotalAmount();
  calculation();
  localStorage.setItem("data", JSON.stringify(card));
};

let clearCart = () => {
  card = [];
  generateCartItems();
  calculation();
  localStorage.setItem("data", JSON.stringify(card));
};

let TotalAmount = () => {
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
  <h2>Total Bill : $ ${amount}  </h2>
  <button class="checkout">Checkout</button>
  <button onclick ="clearCart()" class="RemoveAll">Clear Cart</button>
  `;
};

TotalAmount();
