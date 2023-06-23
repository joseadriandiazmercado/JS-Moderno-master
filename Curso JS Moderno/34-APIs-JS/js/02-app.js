//!Con esta API se puede realiazr un scrollInfinito -> detectar donde se encuentra actualmente el usuario


document.addEventListener('DOMContentLoaded', () => {
    //isIntersecting: false
    let alerta = 1;
    const observer = new IntersectionObserver(entries => {
            if(Notification.permission === 'granted' && alerta == 1){
                alerta++
                const notiicacion = new Notification('Lugares que pueden interesarte...',{
                    icon: 'img/arriba.jpg',
                    body: 'Ir al web?'
                })
                notiicacion.onclick = function(){
                    window.open("https://www.trivago.com.mx");
                }}
                else{
                    console.log('No se tienen los permisos requeridos')
                }
    });
    //isIntersecting: true -> esto cambia cuando el cuando la seccion con la clase seleccionada
    //se muestra en pantalla del usuario
    observer.observe(document.querySelector('.premium'))
})

