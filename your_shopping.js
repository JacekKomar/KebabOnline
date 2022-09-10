let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

let card = JSON.parse(localStorage.getItem("data")) || [];
console.log(card);

let calculation = () => {
  let cartIcon = document.getElementById("XD");
  cartIcon.innerHTML = card
    .map((kebabOne) => kebabOne.item)
    .reduce((x, y) => x + y, 0);
};
calculation();

let generateCartItems = () => {
  if (card.length !== 0) {
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
<i class="bi bi-x-lg"></i>
</div>

<div class= "cart-buttons"> </div>
<h3></h3>



        </div>
      </div>
`;
      })
      .join("");
  } else {
    ShoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>Cart is Empty</h2>
    <a href="index.html">
      <button class="HomeBtn">Back to home</button>
    </a>
    `;
  }
};
generateCartItems();
