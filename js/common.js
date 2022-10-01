export const getCard = () => {
  return JSON.parse(localStorage.getItem("data")) || [];
};

export let update = (card, id) => {
  let search = card.find((kebabOne) => kebabOne.id === id);

  if (!search) {
    return;
  }
  document.getElementById(id).innerHTML = search.item;
  calculation(getCard());
};

export let calculation = (newCard) => {
  let cartIcon = document.getElementById("XD");
  cartIcon.innerHTML = newCard
    .map((kebabOne) => kebabOne.item)
    .reduce((x, y) => x + y, 0);
};

export let increment = (clickedId) => {
  console.log(clickedId);
  const findElement = (kebabOne) => kebabOne.id === clickedId;

  const card = getCard();
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
  update(card, clickedId);
  return card;
};
export let decrement = (clickedId) => {
  console.log(clickedId);
  const card = getCard();
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
  update(card, clickedId);
  const cardFiltered = card.filter((x) => x.item !== 0);
  localStorage.setItem("data", JSON.stringify(cardFiltered));
  return cardFiltered;
};

window.increment = increment;
window.decrement = decrement;

export const getTotalAmountAsNumber = (card, kebabList) => {
  let amount = card
    .map((x) => {
      let { item, id } = x;
      let search = kebabList.find((y) => y.id === id) || {}; //jak to dodaje to wywala
      return item * search.price;
    })
    .reduce((x, y) => x + y, 0);

  return amount;
};

export const parseZlotowki = (floatNumber) => {
  return parseFloat(floatNumber).toFixed(2);
};
