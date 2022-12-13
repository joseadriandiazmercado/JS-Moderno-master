// Menos comun, pero te permite crear objetos dinamicos y reutilizables

function Cliente(nombre,saldo){

    this.nombre = nombre;
    this.saldo = saldo;
 }

 //Creando una instancia de juan
const David = new Cliente('David',1000);
const Adrian = new Cliente('Adrian',200);

// recuerda el parametro que tiene que regresar...
function formatearCliente(cliente){
const {nombre, saldo} = cliente;
return `El Cliente ${nombre} tiene un saldo de ${saldo}`
}

console.log(formatearCliente(David))
console.log(formatearCliente(Adrian))

function formatearEmpresa(Empresa){
const {nombre,saldo,categoria} = Empresa
return `El cliente ${nombre} Tiene un saldo de ${saldo} y esta en la categoria ${categoria}`
}

function Empresa(nombre,saldo,categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria
 }

const CCJ = new Empresa('Codigo con juan', 500, 'Cursos de programacion');

console.log(formatearEmpresa(CCJ))