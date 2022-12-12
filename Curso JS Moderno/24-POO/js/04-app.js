//private
//Cuando quieres algo privado #
//Y todo lo que este privado debe de llevar el numeral

// class declarations
// class Cliente {
//     //Colocando un numeral convertimos 
//     #nombre
//     //Pasar parametros
//   constructor(nombre,saldo){
//       //Recuerda declarar los parametros () y despues  argumentos 'this'
//       this.#nombre = nombre
//       this.saldo = saldo;
//   }
//   //Metodos (Que literal son funciones)
//   mostrarInformacion(){
//       //this, siempre hace referencia al objeto actual
//       return `Cliente ${this.#nombre}, tu saldo es de ${this.saldo}`;
//   }
//   //Los metodos estaticos no requieren de una instancia
//   static bienvenida(){ 
//       return `Bienvenido al cajero`;
//   }

// };

class Cliente{

    #nombre
    #apellido
    setNombre(nombre){
        this.#nombre = nombre;
    }
    getNombre(){
        return this.#nombre;
    }
}


//Crear instancia de Cliente
const adrian = new Cliente();
//tomamos la instancia
//Colocamos le set- y el argumento que esta esperando 
adrian.setNombre('Adrian');

console.log(adrian)

//Imprimir lo que resiva del set
//Con la instancia de adrian y el metodo get-
console.log(adrian.getNombre());


