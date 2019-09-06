const { poids } = require("physics");

console.log(`un cyclindre ⌀6cmx10cm d'eau pèse: ${poids(6e-2/2,10e-2,'eau')} Newton`)
console.log(`un cyclindre ⌀6cmx10cm d'essence pèse: ${poids(6e-2/2,10e-2,'essence')} Newton`)