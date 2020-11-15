"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function loggarClass(constructor) {
    console.log(constructor);
}
// Decorator Factory
function decoratorVazio(_) { }
function logarClasseSe(valor) {
    return valor ? loggarClass : decoratorVazio;
}
function decorator(obj) {
    return function (_) {
        console.log(obj);
    };
}
//@decorator({ a: 'sla' })
class genericClass {
    constructor() {
        console.log('class carregada');
    }
}
// function logarObjeto(constructor: Constructor) {
//   return class extends constructor {
//     constructor(...args: any[]) {
//       console.log('Antes ...')
//       super(...args)
//       console.log('Depois ...')
//     }
//   }
// }
// esse decorator retorna class anonima extendida da class escolhida , 
// com modificações a gosto
// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false
};
// function guardian(user:user) {
//   return 
//}
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!');
    }
};
MudancaAdministrativa = __decorate([
    guardian
], MudancaAdministrativa);
new MudancaAdministrativa().critico();
// Notação generics para resolver o problema de quando tem um metdo
function guardian(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            if (usuarioLogado === undefined || usuarioLogado.admin === false) {
                throw new Error("Não autorizado");
            }
        }
    };
}
