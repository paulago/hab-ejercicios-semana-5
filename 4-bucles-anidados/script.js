"use strict";

const catalogo = [
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",
  "tropical",
];

const getPizzaCombinations = (catalogue) => {
  const pizzaCombinations = [];

  for (let i = 0; i < catalogue.length; i++) {
    for (let j = i + 1; j < catalogue.length; j++) {
      pizzaCombinations.push(`${catalogue[i]} y ${catalogue[j]}`);
    }
  }

  return pizzaCombinations;
};

getPizzaCombinations(catalogo);
