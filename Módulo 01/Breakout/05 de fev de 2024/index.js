
document.write('Imprimindo através do for <br>')
for (let i = 1; i < 11; i++) {
    document.write(i + " ");
}

// Com o for em apenas uma linha você cria toda a sua estrutura, e você não corre
// risco de cair em looping infinito

document.write(' <br> <br> Imprimindo através do while <br>')
let contador = 1;
while (contador < 11) {
    document.write(contador + " ");
    contador++;
}

// corre o risco de ter looping infinito, e você precisa digitar mais.


