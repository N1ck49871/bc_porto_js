/*
// quantidade determinada de repetições
for(inicializacao; codicao; incrementacao){
  // codigo a ser repetido
}

// quantidade indeterminanda
while(condicao verdadeira){
  // repeticao
}
*/
// let linha = ""
// let lado = 1
// let h = 10
// for (let i = 0; i < h; i++) {
//   for (let j = 0; j < lado; j++) {
//     linha += "* "
//   }
//   console.log(linha)
// }
// triangulo isóceles
let caractere = "*"
let altura = 10

for (let i = 1; i <= altura; i++) {
  let linha = ""
  for (let j = 1; j <= altura - i; j++) {
    linha += " "
  }
  for (let k = 1; k <= i * 2 - 1; k++) {
    linha += caractere
  }
  console.log(linha)
}

// break e continue
for (i = 1; i <= 20; i++) {
  if (!(i % 2 == 0)) {
    continue
  }
  console.log(i)
}
//atividade 1
for (let i = 1; i <= 20; i++) {
  console.log(i)
}
//atividade 2
let termoAnterior = 0
let termoAtual = 1

console.log(termoAnterior)

let i = 1
while (i < 10) {
  console.log(termoAtual)
  let proximoTermo = termoAnterior + termoAtual
  termoAnterior = termoAtual
  termoAtual = proximoTermo
  i++
}
//atividade 3
let numero = 15
let soma = 0
for(let i = 1; i <= numero; i++){
  if(i %2 != 0){
    soma += i;
  }
}
console.log("A soma dos numeros impares ate " + numero + " é " + soma)
//atividade 4
for (i = 0; i <= 10; i++) {
  let = numero = 2
  console.log(numero + i)
}
//atividade 5
for (i = 1; i <= 100; i++) {
  if (!(i % 7 == 0)) {
    continue
  }
  console.log(i)
}
//atividade 6
let linha = ""
let lado = 1
let h = 10
for (let i = 0; i < h; i++) {
  for (let j = 0; j < lado; j++) {
    linha += "* "
  }
  console.log(linha)
}
