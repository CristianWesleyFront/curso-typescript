"use strict";
class exemplo01 {
    constructor() {
        this.nome = '';
    }
    callback(message) {
        return 'sla;ks';
    }
}
let potencia;
potencia = function (base, exp) {
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
