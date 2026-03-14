let termos = Number(prompt("Digite a quantidade de termos:"));

let numero = "";
let soma = 0;
let expressao = "";

for (let i = 1; i <= termos; i++) {
    numero += "1";
    let valor = Number(numero);

    soma += valor;

    expressao += valor;
    if (i < termos) {
        expressao += " + ";
    }
}

console.log(expressao);
console.log("A soma é:", soma);