const notificarBtn = document.querySelector('#notificar');



notificarBtn.addEventListener('click',() => {
//Notification -> API nativa de JS
//!Permitir al usuario recibir notificaciones de este sitio
        Notification
            .requestPermission()
            .then(res => console.log('El resultado es', res))
})

const verNotificacionBtn = document.querySelector('#verNotificacion');
// const nombreUrl = window.location.hostname + ':' + window.location.port;
// console.log(nombreUrl)

verNotificacionBtn.addEventListener('click', () => {
        if(Notification.permission === 'granted'){
            //Mostrar notiicacion 'Alerta' en la pantalla
            const notificacion = new Notification('Lugares que te pueden gustar....',{
                icon: 'img/arriba.jpg',
                body: 'Ir al web?'
            });
            notificacion.onclick = function(){
                window.open("https://www.trivago.com.mx");
            }
        }else{
            alert('No tienes permiso para mostrar las notificaciones')
        }  
})
