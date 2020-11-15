class Data {
  dia: number;
  mes: number;
  ano: number;

  constructor(dia: number, mes: number, ano: number) {
    this.dia = dia
    this.mes = mes
    this.ano = ano
  }
}



class Produto {
  constructor(public nome: string, public preco: number, public desconto: number = 0) { }

  public precoComDesconto(): number {
    return this.preco * (1 - this.desconto);
  }

  public resumo(): string {
    return `${this.nome} custa R$ ${this.precoComDesconto()} (${this.desconto * 100} %)`
  }
}

const produto01 = new Produto('sla1', 10);

const produto02 = new Produto('sla2', 11, 0.2);

console.log(produto02.resumo())


class Carro {
  private velocidadeAtual: number = 0;

  constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200) { }

  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;

    if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
      this.velocidadeAtual = novaVelocidade
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }

    return this.velocidadeAtual;
  }

  public acelerar(): number {
    return this.alterarVelocidade(5);
  }

  public frear(): number {
    return this.alterarVelocidade(-5)
  }
}

const carro01 = new Carro('ford', 'ka', 185);

Array(50).fill(0).forEach(() => {
  carro01.acelerar();
})

class Ferrari extends Carro {

  constructor(modelo: string, velocidadeMaxima: number) {
    super('Ferrari', modelo, velocidadeMaxima)
  }

  public acelerar(): number {
    return this.alterarVelocidade(20);
  }

  public frear(): number {
    return this.alterarVelocidade(-15)
  }
}


class Pessoa {
  private _idade: number = 0;

  get idade(): number {
    return this._idade;
  }

  set idade(valor: number) {
    if (valor >= 0 && valor <= 120) {
      this._idade = valor;
    }
  }
}

const pessoa1 = new Pessoa;

pessoa1.idade = 10;

console.log(pessoa1.idade)

class Matematica {
  static PI: number = 3.1416;

  static areaCirc(raio: number): number {
    return this.PI * raio * raio
  }
}

console.log(Matematica.areaCirc(4));


abstract class Calculo {
  protected resultado: number = 0;

  abstract executar(...numeros: number[]): void

  getResultado(): number {
    return this.resultado
  }
}

class Soma extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t + a);
  }
}