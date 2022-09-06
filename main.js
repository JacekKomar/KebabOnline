const shop = document.getElementById("KebabListFromJavaScript");

let card = [];

console.log(kebabList);

// kebabPreviev
// kebabPreviev.kebabTitke
const generateKebabOne = (kebabOne) => {
  return `<div  class= "Kebab-pizza" id="${kebabOne.id}"> 
<img src="${kebabOne.img}" alt="Kebabbig" width="310px" height="210px" />
<div class="titke">${kebabOne.titke}</div>
<div class="price">${kebabOne.price}</div>
<p class="desc">
  ${kebabOne.desc}
  </p>
  <div class="plus-minus-buttons">
  <i  class="bi bi-dash-square" onclick="decrement('${kebabOne.id}')" ></i>
  <div class="quantity" id="${kebabOne.id}">0</div>
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

  console.log(card);
};
let decrement = (clickedId) => {
  let search = card.find((kebabOne) => kebabOne.id === clickedId);

  if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  console.log(card);
};
let update = () => {};
