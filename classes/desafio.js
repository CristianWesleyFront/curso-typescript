"use strict";
// Exercício 1 - Classe
// function Moto(nome) {
//   this.nome = nome
//   this.velocidade = 0
//   this.buzinar = function() {
//       console.log('Toooooooooot!')
//   }
//   this.acelerar= function(delta) {
//       this.velocidade = this.velocidade + delta
//   }
// }
// var moto = new Moto('Ducati')
// moto.buzinar()
// console.log(moto.velocidade)
// moto.acelerar(30)
// console.log(moto.velocidade)
class Moto {
    constructor(nome, velocidade = 0) {
        this.nome = nome;
        this.velocidade = velocidade;
    }
    buzinar() {
        console.log('Toooooooooot!');
    }
    acelerar(delta) {
        this.velocidade = this.velocidade + delta;
    }
}
const moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// Exercício 2 - Herança
class Objeto2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Objeto2D {
    area() {
        return this.base * this.altura;
    }
}
var retangulo = new Retangulo(5, 7);
console.log(retangulo.area());
// Exercício 3 - Getters & Setters
class Estagiario {
    constructor(_primeiroNome = '') {
        this._primeiroNome = _primeiroNome;
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = '';
        }
    }
}
const estagiario = new Estagiario('sla man');
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
