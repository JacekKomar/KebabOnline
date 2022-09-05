const shop = document.getElementById("KebabListFromJavaScript");

console.log(kebabList);

const showJackoJeden = (imie, nazwisko, adres) => {
  console.log(imie);
  console.log(nazwisko);
  console.log(adres);
};

showJackoJeden("Krzychu", "Komar", "Wyścigi");
showJackoJeden("Jacek", "Komar", "Jasionka");

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

const dodajPlusika = (tekst) => {
  return "+" + tekst + "+";
};
const tablica = ["Jacek", "Konon", "J00r"].map(dodajPlusika).join(" i ");

console.log(tablica);

//shop.innerHTML = generateKebabOne(kebabList[1]);
shop.innerHTML += kebabList.map(generateKebabOne).join("");
const showKebab = () => {};
