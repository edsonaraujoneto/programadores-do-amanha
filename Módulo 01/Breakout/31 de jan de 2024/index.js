
let num1 = parseInt(prompt('Digite o primeiro numero'));
let num2 = parseInt(prompt('Digite o segundo numero'));

somar(num1,num2)
subtrair(num1,num2)
multiplicar(num1,num2)
dividir(num1,num2)

function somar (numero1, numero2) {
     document.write('A soma é: ' , (numero1 + numero2) , "<br>")
}

 function subtrair(numero1, numero2) {
     document.write('A subtração é: ' , (numero1 - numero2) , '<br>')
 }
function multiplicar (numero1, numero2) {
     document.write('A multiplicação é: ' , (numero1 * numero2) , '<br>')
 }

 function dividir (numero1, numero2) {
    document.write('A divisão é: ' , (numero1 / numero2) , '<br>')
}