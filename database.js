const kebabList = [
  {
    id: "KebabPizza",
    img: "imagies/foods/kebab_pizza.jpg",
    titke: "Kebab pizza",
    category: "food",
    price: 39.99,
    desc: `Pizza z mięsem Kebab <br> sos: ostry/łagodny <br>mięso: baranina/kurczak`,
  },
  {
    id: "Kebabbig",
    img: "imagies/foods/Kebabbig.jpg",
    titke: "Kebab olbrzym",
    category: "food",
    price: 30.33,
    desc: `długość: 50cm <br> sos: ostry/łagodny <br> mięso: baranina/kurczak </p>`,
  },
  {
    id: "Kebab rollo",
    img: "imagies/foods/kebab_rollo.jpeg",
    titke: "Kebab rollo",
    category: "food",
    price: 9.99,
    desc: `długość: 20 cm <br> sos: ostry/łagodny<br> mięso: baranina/kurczak <br>`,
  },
  {
    id: "Kebab on the plate",
    img: "imagies/foods/kebab_on_the plate.png",
    titke: "Kebab na talerzu",
    category: "food",
    price: 19.99,
    desc: `duża ilość warzyw <br> sos: ostry/łagodny <br> mięso: baranina/kurczak`,
  },
  {
    id: "Kebab in roll",
    img: "imagies/foods/kebab_butter.jpg",
    titke: "Kebab w bułce",
    category: "food",
    price: 19.99,
    desc: `pieczywo: jasne/ciemne <br> sos: ostry/łagodny <br> mięso: baranina/kurczak`,
  },
  {
    id: "kebab burger",
    img: "imagies/foods/kebab_burger.jpg",
    titke: "kebab burger",
    category: "food",
    price: 25.5,
    desc: `pieczywo: jasne/ciemne <br> sos: ostry/łagodny <br> mięso: baranina/kurczak`,
  },
  {
    id: "box 1",
    img: "imagies/foods/box_1.jpg",
    titke: "Kebab box duży",
    category: "food",
    price: 15.7,
    desc: `sos: czosnkowy/miodowy <br> sos w pojemniczku <br> mięso: baranina/kurczak`,
  },
  {
    id: "box 2",
    img: "imagies/foods/box_2.jpg",
    titke: "Kebab box mały",
    category: "food",
    price: 9.99,
    desc: `sos: czosnkowy/miodowy <br> sos w pojemniczku <br> mięso: baranina/kurczak`,
  },
  {
    id: "chips",
    img: "imagies/foods/chips.png",
    titke: "Frytki",
    category: "food",
    price: 7.99,
    desc: `własnej roboty <br> podane z cebulką <br> sos: keczup/majonez`,
  },

  {
    id: "beer1",
    img: "imagies/drinks/beer_1.jpg",
    titke: "Szlacheckie na miodzie",
    category: "drink",
    price: 10.99,
    desc: `Pojemność - 500 ml <br>
        Zawartość alkoholu - 6,5% <br>
        BLG - 15`,
  },

  {
    id: "beer2",
    img: "imagies/drinks/beer_2.jpg",
    titke: "Polska wolność",
    category: "drink",
    price: 12.5,
    desc: `Pojemność - 500 ml <br>
    Zawartość alkoholu 7% <br>
    BLG - 18`,
  },

  {
    id: "beer7",
    img: "imagies/drinks/beer_3.jpg",
    titke: "Piwo wolnościowe",
    category: "drink",
    price: 9.99,
    desc: `Pojemność - 500 ml <br>
      Zawartość alkoholu - 4% <br>
      BLG - 12`,
  },

  {
    id: "beer4",
    img: "imagies/drinks/beer_4.png",
    titke: "Czarny łabędź",
    category: "drink",
    price: 11.5,
    desc: `Pojemność - 500 ml <br>
      Zawartość alkoholu - 4% <br>
      BLG - 11`,
  },

  {
    id: "beer5",
    img: "imagies/drinks/beer_5.jpg",
    titke: "Filozofia XD",
    category: "drink",
    price: 9.99,
    desc: `Pojemność - 500 ml <br>
      Zawartość alkoholu - 5% <br>
      BLG - 13`,
  },

  {
    id: "beer7",
    img: "imagies/drinks/beer_7.png",
    titke: "Strażnik teksasu",
    category: "drink",
    price: 9.99,
    desc: `Pojemność - 500 ml <br>
      Zawartość alkoholu - 5% <br>
      BLG - 12`,
  },

  {
    id: "beer9",
    img: "imagies/drinks/beer_9.png",
    titke: "Paszport Mentzena",
    category: "drink",
    price: 12.5,
    desc: `Pojemność - 500 ml <br>
      Zawartość alkoholu - 6% <br>
      BLG - 15`,
  },

  {
    id: "beer44",
    img: "imagies/drinks/beer_44.jpg",
    titke: "Inflacja",
    category: "drink",
    price: 13.99,
    desc: `Pojemność - 500 ml <br>
      Zawartość alkoholu - 7,5% <br>
      BLG - 18`,
  },

  {
    id: "water",
    img: "imagies/drinks/water.jpg",
    titke: "Woda Franciszek",
    category: "drink",
    price: 2,
    desc: `Pojemność - 500 ml <br>
      Gazowana <br>
      Zdrowotna`,
  },
];
let card = JSON.parse(localStorage.getItem("data")) || [];
// dokonczyc kebaby powyższe,

const foodList = kebabList.filter((kebab) => kebab.category === "food");
const beerList = kebabList.filter((kebab) => kebab.category === "drink");
