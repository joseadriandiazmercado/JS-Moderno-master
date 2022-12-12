const nombre = localStorage.getItem('nombre')
console.log(nombre);


const productoJSON = localStorage.getItem('producto');
console.log(JSON.parse(productoJSON));



const Meses = localStorage.getItem('Meses');
// JSON.parse es para convertir los string 
//en arreglos o objetos siempre y cuando tengan la forma adecuada
console.log(JSON.parse(Meses));

