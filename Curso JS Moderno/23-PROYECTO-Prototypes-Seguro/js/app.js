// Constructores 
// Estructura del Objeto
function Seguro(marca,year,tipo){
    
    this.marca = marca
    this.year = year
    this.tipo = tipo

}
//Realiza la cotizacion con los datos(Creacion del prototype)
//Se crea con "function" por que debe de extraer argumentos de otro lado
Seguro.prototype.cotizarSeguro = function(){
    /*
    Valores para la cotizacion
        1 = Americano 1.15
        2 = Asiatico 1.05
        3 = Europeo = 1.35 
    */
    let cantidad;
    const base = 2000;
   //Lo que va a evaluar el switch sera por la marca
   switch(this.marca){
    //No se convierte a numero y pasa el argumento a string
        case '1':
        cantidad = base * 1.15;
        break;
        case '2':
        cantidad = base * 1.05;
        break;
        case '3':
        cantidad = base * 1.35;
        break;
        default:
        break;
   }
   //Leer el anio
    const diferencia = new Date().getFullYear() - this.year;

   //Cada año que la diferencia es mayor, el costo va a reducir un 3%
   //Regla de 3 para sacar el porcentaje de una cantidad
   cantidad -= ((diferencia * 3) * cantidad) / 100;

   /*
    Si el seguro es basico se multiplica por un 30% mas
    Si el seguro es completo se multiplica por un 50% mas
   */
   if(this.tipo === 'basico'){
        cantidad += (cantidad * 30) / 100;
   }
   else if(this.tipo === 'completo') {
        cantidad += (cantidad * 50) / 100;
   }
   //Sera un prototype que haga todos los calculos
   //Y nos regresa una cantidad
   console.log(cantidad);
   return cantidad;
}

// Constructores 
// Estructura del Objeto
function UI(){}

// Llena las opciones de los años 
UI.prototype.llenarOpciones = () =>{
    
    // getFullYear() recuerda que tambien es una funcion
    const max = new Date().getFullYear()
    const min = max - 20; 

    const selectYear = document.querySelector('#year');

    for(let i = max; i >= min; i--){
        let option = document.createElement('option');
        option.value = i; // los valores de i son años
        option.textContent = `${i}`;
        selectYear.appendChild(option);
    }
}
//Muesta alertas en pantalla
// recuerda que arrow function es global 
// y function es solo parte de si 
// toma de parametros un mensaje
// y tipo (que sera si paso la validacion o si no paso la validacion)
UI.prototype.mostrarMensaje = (mensaje, tipo) => { 
    
    //Creacion del div donde vamos a almacenar todo el mensaje
    const div = document.createElement('div');
    // las clases estan en la hoja de estilos
    // y se agregaran si el mensaje es 'error' O 'correcto'
    if(tipo === 'error'){
        div.classList.add('error');
    }else{
        div.classList.add('correcto');
    }
    div.classList.add('mensaje', 'mt-10');
    //Imprimir en el HTML
    div.textContent = mensaje;
    //Insertar en el HTML
    const formulario = document.querySelector('#cotizar-seguro');
    //insertBefore, primero el nuevo nodo y despues donde quieres colocarlo
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        //Que deseas eliminar
        //No, donde deseas eliminarlo
        div.remove()
    }, 3000);
}

UI.prototype.mostrarResultado = (seguro,total) =>{

    //Crear el resultado
    const div = document.createElement('DIV');
    let textoMarca;

    switch(seguro.marca){
        case '1':
            textoMarca ='Americano'
            break;
        case '2':
            textoMarca = 'Asiatico'
            break;
        case '3':
            textoMarca = 'Europeo'
            break;
        default:
            break;
    }

    //tailwind por mt-10
    div.classList.add('mt-10');

    // no poner textContent por que renderiza literalmente todo
    // lo que mostrara el codigo de html en el html
    div.innerHTML = `
    <p class="header">Tu Resumen</p>
    <p class="font-bold">Marca: <span class="font-normal"> ${textoMarca} </span></p>
    <p class="font-bold">Year: <span class="font-normal">  ${seguro.year} </span></p>
    <p class="font-bold">Tipo: <span class="font-normal capitalize">  ${seguro.tipo} </span></p>
    <p class="font-bold">Total: <span class="font-normal">$ ${total} </span></p>
    `
    const resultadoDiv = document.querySelector('#resultado');

    //Mostrar el spinner
    const spinner = document.querySelector('#cargando');
    //style.display = 'block'; es una propiedad css
    //Esto es para mostrar el spinner
    spinner.style.display = 'block';
    setTimeout(() => {
        //Poner estilos al spinner
        // si ponemos spinner.remove() le quita la propidad completa
        // Y ya no dejara utilizarlo despues
        spinner.style.display = 'none'; // se borra el spinner
        resultadoDiv.appendChild(div); // pero se muestra el resultado
    }, 3000);
}


// instanciar UI
const ui = new UI();

//Esto es para cuando el documento ya esta listo
document.addEventListener('DOMContentLoaded', () => {
        // llamamos la instancia y despues el prototype y su funcion
        ui.llenarOpciones(); // Llena el select con los años
})
eventListeners();

function eventListeners(){
    // donde van a estar todo los evenet que seran llamados 
    const formulario = document.querySelector('#cotizar-seguro')
    //Escuchar cuando el usuario haga submit
    //Y mandar a llamar la funcion de cotizarSeguro
    formulario.addEventListener('submit', cotizarSeguro) 
}

function cotizarSeguro(event){
    //Prevenir accion por default
    event.preventDefault();

    //Recuerda que para ingresar al valor de donde ya esta el id, despues de seleccionar el doc. es value
    //Leer la marca seleccionada
    const marca = document.querySelector('#marca').value
    
    //Leer el año seleccionado
    const year = document.querySelector('#year').value

    //Leer el tipo de cobertura
    //selecionamos el input,que name sea = tipo y que seleccione el checado (seleccionado) y obtenemos el valor con .value
    const tipo = document.querySelector('input[name="tipo"]:checked').value
    
    //Si cualquiere de estos parametros tiene un string vacio
    if(marca ==='' || year === '' || tipo === ''){
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        //return para detener el codigo
        return;
    }
    ui.mostrarMensaje('Cotizando....', 'correcto');
    
    //Ocultar las cotizaciones previas
    //Seleccionar div, dentro de resultado
    const resultados = document.querySelector('#resultado div');

        //!= cuando ya no sea null
    if(resultados != null){
    //Al inicio marca como null
    //Esto por no tener ningun elemento
    //Cuando ya no es null es por que ya hay un elemento nuevo 'div'
    //Y cuando entra en el if, elimina el anterior
    //Solo borrara uno
        resultados.remove();
    }


    // Instanciar el seguro
    // esta recibiendo los valores de los documents
    const seguro = new Seguro(marca, year,tipo);
    
    const total = seguro.cotizarSeguro();

    //Utilizar el prototype que va a cotizar.
    ui.mostrarResultado(seguro,total);    
}