// variables 

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

let articulosCarrito = [];


// agregar clases al cariito
cargarEventListeners();
function cargarEventListeners(){
        // cuando agregar un curso presionando "Agregar al carrito"
        listaCursos.addEventListener('click', agregarCurso);

        //Elimina cursos del carrito
        carrito.addEventListener('click', eliminarCurso)

        // Muestra los cursos de local storage
        document.addEventListener('DOMContentLoaded',()=> {
            articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || []
            carritoHTML();
        })

        // Vaciar carrito
        vaciarCarritoBtn.addEventListener('click', () =>{
            articulosCarrito = [] // reseteo del arreglo o un arreglo vacio
            limpiarHTML(); // escribira un string ''; y esto es para volver a imprimir el carrito vacio
        });
}

// Funciones
function agregarCurso(e){
    e.preventDefault(); // para que no de los saltos por reiniciar la pagina
    if(e.target.classList){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}       
// elimina un curso del carrito
function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        // Elimina del arreglo articulosCarrito por el data it
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId )
        carritoHTML(); // iterar sobre el carrito y mostrar su HTML

    }
}


// le el contenido HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso){
    //Crear un objeto con el contenido del curso actual
    const infoCurso = {

        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
        
    }

    // Revisa si un elemento ya existe en tu carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)
    if(existe) {
            //crear un nuevo arrelgo
        const cursos = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id){
                    curso.cantidad++; // De los cursos actuales del carrito suma uno
                    return curso; // este retorna el objeto actualizado
            }else {
                return curso; // este rotarno los cursos que no tiene el mismo id o el cliente solamente a comprado una vez
            }

        })

    // articulosCarrito == [...cursos];
        }
    else{
        articulosCarrito = [...articulosCarrito, infoCurso]; // ir copiando los articulos del arreglo anterior
    }
        // Agrega elementos al arrelo de carrito
        carritoHTML();
    }

    // Muestra el carrito de compras en el HTML
    function carritoHTML (){

    //Limpiar el HTML
        limpiarHTML();

    // Recorre el carrito y genera el HTML
    articulosCarrito.forEach( curso =>{

        // Destruring
        const {imagen, titulo, precio, cantidad, id} = curso;

        const row = document.createElement('tr'); // ir creando las tablas
        row.innerHTML = `
        <td>
                <img src="${imagen}" width="100">
        </td>
        <td>
        ${titulo}
        </td>
        <td>
            ${precio}
        </td>
        <td>
        ${cantidad}
        </td>
        
        <td>
                <a href="#" class="borrar-curso" data-id="${id}">X</a>
        </td>
        `
        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })
    // sincronizar al storage.
    almacenarLocalStorage();
}

// Elimina los cursos del tbody

function limpiarHTML(){
    
    // Limpiar de forma lenta
    contenedorCarrito.innerHTML = ' ';

    // while(contenedorCarrito.firstChild){
    //         contenedorCarrito.remove(contenedorCarrito.firstChild)
            // <div>
            // <p>1</p>
            // <p>2</p>
            // <p>3</p>
            // </div>
}
function almacenarLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}