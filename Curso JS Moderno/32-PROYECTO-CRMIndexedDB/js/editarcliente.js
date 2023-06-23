(function(){
    let DB;
    let idCliente;

    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');

    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {
            conectarDB();    
        //Actualizar el registro
        formulario.addEventListener('submit', actualizarCliente)

        //Verificar el ID de la URL
        const parametrosURL = new URLSearchParams(window.location.search)
        //Obtener el valor del id desde la URL
        idCliente = parametrosURL.get('id')
        if(idCliente){
            setTimeout(() => {
                obtenerCliente(idCliente);
            }, 100);
        }
    })

    const obtenerCliente = (idCliente) => {
            // console.log(`ID del cliete: ${idCliente}`)
            const transaction = DB.transaction(['crm'], 'readwrite')
            const objectStore = transaction.objectStore('crm');

            const cliente = objectStore.openCursor();
            cliente.onsuccess = function(e){
                const cursor = e.target.result;
                // Si hay algun dato
                if(cursor){
                    if(cursor.value.id === Number(idCliente)){
                        llenarFormulario(cursor.value);
                    }
                    //Esto es para continuar al siguiente registro
                    //Si el 'id' coincide con el segundo, sin la siguiente linea no pasara al siguiente registro
                    cursor.continue();
                }
            }
    }

    const llenarFormulario = (datosCliente) => {
        const {nombre, email, telefono, empresa} = datosCliente
        nombreInput.value = nombre
        emailInput.value = email
        telefonoInput.value = telefono
        empresaInput.value = empresa
    }

    const actualizarCliente = (e) => {
          e.preventDefault()
        if(nombreInput.value === '' || emailInput.value === '' || telefonoInput.value === '' || empresaInput.value === '' ){
            imprimirAlerta('Todos los campos son requeridos', 'error')
            return;
        } 

        //Actualizar cliente
            const clienteActualizado = { 
                nombre: nombreInput.value,
                email: emailInput.value,
                telefono: telefonoInput.value,
                empresa:  empresaInput.value,
                id: Number(idCliente)
            }

            const transaction = DB.transaction(['crm'], 'readwrite')
            const objectStore = transaction.objectStore('crm');
            objectStore.put(clienteActualizado);

            transaction.oncomplete = () => {
                imprimirAlerta('Usuario Actualizado')
                setTimeout(() => {
                    window.location.href = 'index.html'
                }, 2000);
            }
            transaction.onerror = (error) => {
                imprimirAlerta('Algo salio mal', 'error')
            }
    }


    const conectarDB = () =>{
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