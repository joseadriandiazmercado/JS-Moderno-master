const salida = document.querySelector('#salida');
const micro = document.querySelector('#microfono');

const ejecutarSpeechAPI = () => {

const reconocimientoVoz = webkitSpeechRecognition;
//Instanciar webkitSpeechRecognition
const recognition = new reconocimientoVoz();

//Comenzar a grabar
recognition.start();

recognition.onstart = function () {
    salida.classList.add('mostrar')      
    salida.textContent = 'Escuchando....'
}

//Detecta que el usuario dejo de hablar
recognition.onspeechend = function(){
    salida.textContent = 'Se dejo de grabar....';
    //Detener grabacion
    recognition.stop();
};

//Mostrar los resultados de la grabacion
recognition.onresult = function(e){
    //Mostrarlos en consola
    console.log(e.result[0][0].transcript)}

    //Imprimir los resultados en el DOM
    const {confidence,transcript} = e.result[0][0];

    const text = document.createElement('p');
    text.innerHTML = `Grabacion: ${transcript}`

    const seguridad = document.createElement('p');
    seguridad.innerHTML = `Seguridad: ${parseInt(confidence * 100)}%`

    salida.appendChild(seguridad)
    salida.appendChild(text);

}

micro.addEventListener('click', ejecutarSpeechAPI);

