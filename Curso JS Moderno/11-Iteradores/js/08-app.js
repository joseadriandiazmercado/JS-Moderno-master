//for in , itera sobre arreglos


const autimovil = {
    modelo: 'bochillo',
    year: 2000,
    motor: '5.0',
}

// interactua solamente con objetos, si interactua con un arreglo solo manda el index
for(let partes in autimovil){
    console.log(partes);
    console.log(`${autimovil[partes]}`);
}