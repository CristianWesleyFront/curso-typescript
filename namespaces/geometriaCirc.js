"use strict";
var Geometria;
(function (Geometria) {
    let Areas;
    (function (Areas) {
        const PI = 3.14;
        function areaCircunferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Areas.areaCircunferencia = areaCircunferencia;
    })(Areas = Geometria.Areas || (Geometria.Areas = {}));
})(Geometria || (Geometria = {}));
