// atividade 1
let nummin = 10
let nummax = 20

aleatorio = Math.floor(Math.random() * (nummax - nummin + 1) + nummin);

console.log(aleatorio)
// atividade 2
let numero = Infinity

if(isNaN(numero)){
  console.log("O numero " + numero + " é um NaN")
}else{
  if(isFinite(numero)){
    console.log("O numero " + numero + " é finito")
  }else{
    console.log("O numero " + numero +" é infinito")
  }
}
// atividade 3
let numeroquadrado = 121
let quadrado = Math.sqrt(numeroquadrado)
console.log("A raiz quadrada de " + numeroquadrado + " é igual a " + quadrado)

// atividade 4
let texto = "hoje fui na casa da ana e joguei a tale about my aunt"
let numerodea = 0
for(let i = 0; i < texto.length; i++){

}