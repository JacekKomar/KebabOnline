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
<i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
</div>

<div class= "cart-buttons">  <div class="plus-minus-buttons">
<i  class="bi bi-dash-square" onclick="decrement('${kebabOne.id}')" ></i>
<div class="quantity" id="${kebabOne.id}"> ${item}
  
</div>
<i  class="bi bi-plus-square" onclick="increment('${kebabOne.id}')" ></i>
</div>

}; </div>
<h3>$ ${item * search.price}</h3>



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

let increment = (clickedId) => {
  const findElement = (kebabOne) => kebabOne.id === clickedId;

  let search = card.find(findElement);

  if (search === undefined) {
    const newElement = {
      id: clickedId,
      item: 1,
    };
    card.push(newElement);
  } else {
    search.item += 1;
  }
  localStorage.setItem("data", JSON.stringify(card));

  console.log(card);
  update(clickedId);
};
let decrement = (clickedId) => {
  let search = card.find((kebabOne) => kebabOne.id === clickedId);

  if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  localStorage.setItem("data", JSON.stringify(card));

  update(clickedId.id);
  // linijka na próbę  poniżej
  card = card.filter((x) => x.item !== 0);

  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = card.find((kebabOne) => kebabOne.id === id);
  console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let removeItem = (id) => {
  let selectedItem = id;
  // console.log(selectedItem.id);
  card = card.filter((x) => x.id !== selectedItem.id);
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(card));
};

let TotalAmount = () => {
  if (card.length !== 0) {
    let amount = card
      .map((x) => {
        let { item, id } = x;
        //jak to dodaje to wywala let search = kebabList.find((y) => y.id === id) || [];
        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    // console.log(amount);
    label.innerHTML = `
    <h2>Total Bill : $ ${amount} </h2>
   
   `;
  } else return;
};

TotalAmount();
