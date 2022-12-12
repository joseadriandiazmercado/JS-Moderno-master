// Agregar funciones a un arreglo

const reproductor = {

    reproducir: function(id){ // metodos de propieda
        console.log(`Reproduciendo cancion con el id #${id}`);
    },
    pausar: function(){
        console.log(`Cancion Pausada`);
    },
    crearPlaylist: function(nombre_Playlist){
        console.log(`Playlist ${nombre_Playlist} creada.... `)
    },
    reproducirPlaylist:(nombre_Playlist) => {
        console.log(`Reproduciendo PlayList: ${nombre_Playlist}`)
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.Borrar = function(id){

    console.log(`Borrando cancion.....#${id}`);
}
reproductor.Borrar(82);

reproductor.crearPlaylist('Rock');
reproductor.crearPlaylist('Cumbia');
reproductor.reproducirPlaylist('Rock');
