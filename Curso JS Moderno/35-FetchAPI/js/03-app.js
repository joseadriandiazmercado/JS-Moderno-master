 
 const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray')
 
 const obtenerDatos = () => {
	 const url = 'data/empleados.json'
	 fetch(url)
	 .then(respuesta => respuesta.json())
	 .then(resultado => mostrarHTML(resultado))
	 .catch(error => console.error(error))
	}
	
	
	const mostrarHTML = (empleados) =>{
		const contenido = document.querySelector('.contenido')
		let html = '';
empleados.forEach(empleado => {

	html += `
	<p>Nombre: ${empleado.nombre}</p>
	<p>Empresa: ${empleado.empresa}</p>
	`
})
	
	contenido.innerHTML = html
}
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);