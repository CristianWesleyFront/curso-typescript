// String

let nome = "João";

console.log(nome);

// Numbers

let numero: number = 29;

console.log(numero);

// Boolean

let slaboolean: boolean = false;

console.log(slaboolean);

// tipos explícitos

let slaAny;
slaAny = "sla";
slaAny = 21;

console.log(slaAny);

// Array

let hobbies: any[] = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100];

// Tuplas
let endereco: [string, number] = ["Av Principal", 99];
console.log(endereco);

// Enums

enum Cor {
  Cinza, // 0
  Verde, // 1
  Azul, // 2
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);

// Any

let carro: any = "BMW";
console.log(carro);
carro = { tipo: "sla" };
console.log(carro);

// função

function returnName() {
  return nome;
}

function returnNada(): void {
  console.log(nome);
}

function multiplicar(number1: number, number2: number) {
  return number1 * number2;
}

console.log(multiplicar(1, 2));

// Tipo função;
let calculo: (numeroA: number, numeroB: number) => number;

calculo = multiplicar;

console.log(calculo(2, 3));

// Objetos
let usuario: { nome: string; idade: number };

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

function baterPonto(hora: number): string {
  if (hora <= 8) {
    return "Ponto normal";
  } else {
    return "Fora do horário";
  }
}

// Alias
type Functionario = {
  supervisores: string[];
  baterPonto: (numeroA: number) => string;
};

let funcionario: Functionario;

funcionario = {
  supervisores: ["sla", "sla2"],
  baterPonto: baterPonto,
};

console.log(funcionario);

console.log(funcionario.baterPonto(8));

// Union Types
let nota: number | string = 10;
console.log(`Minha nota é ${nota}!`);

nota = "10";
console.log(`Minha nota é ${nota}!`);

// Never
function falha(msg: string): never {
  throw new Error(msg);
}

function loopInfinito(): never {
  while (true) {}
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

// null

type Contato = {
  nome: string;
  tel1: string;
  tel2: string | null;
};

const contato1: Contato = {
  nome: "sla",
  tel1: "sla",
  tel2: null,
};

// Exercicio 2

type ContaBancaria = {
  saldo: number;
  depositar: (valor: number) => void;
};

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor) {
    this.saldo += valor;
  },
};

type Correntista = {
  nome: string;
  contaBancaria: ContaBancaria;
  contatos: string[];
};

let correntista: Correntista = {
  nome: "Ana Silva",
  contaBancaria: contaBancaria,
  contatos: ["34567890", "98765432"],
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);
