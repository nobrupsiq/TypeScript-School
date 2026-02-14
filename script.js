"use strict";
// function retorno<variavel>(a: variavel): variavel {
//   return a;
// }
function mostrarTitulo(obj) {
    if ("titulo" in obj) {
        console.log(obj.titulo);
    }
}
mostrarTitulo("string");
