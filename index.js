let calculation = () => {
  let cartIcon = document.getElementById("XD");
  cartIcon.innerHTML = getCard()
    .map((kebabOne) => kebabOne.item)
    .reduce((x, y) => x + y, 0);
};
