const Arquero = require(`./Arquero`); 
const Defensor = require(`./Defensor`);
const Delantero = require("./Delantero");

const j1 = new Arquero("Franco", "Armani", 28, "Argentina", 1, 0, 7);
console.info(j1.presentarse());
console.info(j1.calcularPts());

const j2 = new Defensor("Javier", "Pinola", 33, "Argentina", 6, 1, 5, 4);
console.info(j2.presentarse());
console.info(j2.calcularPts());

const j3 = new Delantero("Rafael", "Borré", 24, "Colombia", 9, 2, 8, 5);
console.info(j3.presentarse());
console.info(j3.calcularPts());
console.info(j3.golesPartido()); 