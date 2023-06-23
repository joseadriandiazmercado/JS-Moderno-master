// import { conectarDB, imprimirAlerta } from "./funciones.js";
//Creacion de in IIFE -> creacion de variables que solamente que van a utilizar en el archivo
(function() {
    let DB;
    const formulario = document.querySelector('#formulario');
    document.addEventListener('DOMContentLoaded',() =>{
            conectarDB();
        formulario.addEventListener('submit', validarCliente);
    });


    const validarCliente = e => {
        e.preventDefault();
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        if(nombre === '' || email === '' || telefono === '' || empresa === '' ){
            imprimirAlerta('Todos los campos son obligatorios', 'error')
            console.error('Todos los campos son requeridos');
            return;     
        }

        //Crear un objeto con la informacion
        //En este caso se pueden colcar de ambas formar, llave: valor
        //Porque tienen el mismo 
        const cliente = {
            nombre: nombre,
            email,
            telefono,
            empresa: empresa,
            id: Date.now()
        }
        crearNuevoCliente(cliente);        
    }

    function crearNuevoCliente(cliente) {
        //1. base de datos que vamos a utilizar
        //2. permisos que se requieren 
        const transaction = DB.transaction(['crm'], 'readwrite');
        //Que base de datos vamos a utilizar 
        //objectStore es el encargado de hacer las acciones
        const objectStore = transaction.objectStore('crm');

        //Agregar registro a la bae de datos
        objectStore.add(cliente)

        //Algun error
        transaction.onerror = () =>  imprimirAlerta('Error al registrar nuevo cliente', 'error')
        //To do correcto
        //!!oncomplete con minusculas.......
        transaction.oncomplete = () => {
            imprimirAlerta('Se agrego correctamente');
            //Ir a otra pestana
            setInterval(() => {
                window.location.href = 'index.html'
            }, 3000);
        }
    }

    //Conexion a la base de datos
    //Se realiza el mismo codigo para crearla
    //Si no la encuentra la crea, si la encuentra se conecta
    const conectarDB = () => {
    const abrirConexion = window.indexedDB.open('crm',1)
    //Si falla la conexion a la base de datos
    abrirConexion.onerror = () => console.error('Error al conectarse a la base de datos')

    //Conexion exitosa a la base de datos
    //Instancia de la conexion de la base de datos con todos sus metodos
    abrirConexion.onsuccess = function(e){
        DB = e.target.result;
    }
}
})();