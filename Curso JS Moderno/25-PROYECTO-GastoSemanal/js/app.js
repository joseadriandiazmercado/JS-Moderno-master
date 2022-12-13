/*NOTES*/
//isNaN, obligar al usuario que coloque numeros



//Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


//Eventos
eventListeners();
function eventListeners(){

    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);    
    formulario.addEventListener('submit', agregarGastos);
}

//classes
class Presupuesto{
    //Creacion constructor
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        //Este sera el valor inicial, pues deben de ser la misma cantidad
        this.restante = Number(presupuesto);
        //Donde vamos a agregar los gastos
        this.gastos = [];
    }
    //Creacion del primer metodo
    nuevoGasto(gasto){
        // tomar una copia de ...this.gasto y agregamos gasto al final 
        //Guardar el nuevo gasto en el arreglo vacio
        this.gastos = [...this.gastos, gasto]
        //La funcion de abajo se llamara una vez un nuevo gasto sea agregado
        this.calcularRestante();
    }

    calcularRestante(){
        //reduce va iterando sobre todo el arreglo y nos arroja un gran total 
        const gastado = this.gastos.reduce( (total,gasto) => total + gasto.cantidad, 0);
        //obtener el restante con, restando el presupuesto y lo gastado.
        this.restante = this.presupuesto - gastado;
        // console.log(this.restante);
    }
    eliminarGasto(id){
        //traer el arreglo con 
        //vamos a iterar sobre cada gasto
        // y accedemos a gasto.id
        //y nos traemos todos menor el id que tratamos de eliminar
    this.gastos = this.gastos.filter( gasto => gasto.id !== id);
    // console.log(this.gastos);
    this.calcularRestante();
    }
}



class UI {
    //Primer metodo
        insertarPresuouesto(cantidad){
            //Para no pasar todo el objeto y obtener los valores por separado
            //Extrayendo los valores
                const {presupuesto, restante} = cantidad;
                // console.log('Mensaja de insertarPresupuesto');
                //Escribir los valores en el HTML
                document.querySelector('#total').textContent = presupuesto;
                document.querySelector('#restante').textContent = restante;
        }
        //Hacer reutilizable este metodo
        imprimirAlerta(mensaje,tipo){
            //crear el div
            const divMensaje = document.createElement('DIV');
            //Agregar clases a ese DIV
            //Alert es una clase de botstrap
            divMensaje.classList.add('text-center', 'alert');

            if(tipo == 'error'){
                //Clase de bootstrap que pinta una alerta en color rojo
                divMensaje.classList.add('alert-danger');
            }
            else{
                divMensaje.classList.add('alert-success');
            }
            //Insertar un mensaje
            divMensaje.textContent = mensaje;
            //insertar en el HTML
            //insertBefore(Que vamos a insertar)(DOnde lo queremos colocar)
            document.querySelector('.primario').insertBefore(divMensaje, formulario);

            //Quitar la alerta del HTML
            //Con 3 segundos de espera
            setInterval(() => {
                divMensaje.remove();
            }, 3000);
        }

        mostrarGastos(gastos){ 
            //Elimina el HTML previo   
            this.limpiarHTML();
            //Iterar sobre los gastos
            gastos.forEach(gasto => {

                    const {cantidad, id , nombre} = gasto;

                    //Crear un LI
                    const nuevoGasto = document.createElement('li');
                    //Anadir clases al li
                    nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center' ;
                    //Agregar data-id 
                    nuevoGasto.dataset.id = id;
                    //Agregar el HTML del gasto
                    nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill">$ ${cantidad} </span>`;

                    //Boton para borrar el gasto
                    const btnBorrar = document.createElement('button');
                    btnBorrar.classList.add('btn','btn-danger','borrar-gasto');
                    btnBorrar.textContent = 'x';
                    //De esta manera es hasta cuando preciones click se mnada a llamar la funcion.
                    btnBorrar.onclick = () => {
                        eliminarGasto(id);
                    }

                    nuevoGasto.appendChild(btnBorrar);
                    
                    //Agregar al HTML
                    gastoListado.appendChild(nuevoGasto);

            });
        }
        limpiarHTML(){
            //mientras que tenga algo
            while(gastoListado.firstChild){
                //Removera el primer hijo de la variable
                gastoListado.removeChild(gastoListado.firstChild);
            }
        }

        actualizarRestante(restante){
            document.querySelector('#restante').textContent = restante;
            
        }

        comprobarPresupuesto(presupuestoObj){
            const restanteDiv = document.querySelector('.restante');
            // restanteDiv.classList.remove('alert-danger', 'alert-warning');
            // restanteDiv.classList.add('alert-success');
            formulario.querySelector('button[type="submit"]').disabled = false;
            const {presupuesto, restante} = presupuestoObj;
            //comprobar 25%
            if((presupuesto / 4 ) >= restante){
                //Quitamos la clase de "alert-success" para que se quite el fondo verde
                //En caso de estar disponible, eliminar 'alert-warning'
                restanteDiv.classList.remove('alert-success','alert-warning');
                //Pintamos el Div de otro color
                restanteDiv.classList.add('alert-danger');
                //comprobar 50%
            } else if((presupuesto / 2) >= restante){
                //Quitamos la clase de "alert-success" para que se quite el fondo verde
                restanteDiv.classList.remove('alert-success');
                //Pintamos el Div de otro color
                restanteDiv.classList.add('alert-warning');
            }
            

            else{
                restanteDiv.classList.remove('alert-danger', 'alert-warning');
                restanteDiv.classList.add('alert-success');
            }
            // si el total es 0 o menor
            if(restante <= 0){
                ui.imprimirAlerta('Presupuesto gastado','error');
                //Desactivamos el boton
                formulario.querySelector('button[type="submit"]').disabled = true;
            }
        }
}

    //Instanciar
    const ui = new UI();
    //Esto hace global la instancia de la clase presupuesto y permite acceder a sus propiedades.
    let presupuesto;


//Funciones
function preguntarPresupuesto(){
    //prompt alerta en la pantalla y guardar valor.
    const presupuestoUsuario = prompt('Cual es tu presupuesto');
            // console.log(Number(presupuestoUsuario));
    //Si no guarda nada es null 
    //isNaN para verificar si guarda un caracter en presupuestoUsuario
    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        //Recargar la pagina actual
        window.location.reload();
    }

    //Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);
    ui.insertarPresuouesto(presupuesto);
}


//Anade gastos
//submit del formulario
function agregarGastos(evento){
    evento.preventDefault();
    //Leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);
    //Validad
    if(nombre ===''|| cantidad === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
        // console.log('todos los campos son obligatorios');
    }
    //Verificar que los campos se llenen correctamente
    //isNaN para verificar si coloca letras en los numeros
    else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad Incorrecta', 'error')
        return;
    } 
    else if(!isNaN(nombre)){
        ui.imprimirAlerta('Nombre Gasto Incorrecto', 'error')
        return;

    }

    //Generar un objeto con el gasto
    //une nombre y cantidad a gasto
    //lo contrario a Destroction
    //objet literal
    const gasto = {nombre, cantidad, id: Date.now()};

    //Anade un nuevo gasto
    presupuesto.nuevoGasto(gasto);
    //Alerta de todo correcto.
    ui.imprimirAlerta('Gasto agregado Correctamente', 'success');

    //Para no pasar todo el objeto y solos los gastos
    //Lo que contiene presupuesto es, restante, gastos y presupuesto
    const {gastos , restante} = presupuesto;

    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);

    //Reinicia el formulario
    formulario.reset();
}

function eliminarGasto(id){

    //Elimina los gastos del objeto
    presupuesto.eliminarGasto(id);

    //Elimina los gastos del HTML
    //mostrarGastos tiene que pasar gastos, pero gastos se encuentra en presupuesto.
    // const {gastos} = presupuesto;
    ui.mostrarGastos(presupuesto.gastos);

    //esto toma el restante
    ui.actualizarRestante(presupuesto.restante);

    //esto toma todo el objeto
    ui.comprobarPresupuesto(presupuesto);
}
