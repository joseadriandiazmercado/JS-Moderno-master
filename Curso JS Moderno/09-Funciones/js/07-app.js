// Como se comunican las funciones

iniciarApp();

function iniciarApp() {
    console.log('iniciando app...');
    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda funcion');
    usuarioAuntentificado('Adrian');
}

function usuarioAuntentificado(usuario){

    console.log('Autentificando usuario.... espere....');
    console.log(`Usuraio autentificado exitosamente: ${usuario}`);
}