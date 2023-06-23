//IndexedDB
//Se puede encontrar con 'aplication', -> IndexedDB
//keyPath -> es la forma que hace referencia a cada campo

let DB;

//Cuando la aplicacion ya esta cargada
document.addEventListener('DOMContentLoaded',()=> {
        crmDB();
        setTimeout(() => {
            crearCliente();
        }, 5000);

})


function crmDB(){

    //Crear base de datos version 1.0
    //windows.indexDB.open('string', number)
    //El primer string es el nombre de la base de datos como un string 'crm'
    //Despues se coloca la version
    let crmDB = window.indexedDB.open('crm', 1);

    //Si hay un error
    crmDB.onerror = function(){
        console.log('Hubo un error a la hora de crear la base de datos')
    }

    //Si se creo correctamente
    crmDB.onsuccess = function(e){
        DB = e.target.result;
        console.log('La base de datos fue creada correctamente')
    }

    //Configuracion de la base de datos
    //Este metodo solo se ejecuta una vez\
    crmDB.onupgradeneeded = function(e){
        const db = e.target.result

        // Crea un almacén de objetos (objectStore) para esta base de datos
        //interactura mucho con la base de datos
        //En los parametros se le pasa lo que es el nombre de la base de datos
        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

        //Definir las columnas
        objectStore.createIndex('nombre','nombre',{ unique: false})
        objectStore.createIndex('email','email',{ unique: true})
        objectStore.createIndex('telefono','telefono',{ unique: false})        

        console.log('Columnas creadas correctamente');

    }
}

function crearCliente(){

    //Insertar datos en la columnas
    //1. nombre de la base de datos
    //2. modo -> readwrite -> escritura y lectura
    let transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplete = function(){
        console.log('Transaccion completada')
    }

    transaction.onerror = function() {
        console.log('Hubo un error en la transaccion');
    }

    //Creacion de un objeto
    const objectStore = transaction.objectStore('crm'); //-> se coloca el nombre de las base de datos


    const nuevoCliente ={ 
            nombre: 'Adrian',
            email: 'correo@correo.com',
            telefono: 3300112233
    }

    const peticion = objectStore.add(nuevoCliente);

    console.log(peticion);
}