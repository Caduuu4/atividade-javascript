let numeroSecreto = Math.floor(Math.random() * 20) + 1;
let palpite;

while (palpite !== numeroSecreto) {
    palpite = Number(prompt("Adivinhe o número entre 1 e 20:"));

    if (palpite > numeroSecreto) {
        console.log("O número secreto é MENOR.");
    } 
    else if (palpite < numeroSecreto) {
        console.log("O número secreto é MAIOR.");
    } 
    else {
        console.log("Parabéns! Você acertou o número:", numeroSecreto);
    }
}