// Creacion de prottypes
// constructor del objeto para clientes
function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
 }

 // Instanciarlo (se debe de llamar como el constructor)
 Cliente.prototype.tipoCliente = function(){ // funcion busca en el mismo objeto, miestras que arrow funtion busca desde la ventana global 

        let tipo;
        if(this.saldo > 10000){
            tipo = 'Gold'
        } else if(this.saldo) // se pone this.saldo por que toma de referencia al constructor de cliente y despues toma el valor de la instancia creado de cliente
        {
            tipo = 'Silver'
        }
        else{
            tipo = 'Normal'
        }
        return tipo;
    }
 Cliente.prototype.nombreClienteSaldo = function(){
        return `Nombre: ${this.nombre} Y tiene un saldo de ${this.saldo}, Tipo de cliente ${this.tipoCliente()}`
 }

 Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira;
 }

 function Persona(nombre,saldo,telefono){
    Cliente.call(this,nombre, saldo) // mandar a llamar al otro constructor, manera de hacer herencia, Tomar los atributos de cliente
    this.telefono = telefono;
 }


// manera de heredar las prototypes y funciones de otro constructor
// esto se debe de hacer antes de crear una instancia
Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente; // pedir prestado el consTructor de cliente para persona

// instanciarlo
const Adrian = new Persona('Adrian', 4543, 3310615210);
console.log(Adrian);
console.log(Adrian.nombreClienteSaldo());

// solamente para mostrar el numero de telefono de la persona de instanciamos
Persona.prototype.mostrarTelefono= function(){
 return `El telefono de esta persona es ${this.telefono}`
}
console.log(Adrian.mostrarTelefono());