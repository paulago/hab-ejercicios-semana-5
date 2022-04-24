"use strict";

const names = [
  "A-Jay",
  "Manuel",
  "Manuel",
  "Eddie",
  "A-Jay",
  "Su",
  "Reean",
  "Manuel",
  "A-Jay",
  "Zacharie",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];

// El objeto Set permite almacenar valores únicos de cualquier tipo.
const unduplicatedList = (arr) => {
  return [...new Set(arr)];
};

console.log(unduplicatedList(names));
