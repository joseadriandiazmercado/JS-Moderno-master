const reproductor = {

    reproducir: id => console.log(`Reproduciendo cancion con el id #${id}`),
    pausar: () => console.log(`Cancion Pausada`),
    crearPlaylist:nombre_Playlist => console.log(`Playlist ${nombre_Playlist} creada.... `),
    reproducirPlaylist:nombre_Playlist=>console.log(`Reproduciendo PlayList: ${nombre_Playlist}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Agregando ${cancion}`);
    },

    get obtenerCancion(){
        console.log(`${this.cancion}`);
    },

    set lugar(numero){
        this.numero = numero;
        console.log(`cancion en el puesto ${numero}`);
    }, 
    get obtenerLugar(){
        console.log(`${this.numero}`)
    }
    }



reproductor.nuevaCancion = 'SHOW MAN';
reproductor.obtenerCancion;
reproductor.lugar = 10;
reproductor.obtenerLugar;


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
