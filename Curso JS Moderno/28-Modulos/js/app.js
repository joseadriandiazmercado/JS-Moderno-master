import { nombreCliente, credito, mostrarInformacion,tieneSaldo, Cliente } from "./cliente.js ";
import { Empresa } from "./empresa.js";

//Funcion exportada con el 'export default'
import nuevaFuncion from "./cliente.js";

console.log(credito)
console.log(tieneSaldo(credito))
console.log(mostrarInformacion(nombreCliente, credito))


const cliente = new Cliente(nombreCliente, credito)

console.log('----------Abajo es desde una clase----------')
console.log(cliente.mostrarInformacion());

//importar empresa
 const empresa = new Empresa('Adrian Diaz', 200, 'Desarrollador');
 console.log(empresa);

 console.log(nuevaFuncion());