//Mantener las variables privadas en este documento
//() <-> esto ultimo es para que se ejecute la funcion al iniciar la aplicacion
//Como anteriormente se hacia

// (function(){
//     console.log('Desde un IIFE')
//     window.nombreCliente = 'Adrian'; // -> agregar contenido a la ventana global  
//     console.log(nombreCliente);
// })();

export const nombreCliente = 'Adrian';
export const credito = 200;

export function mostrarInformacion( nombre, credito){
    return `${nombre} tiene un credito de ${credito}`    
}

export function tieneSaldo(ahorro){
    if(ahorro > 0){
        return `Si tiene saldo`
    }else{
        return `No cuenta con saldo suficiente`
    }
}

//Importar clases

export class Cliente{

constructor(nombre,ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
}
    mostrarInformacion(){
        return `${this.nombre} tiene un credito de ${this.ahorro}`    
    }
}

export default function nuevaFuncion(){
    return 'Este es el export default';
}