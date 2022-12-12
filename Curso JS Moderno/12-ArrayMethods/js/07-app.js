// .concat

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre','Noviembre', 'Diciembre'];


// .concat
const resultado =  meses.concat(meses2, meses3);
console.log(resultado);


// spread operator
const resultado2 = [...meses,...meses2,...meses3]; // ir tomando una copia de meses, meses2 y meses 3.
console.log(resultado2);
