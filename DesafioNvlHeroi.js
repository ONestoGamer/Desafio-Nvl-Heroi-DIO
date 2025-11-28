// Desafio Classificador de Nível de Herói

// **O Que deve ser utilizado**
// - variáveis
// - estruturas de decisões (if, else if, else)
// - operadores  
// - laços de repetição (for, while)

// Objetivo:
//  Criar uma variavel para armazenar o nome e a quantidade de experiencia(XP) de um heroi
// depis ultilzar uma esttrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP foorm menor que 1000 = Ferro
// Se XP for entre 1001 e 2000 = Bronze
// Se XP for entre 2001 e 5000 = Prata
// Se XP for entre 5001 e 7000 = Ouro
// Se XP for entre 7001 e 8000 = Platina
// Se XP for entre 8001 e 9000 = Ascendente
// Se XP for entre 9001 e 10000 = Imortal
// Se XP for maior que 10000 = Radiante

// Saída esperada:
// "O herói de nome [NOME_DO_HEROI] está no nível [NIVEL_DO_HEROI]"

let nomeDoHeroi = "Artemis";
let experiencia = 7500;
let nivelDoHeroi = "";

if (experiencia < 1000) {
    nivelDoHeroi = "Ferro";
}
else if (experiencia >= 1001 && experiencia <= 2000) {
    nivelDoHeroi = "Bronze";
}
else if (experiencia >= 2001 && experiencia <= 5000) {
    nivelDoHeroi = "Prata";
}
else if (experiencia >= 5001 && experiencia <= 7000) {
    nivelDoHeroi = "Ouro";
}
else if (experiencia >= 7001 && experiencia <= 8000) {
    nivelDoHeroi = "Platina";
}
else if (experiencia >= 8001 && experiencia <= 9000) {
    nivelDoHeroi = "Ascendente";
}
else if (experiencia >= 9001 && experiencia <= 10000) {
    nivelDoHeroi = "Imortal";
}
else {
    nivelDoHeroi = "Radiante";
} 
console.log(`O herói de nome ${nomeDoHeroi} está no nível ${nivelDoHeroi}`);
