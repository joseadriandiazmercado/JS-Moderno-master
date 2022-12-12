// variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');



const max = new Date().getFullYear(); // obtener el año actual
const min = max - 10; // el minimo es año actual - menos diez años

// Generar un objeto con la busqueda y guardar la informacion
const datosBusqueda = {
    marca: '',
    minimo: '',
    maximo: '',
    year: '',
    puertas: '',
    color: '',
    transmision: '',
}

// eventos
document.addEventListener('DOMContentLoaded', () =>{
        mostrarAutos(autos); // muestra los autos al cargar 
        llenarSelect();
})

    // Event listener para los select de busqueda 
    // cuando el valor cambie, mandar a llamar a la siguiente funcion
    // Llenar nuestro arrelgo de datosBusqueda con los datos que seleccione le usurrio
    marca.addEventListener('change',(evento) =>{
        datosBusqueda.marca = evento.target.value;
        filtarAuto();
    })

    year.addEventListener('change', evento  =>{
        // primero es poner, donde lo quiero colocar y despues que valor le voy a agregar
        datosBusqueda.year = evento.target.value;
        filtarAuto();
    })

    minimo.addEventListener('change', evento=>{
        datosBusqueda.minimo = evento.target.value;
        filtarAuto();
    } )

    maximo.addEventListener('change', evento =>{
        datosBusqueda.maximo = evento.target.value;
        filtarAuto();
    })
    puertas.addEventListener('change', evento =>{
        datosBusqueda.puertas = evento.target.value;
        filtarAuto();
    })
    color.addEventListener('change', evento => {
        datosBusqueda.color = evento.target.value;
        filtarAuto();
    })
    transmision.addEventListener('change', evento => {
        datosBusqueda.transmision = evento.target.value;
        filtarAuto();
    })
//funciones
function mostrarAutos(autos){

    limpiarHTML(); // elimina el html previo

    autos.forEach(auto => {
        //DESTRURING
        const {marca,modelo,year,precio,puertas,color,transmision} = auto
        const autoHTML = document.createElement('P');
        autoHTML.textContent = `
        ${marca} - 
        ${modelo} -
        ${year} -  Precio:
        ${precio} - puertas: 
        ${puertas} - Color:
        ${color} - Trasnmision:
        ${transmision}`
        //  insertar al HTML
        resultado.appendChild(autoHTML);
    });

}

// Limpiar HTML
function limpiarHTML(){ // tenemos que limpiar el HTML para que no se junte con el que ya esta impreso (por ello mismo se limpia)

    resultado.textContent = ''; // manera rapida de limpiar el html

}


// genera los años del select
function llenarSelect(){    

    for( let i = max; i >= min; i-- ){
        const opcion = document.createElement('option'); // se pone option, por que el selector es de tipo opcion
        opcion.value =  i;
        opcion.textContent = `${i}`;
        year.appendChild(opcion); //agrega las opciones de año al select

    }
}
//funcion que filtra en base a la busqueda
//FUNCION DE ALTO NIVEL
function filtarAuto(){
    const resultado = autos.filter( filtrarMarca )
    .filter(filtrarYear).filter( filtrarMinimo )
    .filter(filtrarMaximo).filter(filtrarPuertas)
    .filter(filtarColor).filter( filtarTrasnmision);
    

    //Esto se pone en filtrar carro por si no pasa todas las pruebas
    if(resultado.length){
        mostrarAutos(resultado); // si hay resultados que los muestre
    }else {
        encontroNada(); // si no..... que salga la alerta
    }
    
   

}

function filtrarMarca(auto){
    // si datosBusqueda.marca tiene algo, no esta vacia, por ende es TRUE
    if(datosBusqueda.marca){ 
         return auto.marca === datosBusqueda.marca;
    }
    //si el usuario no ha seleccionado nada retornar el automovil completo.
    return auto;
}

function filtrarYear(auto){
    if(datosBusqueda.year){
        // En los formularios los numero se pasan como string, por que debemos de convertirlos a enteros
        // Si en caso de no convertirlos a enteros no lo puede filtrar
        return auto.year === parseInt(datosBusqueda.year);
    }
    return auto;
}

function filtrarMinimo(auto){
    if(datosBusqueda.minimo){
        // auto.precio lo estara buscando del precio de la db de los autos
        return auto.precio >= parseInt(datosBusqueda.minimo);
    }
    return auto;
}

function filtrarMaximo(auto){
    if(datosBusqueda.maximo){
        // auto.precio lo estara buscando del precio de la db de los autos
        return auto.precio <= parseInt(datosBusqueda.maximo);
    }
    return auto;
}

    function filtrarPuertas(auto){
        if(datosBusqueda.puertas){
            return auto.puertas === parseInt(datosBusqueda.puertas)
        }
        return auto;
    }

function filtarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    }
    return auto;
}

function filtarTrasnmision(auto){
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    }   
    return auto;
}

function encontroNada(){
    limpiarHTML();
       const nada = document.createElement('DIV')
       nada.classList.add('alerta','error')
       nada.textContent = 'NO HAY RESULTADOS';
       resultado.appendChild(nada);
}