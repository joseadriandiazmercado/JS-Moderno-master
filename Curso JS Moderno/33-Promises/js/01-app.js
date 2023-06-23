//Creacion de calback
//Codigo que se puede ejecutar de manera async

const paises = ['Francia', 'Espana', 'Mexico', 'Argentina']

const agregarPais = (pais, callback) => { 
    setTimeout(() => {
        paises.push(pais)
        callback();
    }, 2000);

}

const mostrarPaises = () => { 
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais)
        })
    }, 1000);}

mostrarPaises();

agregarPais('Inglaterra', mostrarPaises);