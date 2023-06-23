    //Conexion a la base de datos
    //Se realiza el mismo codigo para crearla
    //Si no la encuentra la crea, si la encuentra se conecta
const conectarDB = () => {
        let DB
        const abrirConexion = window.indexedDB.open('crm',1)
        //Si falla la conexion a la base de datos
        abrirConexion.onerror = () => console.error('Error al conectarse a la base de datos')

        //Conexion exitosa a la base de datos
        //Instancia de la conexion de la base de datos con todos sus metodos
        abrirConexion.onsuccess = function(e){
            DB = e.target.result;
        }
    }

const imprimirAlerta = (mensaje, tipo) => {
    //No permitir que se coloque mas de una alerta en el DOM
    const alerta = document.querySelector('.alerta')
    if(!alerta){
        //Crear alerta de error y success
        const divAlerta = document.createElement('div');
        divAlerta.classList.add('px-4', 'py-3','rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center','border','alerta')
        if(tipo === 'error') {
            divAlerta.classList.add('bg-red-100', 'border-red-400','text-red-700')
        }else{ 
            divAlerta.classList.add('bg-green-100', 'border-green-400','text-green-700')
        }
        //Agregar el mensaje de error
        divAlerta.textContent = mensaje;
        //colocar alerta en el DOM
        formulario.appendChild(divAlerta);
        //Quitar alerta despues de 3 segundos
        setTimeout(() => {
            divAlerta.remove();
        }, 3000);
    }
}