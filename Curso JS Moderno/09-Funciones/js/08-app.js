// Multiples funcines que retortan valores

function sumar(a,b){
    return a + b;
}

const resultado = sumar(2,3);

console.log(resultado);

// ejemplo mas avanzado

let total = 0;


function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return impuesto = total*1.16;
    
}

total = agregarCarrito(100);
total = agregarCarrito(300);
total = agregarCarrito(600);
impuesto = calcularImpuesto(total);
console.log(total);
console.log(`IVA: ${impuesto}`);