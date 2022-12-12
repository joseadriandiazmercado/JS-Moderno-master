// objetos dentro de objetos

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

// Maneras de acceder a los valores del objeto
console.log(producto);
console.log(producto.informacion);
console.log(producto.informacion.medida);
console.log(producto.informacion.peso.peso);

