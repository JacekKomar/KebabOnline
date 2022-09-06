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
    return (ShoppingCart.innerHTML = card.map((kebabOne) => {
      console.log(kebabOne);
      let { id, item } = kebabOne.find((y) => y.id === id) || [];
      let search = kebabList;
      return `
<div class="cart-item">
<img scr=${search.img} alt=""/>

</div>
`;
    }));
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
