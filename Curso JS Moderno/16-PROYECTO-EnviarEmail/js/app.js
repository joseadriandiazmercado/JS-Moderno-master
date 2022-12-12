// Ejecutar una vez que ya a sido descargado el documento HTML
document.addEventListener('DOMContentLoaded', function(){
    
    //Creacion de un objeto
    const validacion = { 
        email: '',
        asunto: '',
        mensaje: ''
    }

    // Seleccionar los elementos de la interfaz
    //Variables
    const inputEmail = document.querySelector('#email');
    const inputCc = document.querySelector('#cc');
    const inputAsuto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje')
    const formulario = document.querySelector('#formulario')
    const btnSubmit = document.querySelector('#formulario button[type="submit"]')
    const btnReset = document.querySelector('#formulario button[type="reset"]')
    const spinner = document.querySelector('#spinner');
    // evento es un parametro que se pasa de inmediato al addEventListener
    // para obtener el valor del target (del campo)    
    //asignar eventos 
    inputEmail.addEventListener('input',validar);
    inputAsuto.addEventListener('input', validar);
    inputMensaje.addEventListener('input',validar);
    inputCc.addEventListener('blur', validadCc);
    formulario.addEventListener('submit', enviarEmail);


    btnReset.addEventListener('click',function (evento)  {
        evento.preventDefault(); // prevenir su accion por default
        //reiniciar el objeto (cuando le das reset el objeto sigue guardado con la informacion)
        //Reiniciar los valores del objeto
        validacion.asunto = '';
        validacion.email = '';
        validacion.mensaje = '';
        comprobarValidacion();
        formulario.reset();
    })

    
    function enviarEmail(evento){
        evento.preventDefault();
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
        spinner.classList.remove('flex');
        spinner.classList.add('hidden');
        validacion.asunto = '';
        validacion.email = '';
        validacion.mensaje = '';
        comprobarValidacion();
        formulario.reset();
            
        const alertaExito = document.createElement('P');
        alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold','text-sm','uppercase')
        alertaExito.textContent = 'CORREO ENVIADO';
        formulario.appendChild(alertaExito);
        setTimeout(() => {
            formulario.removeChild(alertaExito); 
        }, 3000);
        formulario.appendChild(alertaExito);
        }, 3000);
    }
    
    function validar(evento){
        //evento.target.id // para apuntar a los id de los campos
        if(evento.target.value.trim() === ''){
             mostrarAlerta(`El campo ${evento.target.id} es obligatorio`, evento.target.parentElement); //evento.target.parentElement (es el lugar donde se va a poner)
             validacion[evento.target.id] = ''; // reiniciamos lo que es el array y se pone un string vacio
             comprobarValidacion();
             return; //detiene la ejecucion del codigo
        }
        if(evento.target.id === 'email' && !validarEmail(evento.target.value)){ //Que este seria el valor del email
            mostrarAlerta('El email no es valido', evento.target.parentElement);//evento.target.parentElement (es el lugar donde se va a poner, EMAIL)
            validacion[evento.target.id] = ''; // reiniciamos lo que es el array y se pone un string vacio
            comprobarValidacion();
            return; //detiene la ejecucion del codigo
        }   
        limpiarAlerta(evento.target.parentElement); // Esto es cuando ya pasa la valiadacion y saber donde va a limpiar la alerta
        // Asignar los valores 
        //Dependiendo del id es donde se van a asignar los valores
        validacion[evento.target.id] = evento.target.value.trim().toLowerCase(); // eliminar los espaios en blanco, va a ser igual a los valores que tenga cada recuadro dependieno con su id
        //comprovar el objeto de validacion
        comprobarValidacion();
    }

    function mostrarAlerta(mensaje, referencia){ // refenrecia es el lugar
        limpiarAlerta(referencia);
        //Generar una alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')
        // Inyectar el error al formulario
        // referencia, se agrega donde detecte el error
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia){
           // comprueba si ya existe una alerta 
        const alerta = referencia.querySelector('.bg-red-600'); // se quita document y se coloca referencia, esto por referencia apunta al DIV 
        if(alerta){
            alerta.remove(); // esto es para eliminar la alerta previa, 
        }
    }

        function validarEmail(email){
            const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/  //Expresion regular
             const resultado = regex.test(email)// para llamar al argumento 
             //A lo que retorna esto
            return resultado;
        }

        function validadCc(evento){
            limpiarAlerta(evento.target.parentElement);
            if(evento.target.value === ''){
                limpiarAlerta(evento.target.parentElement);
            }
           else if(evento.target.id === 'cc' && !validarEmail(evento.target.value)){
                mostrarAlerta('El email no es valido', evento.target.parentElement);
                return; //detiene la ejecucion del codigo
            }
            limpiarAlerta(evento.target.parentElement);
           }

        function comprobarValidacion(){
            //Si algun valor de validacion es un string vacio, no pasa la validacion
            if(Object.values(validacion).includes('')){ // Si quieres que sea un string vacio '' <- sin espacios
                btnSubmit.classList.add('opacity-50'); // agregamos la clase de opacity-50
                btnSubmit.disabled = true; // activacion el button como desactivado
            } else{
                btnSubmit.classList.remove('opacity-50');
                btnSubmit.disabled = false; // desabilitar el disabled que por defecto esta activado
            }
        }
});