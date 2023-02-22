//campos del formulario
const mascotaInpuT = document.querySelector('#mascota');
const propietarioInpuT = document.querySelector('#propietario');
const telefonoInpuT = document.querySelector('#telefono');
const fechaInpuT = document.querySelector('#fecha');
const horaInpuT = document.querySelector('#hora');
const sintomasInpuT = document.querySelector('#sintomas');

//formulario
const formulario = document.querySelector('#nueva-cita');
//ul para guardar citas
const contenedorCitas = document.querySelector('#citas');

//modo edicion
let editando;

//Creacion de las clases
class Citas {

    constructor(){
        //donde se van almacenar las citas
        this.citas = [];
    }
    //Metodo para agregar citas 
    agregarCitas(cita){
        //acceder al arreglo vacio
    this.citas = [...this.citas, cita]
    // console.log(this.citas);
    }
    eliminarCita(id){
        //Vamos a acceder a cada cita
        /*filter quita un elemento
                O
         Quita los demas dependiendo de una condicion
        */
        this.citas = this.citas.filter(cita => cita.id !== id )
    }

    editarCita(citaActualizada){
        //map crea un nuevo arreglo
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita )

    }
}
class UI{

    imprimirAlerta(mensaje, tipo){
        const divMensaje = document.createElement('div');
        //Añadir clases al nuevo div creado
        divMensaje.classList.add('text-center','alert','d-block','col-12');

        //Agregar clase en base al tipo de error
        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }
        //Mensaje de error
        divMensaje.textContent = mensaje;

        //Agregar al DOM
        //primero es donde lo queremos ingresar
        //Que queremos agregar
        //y antes de que queremos agregarlo
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

        //Eliminar alerta despues de 3 segundos
        setInterval(() => {
            divMensaje.remove();
        }, 3000);
    }
    //Es como ingresar al arreglo
    // como el "." en los objetos
    imprimirCitas({citas}){

        this.limpiarHTML();

        citas.forEach(cita => {
            const {mascota,propietario,telefono,fecha,hora,sintomas,id} = cita;

            //cada div contendra una cita
            const divCita = document.createElement('div');
            divCita.classList.add('cita','p-3');
            //Agregar un atributo del objeto en cuestion
            divCita.dataset.id = id;

            //scripting de los elementos cita
            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title','font-wight-bolder');
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = `
            <span class="font-weight-bolder">Propietario:</span> ${propietario}`;

            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `
            <span class="font-weight-bolder">Telefono:</span> ${telefono}`;

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `
            <span class="font-weight-bolder">Fecha:</span> ${fecha}`;
            
            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `
            <span class="font-weight-bolder">Hora:</span> ${hora}`;

            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `
            <span class="font-weight-bolder">Sintomas:</span> ${sintomas}`;

            //Boton para eliminar citas
            const bntEliminar = document.createElement('button');
            bntEliminar.classList.add('btn','btn-danger','mr-2');
            bntEliminar.innerHTML = 'Eliminar <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>'
            
            bntEliminar.onclick = () => eliminarCita(id);

            //Boton de modificar
            const btnModificar = document.createElement('button');
            btnModificar.classList.add('btn', 'btn-warning','mr-2');
            btnModificar.innerHTML = 'Modificar <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'
            //Debemos de pasar la cita completa...(objeto completo)
            btnModificar.onclick = () => modificarCita(cita);

            //Agregar los Parrafos al divCita
            //Se deben de ir agregando uno por uno en el div 
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(bntEliminar);
            divCita.appendChild(btnModificar);
            

            //Agregar las citas al html
            contenedorCitas.appendChild(divCita);
        });
    }

    //Metodo para limpiar el html
    limpiarHTML = () => {
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }

    }
}

//Instancias de clases de forma global
const ui = new UI();
const administrar = new Citas();


// mandar a llamar la funcion de escuchas.
eventListeners();

function eventListeners(){

mascotaInpuT.addEventListener('input', datosCita);
propietarioInpuT.addEventListener('input', datosCita);
telefonoInpuT.addEventListener('input', datosCita);
fechaInpuT.addEventListener('input', datosCita);
horaInpuT.addEventListener('input', datosCita);
sintomasInpuT.addEventListener('input', datosCita);
formulario.addEventListener('submit', nuevaCita);

}

/*Donde vamos a guardar todos los datos
//almacenar todos los datos de la cita
//ir llenando el objeto mientras el usuario va llenando la informacion.....
para esto se requiere de "name" en los parametros del html de cada elemento que vamos a llenar */
const citaObj = {
    mascota: '',
    propietario: '',
    telefono:'',
    fecha: '',
    hora: '',
    sintomas:''
}
//funcion para agregar datos al objeto
function datosCita(event){
//.name para acceder el valor de name e insertalo en name del html
//Despues del .target, lo demas son los atributos.... name, value,type,class
//acceder a las propiedades 
citaObj[event.target.name] = event.target.value;
// console.log(citaObj);
} 

//Valida y agrega una nueva cita a la clase de citas
function nuevaCita(event){
    event.preventDefault();

    //extrar la informacion del objeto
    const {mascota,propietario,telefono,fecha,hora,sintomas} = citaObj;

    //validar
    if(mascota === '' || propietario === '' || telefono === ''|| fecha === ''|| hora === ''|| sintomas=== ''){
        //Llamar un funcion con el UI
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
        return;
    }

    if(editando){
        ui.imprimirAlerta('Editado correctamente')

        //Pasar el objeto de la cita a edicion
        //No pasar todo el objeto completo
        //Pasar una copia del objeto
        //lo datos se pasan al objeto cuando se ejecuta el la funcion "modificar cita", el cual llena nuevamente los datos al objeto
        administrar.editarCita({...citaObj})
    
        //Regresar el estado del boton a su estado original
        formulario.querySelector('button[type="submit"]').classList.remove('btn-warning');
        formulario.querySelector('button[type="submit"]').classList.add('btn-success');
        formulario.querySelector('button[type="submit"]').textContent = 'Crear cita';

        //Quitar modo edicion
        editando = false;
    }else{
        
        //Generar un id unico
        //esto para poder eliminar la cita
        //Se pueden agregar datos un arreglo "." mas la llave y el valor
        citaObj.id = Date.now();

        //Crear nueva cita
        //citaObj mostrar donde se guardo y que se guardo
        //{...} tenemos que pasar una copia del objeto
        //esto para que no se sobreescriban todos nuevamente
        administrar.agregarCitas({...citaObj});

        //mensaje de agregado correctamente
        ui.imprimirAlerta('Cita agregada correctamente')
    }
        

        //reiniciar objeto para la validacion
        reiniciarObjeto();

        //reinicia el formulario
        formulario.reset();

        //Mostrar el html de las citas
        ui.imprimirCitas(administrar);
    }

//Colocar los campos del objeto
function reiniciarObjeto(){
        citaObj.mascota = '';
        citaObj.propietario = '';
        citaObj.telefono = '';
        citaObj.fecha = '';
        citaObj.hora = '';
        citaObj.sintomas = '';
} 

function eliminarCita(id) {
        //Eliminar cita
        administrar.eliminarCita(id);
        //Muestre mensaje de eliminado
        ui.imprimirAlerta('Cita Eliminada Correctamente');     
        //refrescar citas
        //Pasamos todo el objeto
        ui.imprimirCitas(administrar);
}

//Se pasa la cita completa, ya no requiere un identificador, se pasan todos los datos del objeto en cuestion
function modificarCita(cita){

    const {mascota,propietario,telefono,fecha,hora,sintomas, id} = cita;

/*llenar los inputs */
    //Tenemos los inputs
    //para colocar un valor al input utilizamos .value
    //Y colocamos como valor, el valor que tenemos en la cita dependiendo del valor
    mascotaInpuT.value = mascota;
    propietarioInpuT.value = propietario;
    telefonoInpuT.value = telefono;
    fechaInpuT.value = fecha;
    horaInpuT.value = hora;
    sintomasInpuT.value = sintomas;

    /*llenar el citaObj */
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    // cambiar el texto del boton del formulario
    formulario.querySelector('button[type="submit"]').classList.remove('btn-success');
    formulario.querySelector('button[type="submit"]').classList.add('btn-warning');
    formulario.querySelector('button[type="submit"]').textContent = 'Modificar Cita';
    // formulario.textContent = 'Modificar Cita'
    editando = true;   
}