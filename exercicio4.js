let linhas = Number(prompt("Digite o número de linhas:"));

for (let i = 1; i <= linhas; i++) {
    let estrela = "";

    for (let j = 1; j <= i; j++) {
        estrela += "*";
    }

    console.log(estrela);
}