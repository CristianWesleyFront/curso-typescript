"use strict";
function echo(params) {
    return params;
}
// console.log(echo('João').length);
// console.log(echo(52).length);
// console.log(echo({ name: 'João' }).length);
function echoMelhorada(params) {
    return params;
}
// Class com generics 
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
// Diferença de dias 
class DiferençaDias extends OperacaoBinaria {
    executar() {
        const t1 = this.operando1.getTime();
        const t2 = this.operando2.getTime();
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dias`;
    }
}
const dia1 = new Date(2020, 2, 1);
const dia2 = new Date(2020, 5, 2);
//console.log(new DiferençaDias(dia1, dia2).executar())
// Desafio
class Fila {
    constructor(fila) {
        this.fila = fila;
    }
    entrar(novoItem) {
        this.fila.push(novoItem);
    }
    proximo() {
        this.fila.shift();
    }
    imprimir() {
        return this.fila;
    }
}
class FilaDeLivros extends Fila {
}
class Mapa {
    constructor() {
        this.mapList = [];
    }
    colocar(item) {
        const exists = this.mapList.findIndex(e => e.chave === item.chave);
        if (exists > 0) {
            this.mapList[exists].valor = item.valor;
        }
        else {
            this.mapList.push(item);
        }
    }
    obter(id) {
        const item = this.mapList.find(e => e.chave === id);
        return item || 'Item não encontrado';
    }
    limpar() {
        this.mapList = [];
    }
    imprimir() {
        console.log(this.mapList);
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
