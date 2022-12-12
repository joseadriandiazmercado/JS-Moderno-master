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


 const Adrian = new Cliente('Adrian', 16000);
 const David = new Cliente('David', 6000);


 Adrian.retiraSaldo(2000);
 console.log(Adrian.nombreClienteSaldo());
 console.log(Adrian.tipoCliente()); 
 console.log(Adrian)

console.log(David.nombreClienteSaldo());
 console.log(David.tipoCliente());
 console.log(David)

 
 