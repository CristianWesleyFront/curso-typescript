interface exemplo {
  nome: string;  // Atributo obrigatorio
  idade?: number; // Atributo opcional
  [prop: string]: any; // Atributo dinamigo
  callback(message: string): void; // Atributo de metodo
  callbackCaetano?(message: string): void; // Atributo de metodo opcional
}



class exemplo01 implements exemplo {
  nome: string = '';
  callback(message: string): string {
    return 'sla;ks'
  }
}


interface FuncaoCalculo {
  (a: number, b: number): number;
}

let potencia: FuncaoCalculo;

potencia = function (base: number, exp: number): number {

  return Array(exp).fill(base).reduce((t, a) => t * a);
}