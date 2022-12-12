 const cliente = {
    nombre: 'adrian',
    saldo:500
 }

 console.log(cliente);


 // Menos comun, pero te permite crear objetos dinamicos y reutilizables
 function Cliente(nombre,saldo){

    this.nombre = nombre;
    this.saldo = saldo;
 }

const David = new Cliente('David',1000)
 const Hector = new Cliente('Hector', 500);

 console.log(Hector);
 console.log(David);