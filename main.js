const shop = document.getElementById("KebabListFromJavaScript");

console.log(kebabList);

// kebabPreviev
// kebabPreviev.kebabTitke
const generateKebabOne = (kebabOne) => {
  return `   <div class= "Kebab-pizza" id="kebab-pizza">
<img src="${kebabOne.img}" alt="Kebabbig" width="310px" height="210px" />
<div class="titke">${kebabOne.titke}</div>
<div class="price">${kebabOne.price}</div>
<p class="desc">
  ${kebabOne.desc}
  </p>
  <div class="plus-minus-buttons">
  <i onclick="decrement" class="bi bi-dash-square"></i>
  <div  class="quantity">0</div>
  <i onclick="increment" class="bi bi-plus-square"></i>
</div>
<button class="button-kebab" data-order="kebabbig">Zamów</button>
</div>`;
};

//shop.innerHTML = generateKebabOne(kebabList[1]);
shop.innerHTML += kebabList.map(generateKebabOne).join("");

// nie da się dodac id do powyzej

let increment = () => {};
