function mostrarNome () {
    let nome = prompt('Digite seu nome: ')
    alert('Bem vindo ' + nome);
}

mostrarNome();


let n1 = Number(prompt('Digite o primeiro valor'));
let n2 = Number(prompt ('Digite o segundo valor'));

function somar () {
    alert('Função soma chamada, a soma entre ' + n1 + " e " + n2 + " é: " + (n1+n2));
}

function subtrair () {
    alert('Função subtrair chamada, a diferença entre ' + n1 + " e " + n2 + " é: " + (n1-n2));
}

function dividir () {
    alert('Função dividir chamada, a divisão entre ' + n1 + " e " + n2 + " é: " + (n1/n2));
}

function multiplicar () {
    alert('Função multiplicar chamada, amultiplicação entre ' + n1 + " e " + n2 + " é: " + (n1*n2));
}

somar();
dividir();
multiplicar();
subtrair();