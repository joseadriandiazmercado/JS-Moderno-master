 
 const cargarJSONBtn = document.querySelector('#cargarJSON')
 
 const obtenerDatos = () => {
	 const url = 'data/empleado.json'
	 fetch(url)
	 .then(respuesta => respuesta.json())
	 .then(resultado => mostrarHTML(resultado))
	 .catch(error => console.error(error))
	}
	
	
	const mostrarHTML = ({empresa, nombre}) =>{
		const contenido = document.querySelector('.contenido')
	contenido.innerHTML = `
	<p>Nombre: ${nombre}</p>
	<p>Empresa: ${empresa}</p>
	`
}
cargarJSONBtn.addEventListener('click', obtenerDatos);