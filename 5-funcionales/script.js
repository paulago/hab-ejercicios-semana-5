"use strict";

// puntuaciones
const puntuaciones = [
  {
    equipo: "Toros Negros",
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: "Amanecer Dorado",
    puntos: [8, 5, 2, 4, 7, 5, 3],
  },
  {
    equipo: "Águilas Plateadas",
    puntos: [5, 8, 3, 2, 5, 3],
  },
  {
    equipo: "Leones Carmesí",
    puntos: [5, 4, 3, 1, 2, 3, 4],
  },
  {
    equipo: "Rosas Azules",
    puntos: [2, 1, 3, 1, 4, 3, 4],
  },
  {
    equipo: "Mantis Verdes",
    puntos: [1, 4, 5, 1, 3],
  },
  {
    equipo: "Ciervos Celestes",
    puntos: [3, 5, 1, 1],
  },
  {
    equipo: "Pavos Reales Coral",
    puntos: [2, 3, 2, 1, 4, 3],
  },
  {
    equipo: "Orcas Moradas",
    puntos: [2, 3, 3, 4],
  },
];

// Map llama a la función callback provista una vez por elemento de un array, en orden, y construye un nuevo array con los resultados.
// El método reduce ejecuta callback una vez por cada elemento presente en el array.
const totalScore = puntuaciones.map((puntuacion) => {
  const totalScoreTeam = puntuacion.puntos.reduce(
    (acc, currentScore) => acc + currentScore
  );
  return { equipo: puntuacion.equipo, puntosTotales: totalScoreTeam };
});

//-1: a se va a situar en un índice menor a b.
//0: no hay cambios.
//1: b se va a situar en un indice menor a a.
const sortedScores = totalScore.sort((a, b) => {
  return a.puntosTotales - b.puntosTotales;
});

const bestScoreTeam = sortedScores[sortedScores.length - 1].equipo;
const worstScoreTeam = sortedScores[0].equipo;
const bestScore = sortedScores[sortedScores.length - 1].puntosTotales;
const worstScore = sortedScores[0].puntosTotales;

console.log(
  `El que más puntos ha conseguido ha sido ${bestScoreTeam} con un total de ${bestScore} puntos`
);
console.log(
  `El que menos puntos ha conseguido ha sido ${worstScoreTeam} con un total de ${worstScore} puntos`
);
