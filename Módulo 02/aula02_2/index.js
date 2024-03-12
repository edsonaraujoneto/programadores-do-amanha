const div = document.getElementById('resultado');

function calculadora() {
    const number01 = document.getElementById('number01').value;
    const number02 = document.getElementById('number02').value;
    const operacao = document.getElementById('operacao');
    switch (operacao.value) {
        case '+':
            div.innerHTML = `O resultado é: ${Number(number01) + Number(number02)}`
            break;
        case '-':
            div.innerHTML = `O resultado é: ${Number(number01) - Number(number02)}`
            break;
        case '*':
            div.innerHTML = `O resultado é: ${Number(number01) * Number(number02)}`
            console.log("funcionou multi")
            break;
        case '/':
            div.innerHTML = `O resultado é: ${Number(number01) / Number(number02)}`
            console.log("funcionou dividir")
            break;
    }

}


