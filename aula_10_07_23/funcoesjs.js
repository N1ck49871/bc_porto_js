// Função ou function -> Rotina

/**Exemplo de rotina 
const num = 3;
const num2 = 6;
const soma = num + num2;
console.log(soma);
*/

/**
let num1 = 4;
let num2 = 5;
function multiplicar() {
    console.log("O primeiro numero é " + num1);
    console.log("O segundo numero é " + num2);
    console.log("O produto é " + (num1 * num2));
}
multiplicar(); //chamada da função
*/

/** Funções ja prontas do JS */
//Biblioteca Number
const num = 12.4
console.log("Hello") //1º função log, para imprimir na saída/terminal
let result = isNaN(num) // 2º função, is not a number, retorna um booleano
console.log(result) // no result armazena o valor retornado pela função (true ou false)

result = console.log("Oi") //tentativa de armazenar um valor do metodo log
console.log(result) //console.log não retorna nada, por isso fica indefinido

result = isFinite(num) //retorna um booleano, se o num é finito
console.log(result)

result = parseInt(num) // retorna um numero, converte de float para int
console.log(result)

result = parseFloat(12) // retorna um numero, converte de int para float
console.log(result)

result = Number.isInteger(parseFloat(12)) //chamada de função dentro de outra função, aqui a uma contradição, pois o numero dentro da função parseFloat foi transformado em float, logo era pra ser retornado false, mas retorna true. Possível usar o Number antes da chamada.
console.log(result)

let numero = 22.564
console.log(numero.toFixed(2)) //retorna uma STRING do numero com apenas duas casas decimais
console.log(numero.toFixed(1))

console.log(numero.toPrecision(3)) //retorna uma STRING, com precisao, do numero com a quantidade de digitos selecionada
