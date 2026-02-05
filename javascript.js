//variável
let firstName="John"
let lastName="Doe"

//print
console.log(firstName)
console.log(lastName)

let age=11
console.log(age)

age=5 //não precisa de let para reajustar, apenas para declarar
console.log(age)

const pi=3.14 //const faz a variável ser fixa, não vai mudar
console.log(pi)

console.log((3 + 2) - 76 * (1 + 1))

let variavel=10

if (variavel>=5) { //condições
    console.log("Maior ou igual a 5");
} else {
    console.log("Menor que 5");
}

function favoriteAnimal(animal) { //Função
    return animal + " is my favorite animal!"
}
const message = favoriteAnimal("Goat")
console.log(message)
// console.log(favoriteAnimal("Goat")) --> também funciona, mas não salva como uma variável separada