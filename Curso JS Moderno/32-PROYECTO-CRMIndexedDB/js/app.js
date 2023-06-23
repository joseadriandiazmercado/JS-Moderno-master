//Creacion de in IIFE -> creacion de variables que solamente que van a utilizar en el archivo
(function(){

    //Variable global para almacenar DB
    let DB;

    const listadoClientes = document.querySelector('#listado-clientes')

    //Archivo listo
    document.addEventListener('DOMContentLoaded',() =>{
        //Abrir la base de datos
        //si no la hay, creara una
        crearDB();

        //Se ejecutara la siguiente linea si hay una base de datos llamada 'crm' en la version '1'
        if(window.indexedDB.open('crm', 1)){
            obtenerClientes();
        }
        listadoClientes.addEventListener('click', eliminarRegistro);
    })
    
    //Eliminar registro
    const eliminarRegistro = (e) =>{
        if(e.target.classList.contains('eliminar')){
            //Obtener el valor de un atributo del DOM
            const id_cliente = Number(e.target.getAttribute('data-cliente'));
            
            //Funcion de confirm() -> despliega una ventana donde aceptar regresa 'true' y cancelar regresa 'false'
            const confirmar = confirm('Deseas eliminar este cliente?');
            //Funcion de alert() -> despliga una ventana con un mensaje
            if(!confirmar) return alert('Fijate...')

            const transaction = DB.transaction(['crm'], 'readwrite');
            //objectStore es el que permite hacer las modificaciones
            const objectStore = transaction.objectStore('crm');
            objectStore.delete(id_cliente);

            transaction.oncomplete = () =>{
                //Se ejecutara la siguiente linea si hay una base de datos llamada 'crm' en la version '1'
                e.target.parentElement.parentElement.remove();
            }

            transaction.onerror = () => console.log('Error');
        }
    }

    //Crea la base de datos de IndexDB
    const crearDB =() => {
        //Variable para la creacion de db
        //1. nombre de db
        //2. version de db
        const crearDB = window.indexedDB.open('crm',1);

        //Ejecutar si hay un error
        crearDB.onerror = () => console.error('Hubo un error en crear DB')
        
        //Afortunadamente funciono
        crearDB.onsuccess = function(e){
            DB = crearDB.result;
        } 

        //Creacion del schema
        crearDB.onupgradeneeded = (e) =>{

            const db = e.target.result;
            //keyPath -> sera la manaera para poder buscar el registro
            const objectStore = db.createObjectStore('crm',{keyPath: 'id',autoIncrement: true})
            
            objectStore.createIndex('nombre', 'nombre',{unique: false})
            //Los valores del schema igual al name que esta apuntando en el DOM
            objectStore.createIndex('email', 'email',{unique: true})
            objectStore.createIndex('telefono', 'telefono',{unique: false})
            objectStore.createIndex('empresa', 'empresa',{unique: false})
            objectStore.createIndex('id', 'id',{unique: true})
            console.info('Base de datos creada');
        }
    }

    const obtenerClientes = () =>{
        //Nuevamente conexion a la base de datos
        const abrirConexion = window.indexedDB.open('crm', 1);

        //En caso de un error
        abrirConexion.onerror = () => console.log('Hubo un error')

        abrirConexion.onsuccess = (e) =>{
            DB = e.target.result;

            //utilizar la base de datos 'crm', y utilizar el contenido de 'crm'
            const objectStore = DB.transaction('crm').objectStore('crm');

            //openCursor
            // método que se utiliza para abrir un cursor sobre un almacén de objetos en una transacción de base de datos en JavaScript.
            objectStore.openCursor().onsuccess = function(e){
                const cursor = e.target.result;
                if(cursor){
                    const {nombre, empresa, telefono, email, id} = cursor.value;
                    listadoClientes.innerHTML += 
                    `<tr>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                        <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                        <p class="text-gray-700">${telefono}</p>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                        <p class="text-gray-600">${empresa}</p>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                        <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                        <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                    </td>
                </tr>`;
                    cursor.continue()
                }else{ 
                    console.log('No hay mas registros....')
                }
            }
        }
    }
}());