const shop = document.getElementById("KebabListFromJavaScript");

let card = JSON.parse(localStorage.getItem("data")) || [];

// kebabPreviev
// kebabPreviev.kebabTitke

const generateKebabOne = (kebabOne) => {
  let search =
    card.find((szukanyKebab) => szukanyKebab.id === kebabOne.id) || [];

  return `<div  class= "Kebab-pizza" id="${kebabOne}"> 
<img src="${kebabOne.img}" alt="Kebabbig" width="310px" height="210px" />
<div class="titke">${kebabOne.titke}</div>
<div class="price">${kebabOne.price}</div>
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
<button class="button-kebab" data-order="kebabbig">Zamów</button>
</div>`;
};

//shop.innerHTML = generateKebabOne(kebabList[1]);
shop.innerHTML += kebabList.map(generateKebabOne).join("");

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

  console.log(card);
  update(clickedId.id);
  card = card.filter((x) => x.item !== 0);
  localStorage.setItem("data", JSON.stringify(card));
};
let update = (id) => {
  let search = card.find((kebabOne) => kebabOne.id === id);
  console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("XD");
  cartIcon.innerHTML = card
    .map((kebabOne) => kebabOne.item)
    .reduce((x, y) => x + y, 0);
};
calculation();
