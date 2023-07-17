
const vetor1 = [1, 3, 5, 7, 9] //unidimensional
const vetor2 = [2, 4, 6, 8, 0]
const vetor3 = [2, 4, 6, 8, 0]
const vetor4 = [2, 4, 6, 8, 0]

const matriz = [vetor1, vetor2] //bidimensional
const matriz2 = [vetor3, vetor4]

// console.log(vetor1[0])
// console.log(matriz[0][0])

const matriz3d = [matriz, matriz2] //tridimensional


for(let x = 0; x < matriz3d.length; x++){
  for(let y = 0; y < matriz3d[x].length; y++){
    for(let z = 0; z < matriz3d[x][y].length; z++){
      console.log(matriz3d[x][y][z])
    }
  }
}