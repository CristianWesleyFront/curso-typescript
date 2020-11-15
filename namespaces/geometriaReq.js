"use strict";
var Geometria;
(function (Geometria) {
    let Areas;
    (function (Areas) {
        function areaRetangulo(base, altura) {
            return base * altura;
        }
        Areas.areaRetangulo = areaRetangulo;
    })(Areas = Geometria.Areas || (Geometria.Areas = {}));
})(Geometria || (Geometria = {}));
