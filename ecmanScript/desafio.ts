// Exercicio 1
// var dobro = function (valor: number) {
//   return valor * 2
// }

const dobro = (valor: number): number => valor * 2;

console.log(dobro(10))

// Exercicio 2

const dizerOla = (nome: string = "Pessoa"): void => {
  console.log("Ola, " + nome)
}

dizerOla()
dizerOla("Anna")

// Exercicio 3
const nums = [-3, 33, 38, 5]
console.log(Math.min(...nums))

// Exercicio 4
const array = [55, 20, ...nums]

console.log(array)

// Exercicio 5
const notas = [8.5, 6.3, 9.4]

console.log(...notas)

// Exercicio 6
const cientista = { primeiroNome: "Will", experiencia: 12 }
const { primeiroNome, experiencia } = cientista;

console.log(primeiroNome, experiencia)