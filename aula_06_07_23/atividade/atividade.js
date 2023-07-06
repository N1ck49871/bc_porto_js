// exercicio 1
let numero = -1
if (numero == 0) {
  console.log("o Numero é zero")
} else if (numero < 0) {
  console.log("o Numero é negativo")
} else {
  console.log("o Numero é Positivo")
}
// exercicio 2
let idade = 18
if (idade == 18) {
  console.log("Maior de Idade")
} else {
  console.log("Menor de Idade")
}
// exercicio 3
let num1 = 150,
  num2 = 120,
  num3 = 300
if (num1 == num2 || num2 == num3 || num1 == num3) {
  console.log("Os numeros não podem ser iguais.")
} else if (num1 > num2 && num1 > num3) {
  if (num2 > num3) {
    console.log(num1 + " > " + num2 + " > " + num3) // num1 > num2 > num3
  } else {
    console.log(num1 + " > " + num3 + " > " + num2) // num1 > num3 > num2
  }
} else if (num2 > num1 && num2 > num3) {
  if (num1 > num3) {
    console.log(num2 + " > " + num1 + " > " + num3) // num2 > num1 > num3
  } else {
    console.log(num2 + " > " + num3 + " > " + num1) // num2 > num3 > mum1
  }
} else {
  if (num1 > num2) {
    console.log(num3 + " > " + num1 + " > " + num2) // num3 > num1 > mum2
  } else {
    console.log(num3 + " > " + num2 + " > " + num1) // num3 > num2 > mum1
  }
}
// exercicio 4
let numero1 = 3 , numero2 = 3
let produto = numero1 * numero2
if( produto %2 == 0){
  console.log("o numero eh par")
}else{
  console.log("o numero eh impar")
}
// exercicio 5
let diasemana = "sabado"
if (diasemana == "domingo" || diasemana == "sábado" || diasemana == "sabado") {
  console.log("Final de Semana")
} else if (
  diasemana == "segunda" ||
  diasemana == "segunda-feira" ||
  diasemana == "terca" ||
  diasemana == "terca-feira" ||
  diasemana == "terça" ||
  diasemana == "terça-feira" ||
  diasemana == "quarta" ||
  diasemana == "quarta-feira" ||
  diasemana == "quinta" ||
  diasemana == "quinta-feira" ||
  diasemana == "sexta" ||
  diasemana == "sexta-feira"
) {
  console.log("Dia útil")
} else {
  console.log("Dia Não Reconhecido")
}
// exercicio 6
let dia
dia = 2
switch (dia) {
  case 1:
    console.log("Domingo")
    break
  case 2:
    console.log("Segunda")
    break
  case 3:
    console.log("Terça")
    break
  case 4:
    console.log("Quarta")
    break
  case 5:
    console.log("Quinta")
    break
  case 6:
    console.log("Sexta")
    break
  case 7:
    console.log("Sábado")
    break
}
