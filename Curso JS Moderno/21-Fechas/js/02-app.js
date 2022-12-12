const diaHoy = new Date();

// Idioma en el cual lo queremos
moment.locale('es');

// Poner el formato que Tu deseas.
console.log(moment().format('MMMM Do YYYY h:mm:ss a'))