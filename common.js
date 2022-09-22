import { card } from "./database.js";

export let update = (id) => {
  let search = card.find((kebabOne) => kebabOne.id === id);

  if (!search) {
    return;
  }
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

export let calculation = () => {
  let cartIcon = document.getElementById("XD");
  cartIcon.innerHTML = card
    .map((kebabOne) => kebabOne.item)
    .reduce((x, y) => x + y, 0);
};

export let increment = (clickedId) => {
  console.log(clickedId);
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
export let decrement = (clickedId) => {
  console.log(clickedId);
  let search = card.find((kebabOne) => kebabOne.id === clickedId);

  if (!search) {
    return;
  }
  if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  localStorage.setItem("data", JSON.stringify(card));

  console.log(card);
  update(clickedId);
  const cardFiltered = card.filter((x) => x.item !== 0);
  localStorage.setItem("data", JSON.stringify(cardFiltered));
  return cardFiltered;
};

window.increment = increment;
window.decrement = decrement;
