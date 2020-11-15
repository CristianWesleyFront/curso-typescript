function echo(params: any) {
  return params;
}

// console.log(echo('João').length);
// console.log(echo(52).length);
// console.log(echo({ name: 'João' }).length);


function echoMelhorada<T>(params: T): T {
  return params;
}


// console.log(echoMelhorada('João').length);
// console.log(echoMelhorada<string>('52').length);
// console.log(echoMelhorada({ name: 'João' }));


// tipo Genérico 
type Echo = <T>(data: T) => T


// Class com generics 

abstract class OperacaoBinaria<T, R> {
  constructor(public operando1: T, public operando2: T) { }

  abstract executar(): R
}

class SomaBinaria extends OperacaoBinaria<number, number> {
  executar(): number {
    return this.operando1 + this.operando2;
  }
}


// Diferença de dias 

class DiferençaDias extends OperacaoBinaria<Date, string> {

  executar(): string {
    const t1 = this.operando1.getTime();
    const t2 = this.operando2.getTime();
    const diferenca = Math.abs(t1 - t2);
    const dia = 1000 * 60 * 60 * 24
    return `${Math.ceil(diferenca / dia)} dias`

  }
}

const dia1 = new Date(2020, 2, 1);
const dia2 = new Date(2020, 5, 2)

//console.log(new DiferençaDias(dia1, dia2).executar())

// Desafio
class Fila<T> {
  constructor(public fila: T[]) { }

  entrar(novoItem: T): void {
    this.fila.push(novoItem);
  }

  proximo(): void {
    this.fila.shift();
  }

  imprimir(): T[] {
    return this.fila;
  }

}

class FilaDeLivros extends Fila<string> {

}

// const novaFila = new FilaDeLivros(['marcia'])

// novaFila.entrar('joao')
// novaFila.entrar('guilherme')

// console.log(novaFila.imprimir())

// novaFila.proximo()

// console.log(novaFila.imprimir())



// Desafio modulo

interface objeto<A, B> {
  chave: A;
  valor: B;
}

class Mapa<T, R> {

  private mapList: objeto<T, R>[]

  constructor() {
    this.mapList = []
  }

  colocar(item: objeto<T, R>): void {
    const exists = this.mapList.findIndex(e => e.chave === item.chave)

    if (exists > 0) {
      this.mapList[exists].valor = item.valor;
    } else {
      this.mapList.push(item)
    }
  }

  obter(id: T): objeto<T, R> | string {

    const item = this.mapList.find(e => e.chave === id)

    return item || 'Item não encontrado'
  }

  limpar(): void {
    this.mapList = []
  }

  imprimir(): void {
    console.log(this.mapList);
  }

}


const mapa = new Mapa<number, string>();

mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })

console.log(mapa.obter(2));
mapa.imprimir()
mapa.limpar()
mapa.imprimir()