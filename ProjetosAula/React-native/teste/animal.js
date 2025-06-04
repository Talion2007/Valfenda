const prompt = require("prompt-sync")();

console.log("-----------------------------------");
const nome = prompt("Digite seu nome: ");

if (nome == "Giovanna") {
  console.log(`O animal de ${nome} seria uma raposa`);
  console.log("A raposa é conhecida por sua astúcia e inteligência.");
  console.log("-----------------------------------");
} else if (nome == "Felipe") {
  console.log(`O animal de ${nome} seria um lobo`);
  console.log("O lobo é um símbolo de força e lealdade.");
  console.log("-----------------------------------");
} else {
  console.log(`O animal de ${nome} seria um gato`);
  console.log("O gato é chato, e só gosta de você quando está com fome.");
  console.log("-----------------------------------");
}
else {
  console.log("Nome inválido. Por favor, tente novamente.");
  console.log("-----------------------------------");
} 
else if (nome == "Ana") {
  console.log(`O animal de ${nome} seria uma águia`);
  console.log("A águia é um símbolo de liberdade e visão aguçada.");
  console.log("-----------------------------------");
}
else if (nome == "Carlos") {
  console.log(`O animal de ${nome} seria um leão`);
  console.log("O leão é conhecido como o rei da selva, simbolizando coragem e poder.");
  console.log("-----------------------------------");
}