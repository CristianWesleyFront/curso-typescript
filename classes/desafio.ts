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
  constructor(public nome: string, public velocidade: number = 0) { }

  public buzinar(): void {
    console.log('Toooooooooot!');
  }

  public acelerar(delta: number): void {
    this.velocidade = this.velocidade + delta;
  }
}

const moto = new Moto('Ducati');
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)



// Exercício 2 - Herança

abstract class Objeto2D {
  constructor(public base: number = 0, public altura: number = 0) { }

  abstract area(): number
}

class Retangulo extends Objeto2D {
  public area(): number {
    return this.base * this.altura;
  }
}

var retangulo = new Retangulo(5, 7);
console.log(retangulo.area())

// Exercício 3 - Getters & Setters

class Estagiario {

  constructor(private _primeiroNome: string = '') { }

  get primeiroNome(): string {
    return this._primeiroNome;
  }

  set primeiroNome(valor: string) {
    if (valor.length >= 3) {
      this._primeiroNome = valor
    } else {
      this._primeiroNome = ''
    }
  }
}

const estagiario = new Estagiario('sla man')

console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)