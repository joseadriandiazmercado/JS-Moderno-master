const diaHoy = new Date();

let valor;

valor = diaHoy;

// obtener el año actual
valor = diaHoy.getFullYear();
// Obtener el mes actual
// tomar en cuenta que enero comienza con valor de 0
valor = diaHoy.getMonth();
//Obtener los minutos de la hora actual 
valor = diaHoy.getMinutes();

console.log(valor);