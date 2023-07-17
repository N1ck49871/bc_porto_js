const nums = [6, 9, 0, 3, 8, 1, 4, 2, 5, 7, 7]
console.log(nums)

nums.push(4)
console.log(nums)

nums.unshift(9)
console.log(nums)

nums.pop()
console.log(nums)

nums.shift()
console.log(nums)

let juncao = nums.join(", ")
console.log(juncao)

let vetor2 = [5, 6, 7]
let vetor3 = nums.concat(vetor2)
console.log(vetor3)

// nums.push(100, 101, 110, 1000)
const nomes = ["Beatriz", "Diego", "Adriano", "Gustavo", "Vitor", "Aline"]
console.log(nomes.sort())

console.log(nums.reverse())

console.log(nums.includes(10))

console.log(nums.fill(9, 5))
console.log(nums.fill(7, 2, 4))

console.log(nums.indexOf(3))

console.log(nums)
console.log(nums.splice(6, 3))
console.log(nums)

console.log(nums.slice(2, 5))

nums.forEach((num) => console.log(num))

// reduce -> efetuar a reducao dos valores do vetor em um valor acumulativo
console.log("------------")
console.log(nums.reduce((acumulador = 0, num) => (acumulador - num), 0))

console.log(nums.map(num => num*2))

console.log(nums.find(num => (num > 8)))

console.log(nums.filter(num => (num % 2 == 0)))

console.log(names.find(nome => nome.includes("Rocha")))
