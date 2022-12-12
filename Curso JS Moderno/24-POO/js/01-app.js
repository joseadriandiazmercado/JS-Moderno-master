// class declarations
class Cliente {
      //Pasar parametros
    constructor(nombre,saldo){
        //Recuerda declarar los parametros () y despues  argumentos 'this'
        this.nombre = nombre
        this.saldo = saldo;
    }
    //Metodos (Que literal son funciones)
    mostrarInformacion(){
        //this, siempre hace referencia al objeto actual
        return `Cliente ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
    //Los metodos estaticos no requieren de una instancia
    static bienvenida(){
        return `Bienvenido al cajero`;
    }

};

const adrian = new Cliente('Adrian', 400);
//adrian es la instancia y tiene los valores de la Cliente.
//En este caso, adrian tiene que llamar la funcion 
console.log(adrian.mostrarInformacion());
console.log(adrian);
console.log(`Nombre: ${adrian.nombre} Saldo: ${adrian.saldo}`);
console.log('---------------------------------------------------------------------')
console.log(Cliente.bienvenida())




// // class expretions
// const Cliente2 = class {
// //Recuerda declarar los parametros () y despues  argumentos 'this'
//     constructor(edad,peso){
//         this.edad = edad;
//         this.peso = peso;
//     }
// }

// const adrian2 = new Cliente2(22,63);
// //Mostrar toda la clase
// console.log(adrian2);