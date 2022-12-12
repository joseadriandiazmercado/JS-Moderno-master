const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    informacion: {
        medida: {
            medida: '1m'
        },
        peso: {
            peso: '1Kg',
        }
    },
    origen:{
        pais: "MEXICO"       
    }
}

// ------Destructuring------
// creacion de variables con el valor en el objeto
const {nombre,informacion ,informacion:{medida}, origen, origen:{pais}} = producto;

console.log(nombre);
console.log(informacion);
console.log(origen);





