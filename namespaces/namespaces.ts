namespace Geometria {
  export namespace Areas {
    const PI = 3.14;

    function areaCircunferencia(raio: number): number {
      return PI * Math.pow(raio, 2);
    }

    function areaRetangulo(base: number, altura: number): number {
      return base * altura;
    }
  }

}



