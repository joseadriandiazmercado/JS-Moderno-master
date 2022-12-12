// variables

const formulario = document.querySelector('#formulario')
const listaTweets = document.querySelector('#lista-tweets');
const contenido = document.querySelector('#contenido');
// arreglo vacio de tweets donde vamos a almancenar todos los tweet
let tweets = [];

//Event Listeners

eventListeners();

function eventListeners(){
    // cuando el usuario agrga un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);
  
    // cuando el documento esta listo
    document.addEventListener('DOMContentLoaded',() =>{
        
        tweets = JSON.parse(localStorage.getItem('tweets')) || [] // si encuentra algo en tweets que lo convierta
                                                                  // a arreglo, pero si aun no hay nada que lo convierta a un arreglo vacio
        crearHTML();

    })
}
//Funciones
function agregarTweet(event){
    event.preventDefault();

    // Textarea donde el usuario escribe
    // Una vez que el usuario ponga algo en ese text area con .value vamos a obtener su valor
    const tweet = document.querySelector('#tweet').value;

    //validacion
    if(tweet === ''){
        mostrarError('Un mensaje no puede ir vacio');
        return; // evita que se ejecuten mas lineas de codigo
    }
    const tweetObj = {
        id: Date.now(), // solamente utilizamos Date.now() como un identificador de id
        tweet
    }
    // añadir al arreglo de tweets
    // Siempre para añadir algo a un arreglo es con el spread operation
    tweets = [...tweets, tweetObj]
    
    // una vez agregado vamos a crear el HTML
    crearHTML();
    // reiniciar el formulario
    formulario.reset();
}
// Mostrar mensaje de error
function mostrarError(error){
     const mensajeError = document.createElement('P')
     mensajeError.textContent = error;
     mensajeError.classList.add('error');
     //insertar en el contenido
     contenido.appendChild(mensajeError);    
     setTimeout(() => {
        mensajeError.remove();
     }, 1500);
}
// muestra un listado de los tweets
function crearHTML(){
// para que lo limpie y luego imprima el html
        limpiarHTML(); 

    if(tweets.length > 0){

        tweets.forEach( tweet => {
            //Agregar un boton de eliminar 
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.textContent = 'X';

            //Añadir la funcion de eliminar
            btnEliminar.onclick = ()=>{
                borrarTweet(tweet.id); // identificador de que elemento queremos eliminar
            }

            // Crear el HTML
            const li = document.createElement('li');
            // añadir el texto
            li.textContent = tweet.tweet // por que en el objeto tiene tweet abajo de id
            //Asiganr el boton
            li.appendChild(btnEliminar);
            // insertarlo en el HTML
            listaTweets.appendChild(li)
        });
    }
    // Despues de todo pasar por el foreach y detectar que si hay un tweet lo almancena en localstorage
    almacenarLocalStorage();
}
//Agrega los Tweets actuales a LocalStorage
function almacenarLocalStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

//Borrar tweet
function borrarTweet(id){ // borrar con el id, por su identificador
    tweets = tweets.filter(tweet => tweet.id !== id) // filter filtra los demas con los que si queires trabajar
                                // no traemos todos los demas, menos al que le dimos click
                                // crear un nuevo arreglo con todos los datos que son diferentes al valor seleccionado
    crearHTML();                                      
}


//Limpiar el HTML
function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

