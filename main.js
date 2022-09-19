const shop = document.getElementById("KebabListFromJavaScript");

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
shop.innerHTML += foodList.map(generateKebabOne).join("");

calculation();
