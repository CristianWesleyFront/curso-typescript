

function loggarClass(constructor: Function) {
  console.log(constructor);
}


// Decorator Factory

function decoratorVazio(_: Function) { }

function logarClasseSe(valor: boolean) {
  return valor ? loggarClass : decoratorVazio;
}


function decorator(obj: { a: string, b?: number }) {
  return function (_: Function) {
    console.log(obj)
  }
}





//@decorator({ a: 'sla' })
class genericClass {
  constructor() {
    console.log('class carregada')
  }
}

// Construtor mais generito possibel 
type Constructor = { new(...args: any[]): {} }

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
}

//type Constructor = { new(...args: any[]): {} }

type user = {
  nome: string;
  email: string;
  admin: boolean;
}

// function guardian(user:user) {
//   return 


//}

@guardian
class MudancaAdministrativa {
  critico() {
    console.log('Algo crítico foi alterado!')
  }
}

new MudancaAdministrativa().critico()
// Notação generics para resolver o problema de quando tem um metdo
function guardian<T extends Constructor>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {


      super(...args)


      if (usuarioLogado === undefined || usuarioLogado.admin === false) {
        throw new Error("Não autorizado");
      }
    }
  }
}