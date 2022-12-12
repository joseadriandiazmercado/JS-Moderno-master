
// Eliminar un registron en localstorage
localStorage.removeItem('nombre');


// Actualizar un registro
const meses =JSON.parse(localStorage.getItem('Meses'))
console.log(meses);
meses.push('Nuevo mes');
console.log(meses);

localStorage.setItem('meses', JSON.stringify(meses));
