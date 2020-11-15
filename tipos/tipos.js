"use strict";
// String
let nome = "João";
console.log(nome);
// Numbers
let numero = 29;
console.log(numero);
// Boolean
let slaboolean = false;
console.log(slaboolean);
// tipos explícitos
let slaAny;
slaAny = "sla";
slaAny = 21;
console.log(slaAny);
// Array
let hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
// Tuplas
let endereco = ["Av Principal", 99];
console.log(endereco);
// Enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
// Any
let carro = "BMW";
console.log(carro);
carro = { tipo: "sla" };
console.log(carro);
// função
function returnName() {
    return nome;
}
function returnNada() {
    console.log(nome);
}
function multiplicar(number1, number2) {
    return number1 * number2;
}
console.log(multiplicar(1, 2));
// Tipo função;
let calculo;
calculo = multiplicar;
console.log(calculo(2, 3));
// Objetos
let usuario;
usuario = {
    nome: "joao",
    idade: 28,
};
usuario = {
    idade: 31,
    nome: "maria",
};
console.log(usuario);
//  Exercicio
function baterPonto(hora) {
    if (hora <= 8) {
        return "Ponto normal";
    }
    else {
        return "Fora do horário";
    }
}
let funcionario;
funcionario = {
    supervisores: ["sla", "sla2"],
    baterPonto: baterPonto,
};
console.log(funcionario);
console.log(funcionario.baterPonto(8));
// Union Types
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = "10";
console.log(`Minha nota é ${nota}!`);
// Never
function falha(msg) {
    throw new Error(msg);
}
function loopInfinito() {
    while (true) { }
}
const produto = {
    nome: "Sabão",
    preco: -1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length === 0) {
            falha("Precisa ther um nome");
        }
        if (this.preco <= 0) {
            falha("Preco invalido!");
        }
    },
};
const contato1 = {
    nome: "sla",
    tel1: "sla",
    tel2: null,
};
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    },
};
let correntista = {
    nome: "Ana Silva",
    contaBancaria: contaBancaria,
    contatos: ["34567890", "98765432"],
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
