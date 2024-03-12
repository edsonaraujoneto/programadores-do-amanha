const somarMedia = function (valor1, valor2, valor3, valor4) {
    alert((valor1 + valor2 + valor3 + valor4) / 4)
}

function media(funcaoParaSomar) {
    let nota1 = Number(prompt("Digite a sua nota 1:"))
    let nota2 = Number(prompt("Digite a sua nota 2:"))
    let nota3 = Number(prompt("Digite a sua nota 3:"))
    let nota4 = Number(prompt("Digite a sua nota 4:"))
    funcaoParaSomar(nota1, nota2, nota3, nota4)
}

media(somarMedia)

/* Temos uma função dentro de uma variavel constante chamada somarMedia, que recebe quatro
valores, e da um alert da média desses valores.

chamamos a função media, passando como parâmetro a função somarMedia, no qual através do prompt
digitamos os valores das quatro variáveis e chamamos dentro dela a função passada como parâmetro
que no caso é somarMedia. */