// Diferencia entre la creacion de variables

sumar(); // esta no marca error cuando es llamada antes de hacer la funcion
function sumar() {
    console.log(2 + 2);

}


sumar2(); // esta da error cuando es llamada antes de hacer la funcion
const sumar2 = function(){
    console.log(3 + 3 );

}


