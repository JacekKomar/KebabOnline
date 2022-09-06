const shop = document.getElementById("KebabListFromJavaScript");

console.log(kebabList);

// kebabPreviev
// kebabPreviev.kebabTitke
const generateKebabOne = (kebabOne) => {
  return `   <div class="Kebab-pizza" id="kebab-pizza">
<img src="${kebabOne.img}" alt="Kebabbig" width="310px" height="210px" />
<div class="titke">${kebabOne.titke}</div>
<div class="price">${kebabOne.price}</div>
<p class="desc">
  ${kebabOne.desc}
  </p>

<button class="button-kebab" data-order="kebabbig">Zamów</button>
</div>`;
};

//shop.innerHTML = generateKebabOne(kebabList[1]);
shop.innerHTML += kebabList.map(generateKebabOne).join("");

//czystki niepotrzebnych rzeczy np jacko show 1 , showJackoJeden, consol log wszystkie wywaic,
// sprawdzic database - tam jest komentarz co zrobic
